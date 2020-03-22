import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Tomato rice', 'this is a tomato rice recipe', 
      'https://upload.wikimedia.org/wikipedia/commons/c/c1/Tomato_Rice_Recipe%2C_South_Indian_Style.jpg'),
    new Recipe('Egg Curry', 'this is a egg curry recipe', 
      'https://upload.wikimedia.org/wikipedia/commons/1/19/Egg_curry.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
