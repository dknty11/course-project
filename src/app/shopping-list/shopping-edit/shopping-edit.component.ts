import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import {ArrayTest, Ingredient} from '../../share/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() testAdded = new EventEmitter<ArrayTest>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
  onAddItemTest() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    // test adding even emitter
    const newIngredient1 = new ArrayTest(ingName, ingAmount);
    this.testAdded.emit(newIngredient1);
  }

}
