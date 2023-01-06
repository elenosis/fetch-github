import Coffeeshop from "../models/coffeeshopsModel.js";

const getCoffeeshop = async (req, res, next) => {
  try {
    const coffeeshops = await Coffeeshop.find();
    res.json(coffeeshops);
  } catch (error) {
    next(error);
  }
};

const addCoffeeshop = async (req, res, next) => {
  try {
    const newCoffeeshop = await Coffeeshop.create(req.body);
    res.status(201).send(newCoffeeshop);
  } catch (error) {
    next(error);
  }
};

const deleteCoffeeshop = async (req, res, next) => {
  try {
    res.json(await Coffeeshop.findByIdAndDelete(req.params.id));
  } catch (error) {
    next(error);
  }
};

const updateCoffeeshop = async (req, res, next) => {
  try {
    res.json(
      await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    next(error);
  }
};

export { addCoffeeshop, getCoffeeshop, deleteCoffeeshop, updateCoffeeshop };
