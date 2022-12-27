import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingListService } from 'src/services/shopping-list.service';
import { RecipesService } from 'src/services/recipes.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit{

  id: number;
  recipeItem: Recipe;

  constructor(private shoppingListService: ShoppingListService,
              private recipesService: RecipesService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.recipeItem = this.recipesService.getRecipe(this.id);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.recipeItem = this.recipesService.getRecipe(+params['id']);
        }
      )
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredientsToShoppingList(this.recipeItem.ingredients);
  }
}
