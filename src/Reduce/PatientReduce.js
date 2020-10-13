export const PatientState={
    patients:[]
}

export const PatientsReducer =(state, action) =>{
    switch(action.type) {
        case 'ADD_PATIENT':
            const newPatients ={
                name: action.name,
                id: action.id
            }
            const allPatients =[...state.patients, newPatients]
            
        return {patients: allPatients}
         case 'REMOVE_PATIENT':
             const remainingPatients =state.patients.filter(pt=>pt.id!==action.id)
            return {patients: remainingPatients}
        default:
            return state
    }
}