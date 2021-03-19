import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/models';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipes') recipe: Recipe;
  @Output() recipeItem = new EventEmitter<void>(); // coz EventEmitter wont pass any information

  constructor() { }

  ngOnInit(): void {
  }
  
  onSelected(): void {
    this.recipeItem.emit();
  }

}
