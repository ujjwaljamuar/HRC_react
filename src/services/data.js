import axios from "axios";

export const getData = async () => {
    let response = await axios.get("http://localhost:8080/Backend/DataLoading");
    let data = response.data.actors;
    data.map((actor, index) => ({ ...actor, "id": index }))
    return data;
}

export const addActor = async ({ first_name, last_name }) => {
    let data = "first_name=" + first_name + "&last_name=" + last_name;
    let response = await axios.get("http://localhost:8080/Backend/addActor?" + data);
    return response.data;
}

