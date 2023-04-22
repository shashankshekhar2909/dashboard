import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  constructor(
    private userService: UserService
  ){
  }

  userList:any = [];

  ngOnInit(): void {
    console.log('Getting Default Data');
    this.getData();
  }

  getData = () => {
    this.userService.getUserList().subscribe({
      next: (resp:any) => {
        console.log(resp);
        this.userList = resp;
        console.log(this.userList);
      },
      error: (HttpResponse: HttpErrorResponse) => {
        // this.snackBar.open(`${HttpResponse.error.detail}`, 'OK', {
        //   duration: 3000,
        //   panelClass: ['error-snackbar'],
        // });
      },
    });
  };


}
