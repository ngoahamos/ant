import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [NewUserComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
