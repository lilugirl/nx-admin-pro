import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {MainLayoutComponent} from './main-layout/main-layout.component';

import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    AdminRoutingModule,  
    SharedModule
  ]
})
export class AdminModule { }
