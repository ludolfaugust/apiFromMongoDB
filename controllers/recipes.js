const { rawListeners } = require("../models/Recipe");
const Recipe = require("../models/Recipe");

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    console.log(recipes);
    res.json({
      success: true,
      data: recipes,
      msg: "show all recipes",
    });
  } catch (err) {
    console.log(err);
  }
};

const getRecipe = (req, res) => {
  const { id } = req.params;

  res.send(`get recipe with id ${id}`);
};

const createRecipe = (req, res) => {
  const { recipeName, description, ingredients } = req.body;
  console.log(req.body);

  res.send("create new recipe");
};

const deleteRecipe = (req, res) => {
  const { id } = req.params;

  res.send(`delete recipe with id ${id}`);
};

const updateRecipe = (req, res) => {
  const { id } = req.params;
  const { recipeName, description, ingredients } = req.body;

  res.send(`update recipe with id ${id}`);
};

module.exports = {
  getRecipes,
  getRecipe,
  createRecipe,
  deleteRecipe,
  updateRecipe,
};
