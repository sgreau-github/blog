import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post'
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post
  @Input() idx: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  isLoveIts() {
    return this.post.loveIts > 0;
  }

  onLoveIt() {
    this.post.loveIts++
    this.postService.UpdateLoveItPost(this.idx, this.post.loveIts);
  }

  onDoNotLoveIt() {
    this.post.loveIts--
    this.postService.UpdateLoveItPost(this.idx, this.post.loveIts);
  }

  onRemove(post: Post) {
    this.postService.RemovePost(post);
  }

}
