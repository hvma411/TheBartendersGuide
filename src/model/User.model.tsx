export class User {
    email: string;
    favouriteDrinks: any[];

    constructor(email: string, favouriteDrinks: any[]) {
        this.email = email;
        this.favouriteDrinks = favouriteDrinks;
    }
}