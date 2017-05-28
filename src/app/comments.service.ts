import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { Comment } from './comment'


@Injectable()
export class CommentsService {


  private headers = new Headers({'Content-type': 'application/json'});
  private commentsUrl = 'api/comments/';

  constructor(private http: Http) { }

  create(comment: Comment): Promise <Comment> {
    return this.http.post(this.commentsUrl, JSON.stringify(comment), {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getComments(id: number): Promise <Comment[]> {
    const url = `${this.commentsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  delete(id: number): Promise<void> {
    const url = `${this.commentsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  edit(comment: Comment): Promise<Comment>  {
    const url = `${this.commentsUrl}/${comment.id}`;
    return this.http
      .put(url, JSON.stringify(comment), {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
