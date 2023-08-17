import { getQuery } from "h3";
import { del } from "../lib/firestore";

export default defineEventHandler(async(e)=>{
    try{
        const {col, id} = getQuery(e);
        await del(col,id);
        return {result:id}
    }catch(error){
        return{error:error.message};
    }
});