import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// CUSTOM MODULES
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './modules/shopping-list/shopping-list.module';
import { RecipeBookModule } from './modules/recipe-book/recipe-book.module';
import { FormsModule } from '@angular/forms';

// CUSTOM DIRECTIVES
import { DropdownDirective } from './directives/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // CUSTOM MODULES
    SharedModule,
    ShoppingListModule,
    RecipeBookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
