import {Component, OnInit, Input} from '@angular/core';
import {CommentsService} from "../comments.service";
import { Comment } from "../comment";
import {CreateCommentsService} from "../create-comments.service";
import {FormatDateService} from "../format-date.service";
import {Post} from "../post";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CreateCommentsService]
})
export class CommentsComponent implements OnInit {
  @Input() post: Post;
  comments: Comment[];
  editComment: Comment;
  index: number;

  constructor(private commentsService: CommentsService,
              private createCommentsService: CreateCommentsService,
              private formatDateService: FormatDateService) {
    createCommentsService.commentAdded$.subscribe(
      comment => {
        this.comments.push(comment);
      }
    );
    createCommentsService.commentSave$.subscribe(
      comment =>{
        this.comments[this.index] = comment;
        console.log(1, comment, 2, this.comments[this.index], 3, this.index)
      }
    );
  }

  ngOnInit() {
    this.commentsService.getComments(this.post.id).then(comments => this.comments = comments);
  }

  delete(comment: Comment): void {
    this.commentsService.delete(comment.id).then(() => this.comments = this.comments.filter(c => c !== comment));
  }

  edit(comment: Comment, i: number) {
    this.createCommentsService.editComment(comment);
    this.index = i;
    console.log(this.comments[this.index]);

  }

  format(source: string) {
    return this.formatDateService.formatDate(source);
  }


}
