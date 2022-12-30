import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingListEditForm', {static: false}) shoppingListEditForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingListService.startedEditing
      .subscribe(index => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListEditForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
        // Used to populate the form input on the clicked ingredient.
      });
  }

  onAddIngredient(form: NgForm){
    const value = form.value;
    const newIngredient = {'name': value.name, 'amount': value.amount};
    if(this.editMode) this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    else this.shoppingListService.addIngredientToShoppingList(newIngredient);
    form.reset();
  }

  onDeleteIngredient() {
    this.shoppingListService.deleteIngredientToShoppingList(this.editedItemIndex);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
