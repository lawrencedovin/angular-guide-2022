import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/services/shopping-list.service';
import { RecipesService } from 'src/services/recipes.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipeItem: Recipe;

  constructor(private shoppingListService: ShoppingListService,
              private recipesService: RecipesService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipeItem = this.recipesService.getRecipe(this.id);
        }
      )
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredientsToShoppingList(this.recipeItem.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
