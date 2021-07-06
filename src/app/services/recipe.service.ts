import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'This is simply a test',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ChisTCccgjOKbVBSjpCxPAHaFW%26pid%3DApi&f=1',
      [new Ingredient('bun', 2), new Ingredient('meat', 2)]
    ),
    new Recipe(
      'Pizza',
      'This is one more Test',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1R4hze9Sou3MQzoXTw8aBgHaFj%26pid%3DApi&f=1',
      [new Ingredient('dough', 1), new Ingredient('cheese', 12)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }
}
