import { Post } from './../../models/post.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit {
  constructor() {}

  @Input() post!: Post;

  ngOnInit(): void {}


  onNewComment( Comment: string ) {
    console.log(Comment);


  }

}
