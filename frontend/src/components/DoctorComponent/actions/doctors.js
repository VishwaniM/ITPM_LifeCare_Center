import * as api from '../api/index';

//Action creators
export const getDoctors = () => async (dispatch) => {
    try {
        const { data } = await api.fetchDoctors();
        dispatch({type: 'FETCH_ALL', payload: data});


    } catch (error) {
        console.log(error.message);
        
    } 
};

export const getDoctorsBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data: { data } } = await api.fetchDoctorsBySearch(searchQuery);

        dispatch({type: 'FETCH_BY_SEARCH', payload: data});

    } catch (error) {
        console.log(error);
        
    }
};


export const createDoctor = (doctor) => async (dispatch) => {
    try {
        const { data } = await api.createDoctor(doctor);

        dispatch({ type: 'CREATE', payload: data});
        alert("Doctor Added Successfully");
    } catch (error) {
        console.log(error); 
    }
};

export const updateDoctor = (id,doctor) => async (dispatch) => {
    try {
        const { data } = await api.updateDoctor(id, doctor);

        dispatch({ type: 'UPDATE', payload: data});
        alert("Doctor Updated Successfully");
    } catch (error) {
        console.log(error);
    }
};

export const deleteDoctor = (id) => async (dispatch) => {
    try {
        await api.deleteDoctor(id);

        dispatch( { type: 'DELETE', payload: id });
        alert("Deleted Successfully");
    } catch (error) {
        console.log(error);
        
    }
}