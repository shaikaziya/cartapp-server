import express from "express";
import {getAllData} from "../helper.js"
const router=express.Router();

router.get("/",async (request, response) =>  {

    if(request.query.rating){
        request.query.rating = +request.query.rating;
    }
    console.log(request.query)
    const movie = await getAllData(request);
    response.send(movie);
});


export const dataRouter=router;