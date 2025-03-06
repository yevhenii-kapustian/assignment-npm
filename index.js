import express from "express";
import alcoholicCoctailsRouter from "./routes/alcoholicCocktailsRouter.js";
import nonAlcoholicCoctailsRouter from "./routes/nonAlcoholicCocktailsRouter.js";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("pages/index.ejs", {
        headTitle: "Coctails",
        pageType: "home"
    })
    
})

app.use("/alcoholicCoctails", alcoholicCoctailsRouter)
app.use("/nonAlcoholicCoctails", nonAlcoholicCoctailsRouter)


app.listen(PORT, () => console.log(`✅ listening on port ${PORT} ➡️ http://localhost:${PORT}`))
