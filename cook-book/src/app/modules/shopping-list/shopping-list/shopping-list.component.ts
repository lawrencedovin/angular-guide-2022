import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientsService } from 'src/services/ingredients.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient>;

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.loadInitRecipes();
  }

  loadInitRecipes() {
    this.ingredientsService
      .getIngredients("../../../assets/ingredients-data.json")
      .subscribe((data: Array<Ingredient>) => {
        this.ingredients = data;
      });
  }

  addIngredientToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  deleteIngredientFromList() {
    this.ingredients.pop();
  }

}
