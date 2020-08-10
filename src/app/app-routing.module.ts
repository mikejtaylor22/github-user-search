import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSingleComponent } from './user-single/user-single.component';


const routes: Routes = [
  {path: 'users', component: UserSingleComponent},
  {path: 'users/:username', component: UserSingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
