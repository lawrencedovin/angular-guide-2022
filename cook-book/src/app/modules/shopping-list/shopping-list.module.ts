import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from 'src/app/components/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    // ANGULAR MODULES
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'shopping-list', component: ShoppingListComponent },
    ])
  ]
})
export class ShoppingListModule { }
