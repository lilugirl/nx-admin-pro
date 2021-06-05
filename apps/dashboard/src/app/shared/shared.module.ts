import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Bootstrap5uiModule} from '@liuyi-ng-ui/bootstrap5ui';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    Bootstrap5uiModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    Bootstrap5uiModule
  ]
})
export class SharedModule { }
