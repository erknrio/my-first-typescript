class RecipeCore {
    constructor(title, updateDate, author, menu, feedingType, targetAudiences, thematic, difficulty, ingredients, alternativeIngredients, diners, nutritionalValue, preparation, creationDate, price, preparationTime, cookingTime, cookingTemperature, utensils, conservation, exploitation) {
    }
}
class Recipe extends RecipeCore {
    constructor() {
        let today = Date.now();
        today = new Date(today);
        super('', today, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, '', today, undefined, undefined, undefined, undefined, undefined, '', '');
    }
}
