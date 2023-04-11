import { client } from "./index.js";

export async function getAllData(request) {
    return await client.db("cartappd").collection("cartappc").find(request.query).toArray();
}


