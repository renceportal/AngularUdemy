import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppModule } from '../app.module';
import { Ingredients } from '../shared/models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnChanges, AfterViewInit {

  newSetOfIngredients: Ingredients;

  ingredients: Ingredients[] = [
    new Ingredients('Apples', 2),
    new Ingredients('Tomatoes', 2)
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnChanges(simple: SimpleChanges): void {
  }

  getNewSetOfIngredients(ingredients: Ingredients): void {
    this.ingredients.push(ingredients)
  }

}
