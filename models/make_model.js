import mongoose from "mongoose";

const make_schema = new mongoose.Schema({
  nameEN: {
    type: String,
  },
  nameAR: {
    type: String,
  },
});

const Make = mongoose.model("Make", make_schema);
export { Make };
