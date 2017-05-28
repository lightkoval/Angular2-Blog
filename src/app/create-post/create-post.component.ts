import {Component, OnInit} from '@angular/core';
import {Post} from "../post";
import {PostsService} from "../posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post: Post = new Post();
  authors: any = [{"id": "1", "name": "Zolo"},
    {"id": 2, "name": "Pers"}];

  constructor(private postsService: PostsService,
              private router: Router) {

  }

  ngOnInit() {

  }

  onSubmit(): void {
    if (this.post.body) {
      this.postsService.create(this.post).then(() => this.router.navigate(['/posts']))
    } else {
      this.router.navigate(['/posts']);
    }
  }

}
