export class LimitedDrinks {
    drinks: LimitedDrink[];

    constructor(drinks: LimitedDrink[]) {
        this.drinks = drinks;
    }
}

export class LimitedDrink {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;

    constructor(strDrink: string, strDrinkThumb: string, idDrink: string) {
        this.strDrink = strDrink;
        this.strDrinkThumb = strDrinkThumb;
        this.idDrink = idDrink;
    }
}