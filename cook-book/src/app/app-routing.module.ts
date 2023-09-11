import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './components/recipe-start/recipe-start.component';
import { RecipesEditComponent } from './components/recipes-edit/recipes-edit.component';
import { RecipeBookComponent } from './modules/recipe-book/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './modules/shopping-list/shopping-list/shopping-list.component';
import { RecipesResolverService } from './services/recipes-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeBookComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipesEditComponent },
    {
      path: ':id',
      component: RecipeDetailComponent,
      resolve: [RecipesResolverService]
    },
    {
      path: ':id/edit',
      component: RecipesEditComponent,
      resolve: [RecipesResolverService]
    }
  ]},
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: 'recipes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
