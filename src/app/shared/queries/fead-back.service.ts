import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FeadBackService {

  private url = 'http://www.vorotaprom.com.ua/fead-back.php';

  constructor(
    @Inject(forwardRef(() => Http))
    private http: Http
  ) {}

  sendCallBack(callBack) {
    return this.http.post(this.url, callBack);
  }
  sendOrder(order) {
    return this.http.post(this.url, order);
  }
  sendFeadBack(featBack) {
    return this.http.post(this.url, featBack);
  }
}
