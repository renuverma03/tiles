import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';



export const appRoutes: Routes = [
  { path: '', component: UsersComponent },
  {
    path: 'list',
    loadChildren: () => import('./users/users.module').then(mod => mod.UserModule)
  },
];

// @NgModule({
//   imports: [ RouterModule.forRoot(appRoutes) ],
//   exports: [ RouterModule ]
// })
// export class AppRoutingModule {}