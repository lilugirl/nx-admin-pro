import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { UserComponent } from './pages/user/user.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path: 'admin',
    component: MainLayoutComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: '', redirectTo: '/admin/user', pathMatch: 'full'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
