import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../shared/models';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipeFromRecipeItem: Recipe;
  
  constructor() { }

  ngOnInit(): void {
  }

  // getDetailFromRecipeItem(recipe: Recipe): void {
  //   this.recipeFromRecipeItem = recipe;
  // }

}
