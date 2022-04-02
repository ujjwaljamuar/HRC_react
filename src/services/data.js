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

export const updateActor = async ({ id, first_name, last_name }) => {
    let data = "id=" + id + "&first_name=" + first_name + "&last_name=" + last_name;
    let response = await axios.get("http://localhost:8080/Backend/updateActor?" + data);
    return response.data;
}

export const deleteActor = async (id) => {
    let data = "id=" + id;
    let response = await axios.get("http://localhost:8080/Backend/deleteActor?" + data);
    return response.data;
}