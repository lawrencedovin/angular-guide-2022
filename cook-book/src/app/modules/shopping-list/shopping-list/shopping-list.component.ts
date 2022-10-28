import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient>;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList();
  }

  addIngredientToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  deleteIngredientFromList() {
    this.ingredients.pop();
  }

}
