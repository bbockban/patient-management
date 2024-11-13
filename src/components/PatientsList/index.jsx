import React from 'react';
import {  useSelector } from 'react-redux';

import PatientCard from '@/components/PatientCard';

import './styles.scss'

const PatientsList = () => {
  const patientsToList = useSelector(({ sessionReducer: { patients }}) => patients);
  
  return (
    <div className="patient-list">
      {patientsToList.map((patient) => (
        <PatientCard
          key={patient.id}
          patient={patient}
        />
      ))}
    </div>
  )
}

export default PatientsList;
