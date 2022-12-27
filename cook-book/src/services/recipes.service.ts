import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "src/app/models/recipe.model";
import recipesData from "../assets/recipes-data.json";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Array<Recipe> = recipesData;
  selectedRecipeEvent = new EventEmitter<Recipe>();

  constructor() {}

  getRecipes() {
    // Returns new array which us an exact copy of the recipes array
    return this.recipes.slice();
  }

  getRecipe(id: number){
    const recipe = this.recipes.find(
      (recipe) => {
        return recipe.id === id;
      }
    );
    return recipe;
  }
}
