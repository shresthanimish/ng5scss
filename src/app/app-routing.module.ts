import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponent } from './task/task.component';
import {BijayaComponent} from "./bijaya/bijaya.component";
import {RetailersComponent} from "./retailers/retailers.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'task', component: TaskComponent },
  { path: 'bijaya', component: BijayaComponent },
  { path: 'retailers', component: RetailersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
