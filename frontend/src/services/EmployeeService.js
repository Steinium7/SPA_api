const axios = require('axios');

export async function getAllEmployees() {

    const response = await axios.get('/api/users');
    return response.data;
}

export async function createEmployee(data) {
    const response = await axios.post(`/api/user`, {user: data});
    return response.data;
}