import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Parotta','Wheat parotta','https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245__340.jpg'),
    new Recipe('Parotta','Wheat parotta','https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245__340.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
