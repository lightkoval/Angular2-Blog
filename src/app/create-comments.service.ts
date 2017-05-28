import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Comment } from './comment'

@Injectable()
export class CreateCommentsService {

  constructor() { }

  private addedCommentSource = new Subject<Comment>();
  private editCommentSource = new Subject<Comment>();
  private saveChangesSource = new Subject<Comment>();


  commentAdded$ = this.addedCommentSource.asObservable();
  commentEdit$ = this.editCommentSource.asObservable();
  commentSave$ = this.saveChangesSource.asObservable();

  addComment(comment: Comment) {
    this.addedCommentSource.next(comment);
  }

  editComment(comment: Comment) {
    this.editCommentSource.next(comment);
  }

  saveChanges(comment: Comment) {
    this.saveChangesSource.next(comment);
  }
}
