import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// CUSTOM MODULES
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './modules/shopping-list/shopping-list.module';
import { RecipeBookModule } from './modules/recipe-book/recipe-book.module';

// CUSTOM DIRECTIVES
import { DropdownDirective } from './directives/dropdown.directive';

// AUTHENTICATION
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    // CUSTOM MODULES
    SharedModule,
    ShoppingListModule,
    RecipeBookModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
