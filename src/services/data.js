import axios from "axios";

export const getData = async () =>{
    let response = await axios.get("http://localhost:8080/Backend/DataLoading");
    return response.data.actors;
}


