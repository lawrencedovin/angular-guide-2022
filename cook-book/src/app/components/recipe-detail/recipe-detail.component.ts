import { Component, Input } from '@angular/core';
import { ShoppingListService } from 'src/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent{

  @Input() recipeItem;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddToShoppingList() {
    this.shoppingListService.addIngredientsToShoppingList(this.recipeItem.ingredients);
  }

}
