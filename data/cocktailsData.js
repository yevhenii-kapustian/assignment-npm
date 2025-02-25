function Coctail(name, ingredients, preparation, imageFilename, group) {
    this.name = name;
    this.ingredients = ingredients;
    this.preparation = preparation;
    this.imageFilename = imageFilename;
    this.group = group
}

let alcoholicCoctails = [
    new Coctail(
        "Long Island",
        "A handful of ice, 20 ml vodka, 20 ml light rum, 20 ml tequila, 20 ml gin, 20 ml triple sec, 20 ml sugar syrup, 20 ml lemon juice, 40 ml cola, 1 slice of lemon",
        "Place ice in a glass. Pour in vodka, rum, tequila, gin, triple sec, syrup and juice, stir. Top up with cola and garnish with lemon.",
        "long-Island.jpg",
        "alcoholicCoctails"
    ),
    new Coctail(
        "Aperol Syringe",
        "Several ice cubes, 90 ml prosecco, 60 ml Aperol, 30 ml soda, 1 slice of orange.",
        "Place ice in a glass. Pour in all the ingredients and mix. Add orange.",
        "aperol-syringe.jpg",
        "alcoholicCoctails"
    ),
    new Coctail(
        "Tequila Sunrise",
        "A handful of ice, 60 ml tequila, 120 ml orange juice, 15 ml grenadine, 1 slice of orange, 1 cocktail cherry.",
        "Place ice in a glass. Add tequila and juice and stir. Slowly pour the grenadine around the rim of the glass. Garnish with orange and cherry.",
        "tequila-sunrise.jpg",
        "alcoholicCoctails"
    )
]

let nonAlcoholicCoctails = [
    new Coctail(
        "Virgin Mojito",
        "2 tsp demerara sugar, 6-8 fresh mint leaves, 0.5 lime, ice cubes, sparkling water",
        "Pour sugar into a tall glass, add mint leaves and grind them. Cut the lime into sections, squeeze the juice into a glass, add lime slices. Fill the glass 3/4 full with ice cubes and stir well. Before serving, fill a glass with mineral water and garnish with mint leaves.",
        "virgin-mojito.jpg",
        "nonAlcoholicCoctails"
    ),
    new Coctail(
        "Virgin Sex On The Beach",
        "1 part orange juice, 1 part cranberry juice, 30 g peach juice, 1 tsp grenadine syrup, ice cubes",
        "Mix juice with ice cubes. Add syrup, garnish with pineapple slices and serve.",
        "virgin-sex-on-the-beach.jpg",
        "nonAlcoholicCoctails"
    ),
    new Coctail(
        "Shirley Temple",
        "45 ml. grenadine syrup, ice cubes, 180 ml. soft drink ginger ale, lemon wedge.",
        "Take a tall glass. Pour grenadine syrup into it. Fill a glass with ice cubes, add ginger ale (i.e. ginger beer) and stir. Serve with a wedge of lemon.",
        "shirley-temple.jpg",
        "nonAlcoholicCoctails"
    )
]

const allCoctails = [...alcoholicCoctails, ...nonAlcoholicCoctails]

export {allCoctails, alcoholicCoctails, nonAlcoholicCoctails}