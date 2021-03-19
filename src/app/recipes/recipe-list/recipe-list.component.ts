import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Menudo', 'This is simple a menudo', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?fit=1200%2C879&ssl=1'),
    new Recipe('Adobo', 'This is simple a adobo', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?fit=1200%2C879&ssl=1'),
    new Recipe('Tinola', 'This is simple a tinola', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?fit=1200%2C879&ssl=1')
  ];

  @Output() recipeItemSelected = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log(recipe)
    this.recipeItemSelected.emit(recipe);
  }

}
