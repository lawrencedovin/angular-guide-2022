import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// CUSTOM MODULES
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './modules/shopping-list/shopping-list.module';
import { RecipeBookModule } from './modules/recipe-book/recipe-book.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CUSTOM MODULES
    SharedModule,
    ShoppingListModule,
    RecipeBookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
