import Reporting from "../models/Reporting.js";

export const create = async (req, res) => {
  const { answer } = req.body;
  const reporting = new Reporting({
    answer,
  });
  await reporting.save();
  res.json({ message: "Success" });
};

export const update = async (req, res) => {
  await Reporting.updateOne({ _id: req.params.id }, { $set: req.body });
  res.json({ message: "success" });
};
