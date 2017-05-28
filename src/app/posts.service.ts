import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import {Post} from "./post";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostsService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private postsUrl = 'api/posts/';

  constructor(private http: Http) {
  }

  getPosts(): Promise <Post[]> {
    return this.http.get(this.postsUrl)
      .toPromise()
      .then(response => response.json() as Post)
      .catch(this.handleError);
  }

  create(post: Post): Promise <void> {
    return this.http.post(this.postsUrl, JSON.stringify(post), {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }


  getPost(id: number): Promise <Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Post)
      .catch(this.handleError)
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}



