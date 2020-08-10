import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  user;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params =>{
      const username = params['username'];
      this.userService.getUser(username)
      .subscribe(user => this.user = user)
    });
  }

}
