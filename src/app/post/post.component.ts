import {Component, OnInit, Input} from '@angular/core';
import {Post} from '../post';
import 'rxjs/add/operator/toPromise';
import {FormatDateService} from "../format-date.service";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor(private formatDateService: FormatDateService) {
  }

  ngOnInit() {
  }

  public format(sourse: string) {
    return this.formatDateService.formatDate(sourse);
  }

}
