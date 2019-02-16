import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post'

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post : Post

  constructor() { }

  ngOnInit() {
  }

  private isLoveIts() {
    return this.post.loveIts > 0;
  }

  private onLoveIt() {
    this.post.loveIts++
  }

  private onDoNotLoveIt() {
    this.post.loveIts--
  }


}
