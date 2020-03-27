import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{

  recipesChanged = new Subject<Recipe[]>();
  
  updateRecipe(id: number, value: Recipe) {
    this.recipe[id] = value;
    this.recipesChanged.next(this.recipe.slice());
  }
  addRecipe(value: Recipe) {
    this.recipe.push(value);
    this.recipesChanged.next(this.recipe.slice());
  }


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

  getRecipe(id: number){
    return this.recipe[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  deleteIngredient(id: number) {
    this.recipe.splice(id, 1);
    this.recipesChanged.next(this.recipe.slice());
  }

}