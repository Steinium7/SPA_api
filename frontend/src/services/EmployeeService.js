const axios = require('axios');

export async function getAllEmployees() {
    // const response = await axios.get("http://localhost:3000/api/all");
    // console.log(response.data[1]
    // // return response.data;
    const res = await fetch('http://localhost:3000/api/all')
    let data = await res.json();
    (Object.values(data))
}

export async function createEmployee(data) {
    const response = await axios.post(`/api/user`, { user: data });
    return response.data;
}
