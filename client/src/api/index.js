import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createTest = payload => api.post('test', payload)

const apis = {
    createTest,
}


export default apis