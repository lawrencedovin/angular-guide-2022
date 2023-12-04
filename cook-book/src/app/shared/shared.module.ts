import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    // ANGULAR MODULES
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
