import React, { useReducer, useRef } from 'react';
import { PatientsReducer, PatientState } from '../../Reduce/PatientReduce';

const Patients = () => {
    const [state,dispetch]=useReducer(PatientsReducer ,PatientState)
    const length=state.patients.length
       const handleSubmit=e=>{
           e.preventDefault();
            dispetch({
                type: 'ADD_PATIENT',
                name: nameRef.current.value,
                id:length+1 
            })
            nameRef.current.value=""
       }
       const nameRef=useRef()
    return (
        <div>
        <h1>Patients Count : {length}</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={nameRef}/>
        </form>
        {
            state.patients.map(pt=><li onClick={()=>dispetch({type: 'REMOVE_PATIENT', id:pt.id})} key={pt.id}>{pt.name}</li>)
        }
    </div>
    );
};

export default Patients;