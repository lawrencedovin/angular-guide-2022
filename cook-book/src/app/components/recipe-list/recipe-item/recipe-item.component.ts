import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() selectedRecipeEvent = new EventEmitter<Recipe>();

  onSelectedRecipe() {
    this.selectedRecipeEvent.emit(this.recipe);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
