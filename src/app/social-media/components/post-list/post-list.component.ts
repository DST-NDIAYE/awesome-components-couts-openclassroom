import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }


  posts$!: Observable<Post[]>;



  ngOnInit(): void {
    this.posts$ = this.route.data.pipe(
      map(data => data['posts'])

    );
  }

}
