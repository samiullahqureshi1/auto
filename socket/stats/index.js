import { stats_actions } from "../stats/actions.js";
import { get_stats } from "../../utils/stats/index.js";

export const stats_module = (io, socket) => {
  socket.on(stats_actions.get_stats_dash_board, async (payload, callback) => {
    try {
      const response = await get_stats();
      callback({message:"Cars stats" , response})
    } catch (error) {
        console.log(error.message)
    }
  });
};
