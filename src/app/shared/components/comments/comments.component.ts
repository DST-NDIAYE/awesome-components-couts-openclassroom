import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/core/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor() { }

  @Input() comments!: Comment[] ;

  ngOnInit(): void {
  }

  onLeaveComment() : void {
    
  }

}