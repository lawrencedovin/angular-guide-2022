import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from './recipes.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipesService: RecipesService) { }

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put(
      'https://ng-cook-book-d23c0-default-rtdb.firebaseio.com/recipes.json',
      recipes
    )
    .subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>('https://ng-cook-book-d23c0-default-rtdb.firebaseio.com/recipes.json')
      .subscribe(recipes => {
        this.recipesService.setRecipes(recipes);
    })
  }
}
