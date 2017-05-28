import { Component, OnInit } from '@angular/core';
import { CommentsService } from "../comments.service";
import { Comment } from '../comment';
import { CreateCommentsService } from '../create-comments.service';
import { Subscription }   from 'rxjs/Subscription';


@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css'],
})
export class CreateCommentComponent implements OnInit {
  comment: Comment = new Comment();
  edit: boolean = false;
  subscription: Subscription;

  constructor(private commentsService: CommentsService,
              private createCommentsService: CreateCommentsService) {
    createCommentsService.commentEdit$.subscribe(
      comment => {
        this.comment = comment;
        this.edit = true;
      }
    )
  }

  ngOnInit() {

  }

  onSubmit(): void {
    if (this.edit) {
      this.commentsService.edit(this.comment).then(() => this.edit = false);
      this.createCommentsService.saveChanges(this.comment);
      return;
    } else {
      if (!this.comment.body) { return; }
      this.comment.authorId = 1;
      this.comment.postId = 2;
      this.comment.parentId = 2;
      this.commentsService.create(this.comment).then(comment => this.createCommentsService.addComment(comment));
    }
  }


}
