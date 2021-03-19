import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Recipe } from 'src/app/shared/models';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() recipeDetails: Recipe;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(simple: SimpleChanges): void {
    console.log(this.recipeDetails)
  }

  ngAfterViewInit(): void {
    
  }

}
