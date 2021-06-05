import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import { DocsRoutingModule } from './docs-routing.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    DocsRoutingModule
  ]
})
export class DocsModule { }
