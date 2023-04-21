import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
 
    private recipes: Recipe[] = [
        new Recipe(
                'Tasty Schnitzel', 
                'A super-tasty Schnitzel - just awesome!', 
                'https://simply-delicious-food.com/wp-content/uploads/2019/09/Chicken-schnitzel-4.jpg',
                [
                    new Ingredient('Meat', 1),
                    new Ingredient('French Fries', 20)
                ]
            ),
    
            new Recipe(
                'Big Fat Burger', 
                'What else you need to say?', 
                'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/1479/files/2020/01/Fatburger-1-1.png',
                [
                    new Ingredient('Bread', 2),
                    new Ingredient('Meat', 1)
                ]
            )
    ];
    
    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        
        this.shoppingListService.addIngredients(ingredients);

    }
}