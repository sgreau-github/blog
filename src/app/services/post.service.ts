import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts : Post[] = [
    {
      title: 'first post',
      content: 'Hello, this is the content of the first post',
      loveIts: 0,
      created_at: new Date('12/02/2019')
    },
    {
      title: 'second post',
      content: 'Content of the second post',
      loveIts: 1,
      created_at: new Date('12/02/2019 23:47')
    },
    {
      title: 'Third post',
      content: 'Content of the third post',
      loveIts: 1,
      created_at: new Date('04/19/2020 23:47')
    }
  ];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  AddPosts(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  RemovePost(post: Post) {
    const idx = this.posts.indexOf(post);
    if (idx > 0)
      this.posts.splice(idx, 1);
    this.emitPosts();
  }

}
