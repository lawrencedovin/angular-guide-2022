import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe>;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.loadInitRecipes();
  }

  loadInitRecipes() {
    this.recipesService
      .getRecipes("../../../assets/recipes-data.json")
      .subscribe((data: Array<Recipe>) => {
        this.recipes = data;
      });
  }

}
