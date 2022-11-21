import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url = 'http://localhost:3000/colleagues/';

  constructor(private http: HttpClient) { }

  // GET
  public getData = () => {
    return this.http.get(this.url).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    )
  }
  // POST
  public putData = (collObj: Object) => {
    return this.http.post(this.url, collObj).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    )
  }
  // PATCH
  public patchData = (colId: number, colObj: Object) => {
    return this.http.patch(this.url + colId, colObj).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    )
  }
  // DELETE
  public delData = (clgId: number) => {
    return this.http.delete(this.url + clgId).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    )
  }
}
