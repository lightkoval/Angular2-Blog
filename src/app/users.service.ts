import {Injectable} from '@angular/core';
import {User} from "./user";

import 'rxjs/add/operator/toPromise';
import {Http, Headers} from "@angular/http";

@Injectable()
export class UsersService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private usersUrl = '/api/users/';

  constructor(private http: Http) {
  }

  getUsers(): Promise <User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }


  getUser(id: number): Promise<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  delete(id: number): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(user: User): Promise<User> {
    return this.http.post(this.usersUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  update(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

}
