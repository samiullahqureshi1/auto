import mongoose from "mongoose";


const location_schema = new mongoose.Schema({
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
});

const showroom_schema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  is_active: {
    type: Boolean,
  },
  logo: {
    type: String,
  },
  location: {
    type: location_schema,
  },
  is_autoking_showroom:{
    type: Boolean,
  }
});

const Showroom = mongoose.model("Showroom", showroom_schema);
export { Showroom };
