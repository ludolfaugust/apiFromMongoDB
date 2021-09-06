const mongoose = require("mongoose");

const { Schema } = mongoose;

const RecipeSchema = new Schema({
  recipeName: {
    type: String,
    required: [true, "Please add a recipeName"],
    maxlength: [50, "max 50 chars are allowed for the recipeName"],
  },
  image: {
    type: String,
  },

  ingredients: {
    type: String,
    maxlength: [1130, "max 5000 chars are allowed for ingredients"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [5000, "max 50 chars are allowed for the description"],
  },
});

// Recipe => recipes
module.exports = mongoose.model("Recipe", RecipeSchema);
