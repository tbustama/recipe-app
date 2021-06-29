import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() selected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ChisTCccgjOKbVBSjpCxPAHaFW%26pid%3DApi&f=1'
    ),
    new Recipe(
      'A second Test',
      'This is one more Test',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1R4hze9Sou3MQzoXTw8aBgHaFj%26pid%3DApi&f=1'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onSelected(recipe: Recipe) {
    this.selected.emit(recipe);
  }
}
