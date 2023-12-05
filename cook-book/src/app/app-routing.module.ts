import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInterceptorService } from './services/auth-interceptor.service';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    loadChildren: () => import('./modules/recipe-book/recipe-book.module')
                        .then(module => module.RecipeBookModule)
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./modules/shopping-list/shopping-list.module')
                        .then(module => module.ShoppingListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
