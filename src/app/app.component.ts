import { Component } from '@angular/core';
import { Post } from './model/post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-blog';

  posts : Post[] = [ 
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
    }
  ];

}
