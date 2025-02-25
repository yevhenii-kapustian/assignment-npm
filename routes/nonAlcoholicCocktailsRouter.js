import express from "express";
import {nonAlcoholicCoctails} from '../data/cocktailsData.js'

const nonAlcoholicCoctailsRouter = express.Router()

nonAlcoholicCoctailsRouter.get("/", (req, res) => {
    res.render("pages/coctails.ejs", {
        headTitle: "Non Alcoholic Coctails",
        subTitle: "Here you can choose non alcoholic cocktails",
        pageType: "nonAlcoholicHome",
        coctailArray: nonAlcoholicCoctails
    });
});

nonAlcoholicCoctailsRouter.get("/:nonAlcoCoctailUrl", (req, res) => {
    const nonAlcoCoctailUrl = req.params.nonAlcoCoctailUrl;
    const coctailItem = nonAlcoholicCoctails.find((item) => 
        item.imageFilename.split('.')[0].toLowerCase() === nonAlcoCoctailUrl
    );

    if (coctailItem) {
        res.render("pages/coctails.ejs", {
            headTitle: coctailItem.name,
            subTitle: "",
            coctailName: coctailItem.name,
            coctailIngredients: coctailItem.ingredients,
            coctailPreparation: coctailItem.preparation,
            coctailImageFilename: coctailItem.imageFilename,
            coctailGroup: coctailItem.group,
            coctailArray: nonAlcoholicCoctails,
            pageType: "nonAlcoCoctail",
            pageMainRouter: "nonAlcoholicCoctails"
        });
    } else {
        res.status(404).send("Cocktail not found");
    }
});

export default nonAlcoholicCoctailsRouter