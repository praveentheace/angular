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

  setRecipes(recipes: Recipe[]) {
    this.recipe = recipes;
    this.recipesChanged.next(this.recipe.slice());
  }


    private recipe: Recipe[] = [];

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