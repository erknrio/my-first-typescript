/*
declare module namespace {

export interface RootObject {
ingredients: string[];
quantity: number[];
}

}
*/
interface ingredientsList {
    ingredients: string[];
    quantity: number[];
}

interface alternativeIngredientsList extends ingredientsList {
    altIngredient: string[];
    altQuantity: number[];
}

interface nutritionalInfoList {
    [index: string]: number;
    energy: number,
    fat: number,
    carbohydrates: number,
    sugar: number,
    proteins: number
}

abstract class RecipeCore {
    constructor(title: string,
        updateDate: Date,
        author: number,
        menu: number,//entrante, postre, etc.
        feedingType: number[],//vegetariano, sin gluten, etc.
        targetAudiences: number[],//niños, cumpleaños, eventos, etc
        thematic: number,//mexicana, japonesa, hindú, etc.
        difficulty: number,
        ingredients: ingredientsList,//nombre + cantidad
        alternativeIngredients: alternativeIngredientsList,
        diners: number,//cantidad  raciones
        nutritionalValue: nutritionalInfoList,
        preparation: string,//por pasos con foto obligatoria por cada paso ¿video?
        creationDate?: Date,
        price?: number,
        preparationTime?: number,
        cookingTime?: number,
        cookingTemperature?: number,
        utensils?: string[],
        conservation?: string,
        exploitation?: string/*aprovechamiento: recalentar, otras recetas a partir de esta, etc*/) {
            // optional code
        }
    }

class Recipe extends RecipeCore {

    constructor() {
        let today:any = Date.now();
        today = new Date(today);
        super('',
        today,
        undefined,
        undefined,//entrante, postre, etc.
        undefined,//vegetariano, sin gluten, etc.
        undefined,//niños, cumpleaños, eventos, etc
        undefined,//mexicana, japonesa, hindú, etc.
        undefined,
        undefined,//{"ingredients": [], "quantity": []}//nombre + cantidad
        undefined,//{"ingredients": [], "quantity": [], "altIngredient": [], "altQuantity": []}
        undefined,//cantidad  raciones
        undefined,//{"energy": 100, "fat": 50, "carbohydrates": 350, "sugar": 250, "proteins": 820}
        '',//por pasos con foto obligatoria por cada paso ¿video?
        today,
        undefined,//price
        undefined,
        undefined,
        undefined,
        undefined, //['', '']
        '',
        ''/*aprovechamiento: recalentar, otras recetas a partir de esta, etc*/);
    }
}
