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

  isLoveIts() {
    return this.post.loveIts > 0;
  }

  onLoveIt() {
    this.post.loveIts++
  }

  onDoNotLoveIt() {
    this.post.loveIts--
  }


}
