import asyncHandler from "express-async-handler";
import Dessert from "../models/dessertModel.js";


const getDessert = asyncHandler(async (req, res) => {
  const desserts = await Dessert.find({});
  res.json(desserts);
});


const getDessertById = asyncHandler(async (req, res) => {
  const dessert = await Dessert.findById(req.params.id);

  if (dessert) {
    res.json(dessert);
  } else {
    res.status(404);
    throw new Error("Food item not found");
  }
});

const deleteDessert = asyncHandler(async (req, res) => {
  const dessert = await Dessert.findById(req.params.id);

  if (dessert) {
    await dessert.remove();
    res.json({ message: "Food item removed" });
  } else {
    res.status(404);
    throw new Error("Food item not found");
  }
});

const createDessert = asyncHandler(async (req, res) => {
  const dessert = new Dessert({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    category: "Sample category",
    description: "Sample description",
  });

  const createdDessert = await dessert.save();
  res.status(201).json(createdDessert);
});

const updateDessert = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const dessert = await Dessert.findById(req.params.id);

  if (dessert) {
    dessert.name = name;
    dessert.price = price;
    dessert.description = description;
    dessert.category = category;
    

    const updatedDessert = await dessert.save();
    res.json(updatedDessert);
  } else {
    res.status(404);
    throw new Error("Food item not found");
  }
});

export { getDessert, getDessertById, deleteDessert, createDessert, updateDessert };
