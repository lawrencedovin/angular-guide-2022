import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { ShoppingListEditComponent } from 'src/app/components/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    ShoppingListEditComponent
  ],
  imports: [
    // ANGULAR MODULES
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    ShoppingListEditComponent
  ]
})
export class ShoppingListModule { }
