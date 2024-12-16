import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { TilesModule } from '../tiles/tiles.module';
@NgModule({
  imports: [
    CommonModule,
    TilesModule  ,
  ],
  providers: [TilesModule],
  declarations: [UsersComponent],
  exports: [UsersComponent]
})
export class UserModule { }
