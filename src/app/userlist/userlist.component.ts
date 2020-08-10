import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
//   template: `
//   <div *ngIf="users">
//     <div *ngFor="let user of users">
//     {{ user.login }}
//     </div>
//     </div>
// `,
templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users;
  userSearch;
  user: string;
  foo;
  username;

  constructor(private userService: UserService) { }

  ngOnInit(){  
    //  this.users = this.userService.getMyUser()
    //  .subscribe(users => {
        
    //      this.users = users;
    // });

    }
//     onSubmit(user: string) {
//       this.foo = this.userService.getUser(user);
//     }

// onSubmit(users: NgForm) {
//   this.users = this.userService.getUsers()
//   .subscribe(users => {
       
//       this.users = users;
      
//      });
//      console.log("on submit works");
// }

onSubmit(userSearch: HTMLInputElement){
  console.log(userSearch);
 
  this.users = this.userService.getUser(userSearch).
  subscribe(users => {
     
      this.users = users;
      
  });

}
}

 
