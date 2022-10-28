import { EventEmitter, Injectable, OnInit } from '@angular/core';
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

  addIngredientToShoppingList(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
    this.shoppingListChangedEvent.emit(this.shoppingList.slice());
  }

  addIngredientsToShoppingList(ingredients: Array<Ingredient>) {
    this.shoppingList.push(...ingredients);
    this.shoppingListChangedEvent.emit(this.shoppingList.slice());
  }

  deleteIngredientToShoppingList() {
    this.shoppingList.pop();
    this.shoppingListChangedEvent.emit(this.shoppingList.slice());
  }
}