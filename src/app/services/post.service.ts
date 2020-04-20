import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts : Post[];
  private serverUrl = 'https://http-client-demo-ef379.firebaseio.com/posts.json';
  postsSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {
  }

  getPosts() {
    this.getPostsFromServer();
  }

  addPosts(post: Post) {
    this.posts.push(post);
    // return new Promise(
    //   (resolve, reject) => {
    //     this.savePostsToServer().then(
    //       () => {
    //         console.log('Enregistrement terminé');
    //         this.emitPosts();
    //         resolve();
    //       },
    //       (error) => {
    //         console.log('Erreur de sauvegarde ! ' + error.message);
    //         reject(error);
    //       }
    //     )
    //   }
    // );
    return this.savePostsToServer();
  }

  removePost(post: Post) {
    const idx = this.posts.indexOf(post);
    if (idx > 0) {
      this.posts.splice(idx, 1);
      this.savePostsToServer();
    }
  }

  updateLoveItPost(idxPost: number, loveIts: number) {
    this.posts[idxPost].loveIts = loveIts;
    this.savePostsToServer();
  }

  private emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  private savePostsToServer() {
    // this.httpClient.put(this.serverUrl, this.posts).subscribe(
    //   () => {
    //     console.log('Enregistrement terminé');
    //   },
    //   (error) => {
    //     console.log('Erreur de sauvegarde ! ' + error);
    //   }
    // );
    return this.httpClient.put(this.serverUrl, this.posts).toPromise().then(
      () => {
        console.log('Enregistrement terminé');
        this.emitPosts();
      },
      (error) => {
        console.log('Erreur de sauvegarde ! ' + error.message);
      }
    );
  }

  private getPostsFromServer() {
    this.httpClient.get<Post[]>(this.serverUrl)
    .subscribe(
      (response) => {
        if (response != null)
          this.posts = response;
        this.emitPosts();
      },
      (error) => {
        console.log('Erreur de chargement ! ' + error);
      }
    );
  }

}
