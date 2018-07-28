import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';  
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NetComponent } from './net/net.component';
import { GrossComponent } from './gross/gross.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NetComponent,
    GrossComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
