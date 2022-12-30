import { Component } from '@angular/core';
import { ShoppingListService } from 'src/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent {

  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredient(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredientToShoppingList(newIngredient);
    form.reset();
  }

  onDeleteIngredient() {
    this.shoppingListService.deleteIngredientToShoppingList();
  }
}
