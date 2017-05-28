import { Injectable } from '@angular/core';

@Injectable()
export class FormatDateService {

  constructor() { }

  formatDate(source: string) {
    const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

    let date = new Date(source);
    let today = new Date();

    if (date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return date.getHours() + ":" + date.getMinutes();
    } else {
      return date.getDate() + " " + months[date.getMonth()] + ' ' + date.getFullYear();
    }
  }

}
