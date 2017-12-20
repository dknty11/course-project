import { Component, OnInit } from '@angular/core';
import {ArrayTest, Ingredient} from '../share/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient ('item 1', 200),
    new Ingredient ('item 2', 300),
    new Ingredient ('item 3', 200)
  ];
  testEventEmit: ArrayTest[] = [
    new ArrayTest ('test item', '1'),
    new ArrayTest ('test item', '2'),
    new ArrayTest ('test item', '3'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  onArrayTestAdded(test: ArrayTest) {
    this.testEventEmit.push(test);
  }

}
