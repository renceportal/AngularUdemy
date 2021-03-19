import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ingredients, Recipe } from 'src/app/shared/models';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @Output() newIngredients = new EventEmitter<Ingredients>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: [ null ],
      amount: [ null ]
    })
  }

  submit(): void {
    const form = this.form.getRawValue();
    const objValues = {
      name: form.name,
      amount: form.amount
    } as Ingredients
    this.newIngredients.emit(objValues);
  }

}
