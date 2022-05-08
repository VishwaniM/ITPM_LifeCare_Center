// import Doctor from "../components/Doctors/Doctor/Doctor";

export default(doctors = [], action) => {
    switch (action.type) {
        case 'FETCH_BY_SEARCH':
            return action.payload;
        case 'DELETE':
            return doctors.filter((doctor) => doctor._id !== action.payload);
        case 'UPDATE':
            return doctors.map((doctor) => (doctor._id === action.payload._id ? action.payload : doctor));
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...doctors, action.payload];
            
        default:
            return doctors;
           
    }
}