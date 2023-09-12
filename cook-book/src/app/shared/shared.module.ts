import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    // ANGULAR MODULES
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
