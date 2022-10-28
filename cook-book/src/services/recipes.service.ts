import { Injectable } from "@angular/core";
import { Recipe } from "src/app/models/recipe.model";
import recipesData from "../assets/recipes-data.json";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Array<Recipe> = recipesData;

}
