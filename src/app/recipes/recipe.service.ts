import { Recipe } from './recipe.model'
import { EventEmitter } from '@angular/core';

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipe: Recipe[] = [
    new Recipe('Tomato rice', 'this is a tomato rice recipe', 
      'https://upload.wikimedia.org/wikipedia/commons/c/c1/Tomato_Rice_Recipe%2C_South_Indian_Style.jpg'),
    new Recipe('Egg Curry', 'this is a egg curry recipe', 
      'https://upload.wikimedia.org/wikipedia/commons/1/19/Egg_curry.jpg')
  ];

  getRecipes(){
      return this.recipe.slice();
  }

}