import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from './data-storage.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RecipesResolvedService implements Resolve<Recipe[]>{

    constructor(private recipeService: RecipeService, 
        private dataStorageService: DataStorageService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const recipes = this.recipeService.getRecipes();

        if(recipes.length == 0){
            return this.dataStorageService.fetchRecipes();
        }
        else{
            return recipes;
        }
    }

}