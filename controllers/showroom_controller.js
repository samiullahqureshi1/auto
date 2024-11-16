import { Showroom } from "../models/showroom_model.js";

// Create Showroom api

const new_showroom = async (req, resp) => {
try {

    const logo = req.file ? `showroom/${req.file.originalname}` : "";
      req.body.logo = logo;
    
    const data = new Showroom(req.body)
    const save_data = await data.save();
    resp.status(200).send({message:"Showroom saved successfully", data:save_data})
} catch (error) {
   resp.status(400).send(error.message) 
}
}

export { new_showroom }