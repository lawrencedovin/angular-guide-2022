import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import shoppingListData from '../assets/ingredients-data.json';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingListChangedEvent = new Subject<Ingredient[]>();

  private shoppingList = shoppingListData;

  getShoppingList() {
    return this.shoppingList.slice();
  }

  addIngredientToShoppingList(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
    this.shoppingListChangedEvent.next(this.shoppingList.slice());
  }

  addIngredientsToShoppingList(ingredients: Array<Ingredient>) {
    this.shoppingList.push(...ingredients);
    this.shoppingListChangedEvent.next(this.shoppingList.slice());
  }

  deleteIngredientToShoppingList() {
    this.shoppingList.pop();
    this.shoppingListChangedEvent.next(this.shoppingList.slice());
  }
}
