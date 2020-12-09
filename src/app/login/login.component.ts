import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

  @Output() loogedin = new EventEmitter<{token: string}>();
  username = '';
  password = 'ruDWLeHr9K7ErsUS';
  url = 'https://demo.credy.in/api/v1/usermodule/login/';
  disabled = false;
  wrongCredentials = true;

  postData = {
    username: this.username,
    password: this.password
  };

  ngOnInit(): void {
  }
  /*
   tslint:disable-next-line:typedef
  */
  check(){
    this.spinner.show();
    this.wrongCredentials = true;
    this.disabled = true;
    this.postData.username = this.username;
    this.postData.password = this.password;
    this.http.post(this.url, this.postData).toPromise().then((data: any) => {
      if (data.is_success === true){
        setTimeout(() => {
          console.log('loggedin');
          console.log(data.data.token);
          this.disabled = false;
          this.loogedin.emit(data.data.token);
          this.spinner.hide();
        }, 1500);
      }
      // tslint:disable-next-line:align
    }).catch((data: any) => {
        console.log(data);
        this.disabled = false;
        this.wrongCredentials = false;
        this.spinner.hide();
    });
  }
}
