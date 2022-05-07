import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


export const fetchDoctors = () => API.get('/doctors');
export const fetchDoctorsBySearch = (searchQuery) => API.get(`/doctors/search?searchQuery=${searchQuery.search || 'none'}`);
export const createDoctor = (newDoctor) => API.post('/doctors', newDoctor);
export const updateDoctor = (id, updatedDoctor) => API.patch(`/doctors/${id}`, updatedDoctor);
export const deleteDoctor = (id) => API.delete(`/doctors/${id}`);