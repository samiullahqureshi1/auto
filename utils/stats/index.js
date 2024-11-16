import { Car } from "../../models/car_model.js";
import { Showroom } from "../../models/showroom_model.js";

export const get_stats = async () => {
  try {
    console.log("total_car_count")
    const total_car_count = await Car.countDocuments();
    const total_cars_sold_count = await Car.countDocuments({
        selling_status:'sold'
    });
    const total_cars_available_count = await Car.countDocuments({
        selling_status:'available'
    });
    const total_cars_under_fixing_count = await Car.countDocuments({
        selling_status:'under_fixing'
    });
    const total_showroom_count = await Showroom.countDocuments();
    const other_company_car = await Car.countDocuments({
        is_auto_king_car: false
    })
    return {
      total_car_count,
      total_cars_sold_count,
      total_cars_available_count,
      total_cars_under_fixing_count,
      total_showroom_count,
      other_company_car
    };
  } catch (error) {
    console.log(error)
  }
};

