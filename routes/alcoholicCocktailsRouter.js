import express from "express";
import { alcoholicCoctails } from '../data/cocktailsData.js';

const alcoholicCoctailsRouter = express.Router();

alcoholicCoctailsRouter.get("/", (req, res) => {
    res.render("pages/coctails.ejs", {
        headTitle: "Alcoholic Coctails",
        subTitle: "Here you can choose alcoholic cocktails",
        pageType: "alcoholicHome",
        coctailArray: alcoholicCoctails
    });
});

alcoholicCoctailsRouter.get("/:alcoCoctailUrl", (req, res) => {
    const alcoCoctailUrl = req.params.alcoCoctailUrl;
    const coctailItem = alcoholicCoctails.find((item) => 
        item.imageFilename.split('.')[0].toLowerCase() === alcoCoctailUrl
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
            coctailArray: alcoholicCoctails,
            pageType: "alcoCoctail",
            pageMainRouter: "alcoholicCoctails"
        });
    } 
});

export default alcoholicCoctailsRouter;
