import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userList: User[];
  constructor(private http: Http) { }
  getUsers() {
    this.http.get('http://localhost:3005/Users')
      .subscribe(res => this.userList =
        res.json() as User[]);
  }
}
