import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { RecipeDetailComponent } from 'src/app/components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from 'src/app/components/recipe-item/recipe-item.component';
import { RecipeListComponent } from 'src/app/components/recipe-list/recipe-list.component';


@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent
  ],
  imports: [
    // ANGULAR MODULES
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent
  ]
})
export class RecipeBookModule { }
