import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeBookComponent } from './modules/recipe-book/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './modules/shopping-list/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipe', pathMatch: 'full' },
  { path: 'recipe', component: RecipeBookComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: 'recipe' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
