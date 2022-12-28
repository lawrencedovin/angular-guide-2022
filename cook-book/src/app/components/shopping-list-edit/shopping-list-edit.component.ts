import { Component, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from 'src/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredient(){
    this.shoppingListService.addIngredientToShoppingList(
      {name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value}
    )
    this.onClearInput();
  }

  onDeleteIngredient() {
    this.shoppingListService.deleteIngredientToShoppingList();
  }

  onClearInput() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
