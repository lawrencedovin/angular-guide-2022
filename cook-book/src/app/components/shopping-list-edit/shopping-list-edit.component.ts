import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
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
    this.shoppingListService.addIngredientToList(
      {name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value}
    )
    this.onClearInput();
  }

  onDeleteIngredient() {
    this.shoppingListService.deleteIngredientFromList();
  }

  onClearInput() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
