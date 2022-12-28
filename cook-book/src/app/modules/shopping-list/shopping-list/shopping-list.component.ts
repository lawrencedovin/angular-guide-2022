import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Array<Ingredient>;
  private shoppingListChangedObservable: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList();
    this.shoppingListChangedObservable = this.shoppingListService.shoppingListChangedEvent
    .subscribe(
      (ingredients: Array<Ingredient>) => this.ingredients = ingredients
    )
  }

  ngOnDestroy(): void {
      this.shoppingListChangedObservable.unsubscribe();
  }
}
