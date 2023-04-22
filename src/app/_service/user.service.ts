import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = 'https://jsonplaceholder.typicode.com/'
  private httpOptions: HttpHeaders;
  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    ) {
    this.httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
  getUserList = () => {
    // const endPoint = this.globals.urlJoin('explore', 'filters');
    // Direct URL
    const path = 'users';
    const endPoint = this.url + path;
    return this.http
      .get(endPoint, {
        headers: this.httpOptions,
      })
      .pipe(
        map((response: any) => {
          // console.log(response);
          return response;
        }),
        catchError((error) => throwError(error))
      );
  }

  getPosts = () => {
    // const endPoint = this.globals.urlJoin('explore', 'filters');
    // Direct URL
    const path = 'users';
    const endPoint = this.url + path;
    return this.http
      .get(endPoint, {
        headers: this.httpOptions,
      })
      .pipe(
        map((response: any) => {
          // console.log(response);
          return response;
        }),
        catchError((error) => throwError(error))
      );
  }

}
