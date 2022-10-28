import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe>;
  selectedRecipe: Recipe;

  @Output() passRecipeValueEvent = new EventEmitter<Recipe>();

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.recipes;
  }

  getRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  passRecipeValue() {
    this.passRecipeValueEvent.emit(this.selectedRecipe);
  }

}
