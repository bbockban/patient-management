import { createSlice } from '@reduxjs/toolkit';

// Normally would create a different slice for ui and data purposes
// but added all actions under the same 

const initialState = {
  modalOpen: false,
  patients:  Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
  })),
  isFetchingPatients: false,
  isCreatingPatient: false,
  currentPatient: {},
};

const sessionReducer = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setCurrentPatient: (state, { payload } ) => ({
      ...state,
      currentPatient: payload,
    }),
    setPatients: (state, { payload: patients }) => ({
      ...state,
      isFetchingPatients: false,
      patients,
    }),
    setLoadingPatients: (state, { payload }) => ({
      ...state,
      isFetchingPatients: payload,
    }),
    addNewPatient: (state, { payload }) => ({
      ...state,
      patients: [
        ...state.patients,
        payload,
      ],
    }),
    setModalOpen: (state, { payload }) => ({
      ...state,
      newPostModalOpen: payload,
    }),
    editPatient: (state, { payload }) => {
      const updatedPatients = state.patients.map(({ id }) => id === payload.id ? { ...patient, ...payload } : patient);
      
      return {
        ...state,
        patients: updatedPatients,
      };
    },
  },
});

export const {
  setModalOpen,
  setLoadingPatients,
  addNewPatient,
  editPatient,
  setPatients,
} = sessionReducer.actions;

export default sessionReducer.reducer;