import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import shoppingListData from '../assets/ingredients-data.json';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  shoppingListChangedEvent = new EventEmitter<Ingredient[]>();

  private shoppingList = shoppingListData;

  getShoppingList() {
    return this.shoppingList.slice();
  }

  addIngredientToList(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
    this.shoppingListChangedEvent.emit(this.shoppingList.slice());
  }

  deleteIngredientFromList() {
    this.shoppingList.pop();
    this.shoppingListChangedEvent.emit(this.shoppingList.slice());
  }
}
