import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createData = payload => api.post('/userdata', payload)
export const getAllData = () => api.get('/userdata')
export const updateDataById = (id, payload) => api.put(`/userdata/${id}`,payload)
export const deleteData = id => api.delete(`/userdata/${id}`)
export const getDataById = id => api.get(`/userdata/${id}`)

const apis = {
    createData,
    getAllData,
    updateDataById, 
    deleteData,
    getDataById
}


export default apis