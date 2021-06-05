import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminModule} from './admin/admin.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,SharedModule,AppRoutingModule,AdminModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
