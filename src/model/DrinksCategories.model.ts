export class DrinksCategories {
    drinks: StrCategory[];

    constructor(drinks: StrCategory[]) {
        this.drinks = drinks;
    }
}

export class StrCategory {
    strCategory: string;

    constructor(strCategory: string) {
        this.strCategory = strCategory;
    }
}