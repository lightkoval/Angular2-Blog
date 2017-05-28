import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params} from "@angular/router";

import {Post} from "../post";
import { Comment } from '../comment';
import {PostsService} from "../posts.service";
import {FormatDateService} from "../format-date.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  post: Post;
  comment: Comment;

  constructor(private postsService: PostsService,
              private route: ActivatedRoute,
              private formatDateService: FormatDateService) {}

  ngOnInit() :void   {
    this.route.params
      .switchMap((params: Params) => this.postsService.getPost(+params['id']))
      .subscribe(post => this.post = post);
  }



  public format(source: string) {
    return this.formatDateService.formatDate(source);
  }


}
