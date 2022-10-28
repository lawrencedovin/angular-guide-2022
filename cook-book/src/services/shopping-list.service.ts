import { Injectable } from '@angular/core';
import shoppingListData from '../assets/ingredients-data.json';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private shoppingList = shoppingListData;

  getShoppingList() {
    return this.shoppingList.slice();
  }
}
