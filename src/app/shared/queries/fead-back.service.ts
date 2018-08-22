import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FeadBackService {

  private url = 'http://www.vorotaprom.com.ua/fead-back.php';

  constructor(
    @Inject(forwardRef(() => Http))
    private http: Http
  ) {}

  sendFeadBack(feadBack) {
    return this.http.post(this.url, feadBack);
  }
  sendOrder(order) {
    return this.http.post(this.url, order);
  }
}
