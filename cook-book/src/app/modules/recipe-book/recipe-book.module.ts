import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeDetailComponent } from 'src/app/components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from 'src/app/components/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from 'src/app/components/recipe-list/recipe-list.component';
import { RecipeStartComponent } from 'src/app/components/recipe-start/recipe-start.component';
import { RecipesEditComponent } from 'src/app/components/recipes-edit/recipes-edit.component';


@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeBookComponent,
    RecipeStartComponent,
    RecipesEditComponent
  ],
  imports: [
    // ANGULAR MODULES
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    RecipeBookComponent
  ]
})
export class RecipeBookModule { }
