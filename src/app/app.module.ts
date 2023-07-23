import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRountingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRountingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
