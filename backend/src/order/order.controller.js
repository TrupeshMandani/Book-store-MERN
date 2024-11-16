const createAOrder = async () => {
  try {
    const newOrder = await Order(req.body);
    const saveOrder = await newOrder.save();
    res.status(201).json(saveOrder);
  } catch (error) {}
};
module.export = {
  createAOrder,
};
