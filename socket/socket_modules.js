import { services_module } from "../socket/services/index.js";
import { showroom_module } from "../socket/showroom/index.js";
import { car_module } from "../socket/cars/index.js";
import { color_module } from "../socket/colors/index.js";
import { billing_module } from "../socket/billing/index.js";
import { make_module } from "../socket/make/index.js";
import { model_module } from "../socket/model/index.js";
import { trim_module } from "../socket/trim/index.js";
import { stats_module } from "./stats/index.js";
export const socket_modules = async (io, socket) => {
  try {
    // Service module
    services_module(io, socket);

    // Showroom module
    showroom_module(io, socket);

    // Car module
    car_module(io, socket);

    // Color module
    color_module(io, socket);

    // Billing module
    billing_module(io, socket);

    // Make module
    make_module(io, socket);

    // Model module
    model_module(io, socket);

    // Trim module
    trim_module(io, socket);

    // Stats
    stats_module(io, socket);

  

  } catch (error) {
    console.log(error);
    
  }
};
