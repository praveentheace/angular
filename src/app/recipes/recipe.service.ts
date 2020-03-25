import { Recipe } from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipe: Recipe[] = [
    new Recipe('Tomato rice', 'this is a tomato rice recipe', 
      'https://upload.wikimedia.org/wikipedia/commons/c/c1/Tomato_Rice_Recipe%2C_South_Indian_Style.jpg',
      [
          new Ingredient('Tomato', 10),
          new Ingredient('onion', 2)
      ]),
    new Recipe('Egg Curry', 'this is a egg curry recipe', 
      'https://upload.wikimedia.org/wikipedia/commons/1/19/Egg_curry.jpg',
      [
          new Ingredient('Egg', 4),
          new Ingredient('Tomato', 2)
      ])
  ];

  constructor(private slService: ShoppingListService){

  }

  getRecipes(){
      return this.recipe.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}