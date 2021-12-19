import { useEffect, useState } from "react";
import axios from "axios";
import { getFutureDates } from "../utils/time";

function useAPI<Type>(url: string){
    
    const [data, setData] = useState<Type>();
    const [loading, setLoading] = useState<boolean>();
    getFutureDates(123412);

    useEffect(()=>{
        setLoading(true);

        axios.get(url).then(res=>{
        if(res) setData(res.data);
        setLoading(false);
        })
    }, [])

    return [data, loading];
}
export default useAPI;