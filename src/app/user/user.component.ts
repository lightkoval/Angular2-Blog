import {Component, OnInit, Input} from "@angular/core";
import {User} from "../user";
import "rxjs/add/operator/toPromise";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService]
})

export class UserComponent  {
  @Input() user: User;

}
