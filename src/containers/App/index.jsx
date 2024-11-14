import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@/components/Button';
import PatientsList from '@/components/PatientsList';
import Toast from '@/components/Toast';

import fetchPatients from '@/api/session.service';

import {
  setPatients,
  setLoadingPatients,
  setModalOpen,
  setCurrentPatient,
} from '@/features/sessionSlice';

import './styles.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInitPatients = async () => {
      dispatch(setLoadingPatients(true));

      try {
        const data = await fetchPatients();

        dispatch(setPatients(data));
      } catch {
        Toast('Somthing went wrong!', 'error');
      } finally {
        dispatch(setLoadingPatients(false));
      }
    };

    fetchInitPatients();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">Patients List</h1>
        <Button
          onClick={() => {
            dispatch(setCurrentPatient({}));
            dispatch(setModalOpen(true));
          }}
        >
          Add New Patient
        </Button>
      </div>
      <PatientsList />
    </div>
  );
};

export default App;
