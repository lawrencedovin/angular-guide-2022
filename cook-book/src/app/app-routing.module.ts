import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './components/recipe-start/recipe-start.component';
import { RecipeBookComponent } from './modules/recipe-book/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './modules/shopping-list/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeBookComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: ':id', component: RecipeDetailComponent }
  ]},
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: 'recipes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
