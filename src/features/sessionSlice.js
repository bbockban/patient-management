import { createSlice } from '@reduxjs/toolkit';

// Normally would create a different slice for ui and data purposes
// but added all actions under the same

const initialState = {
  modalOpen: false,
  patients: Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
  })),
  isFetchingPatients: false,
  isSubmitingPatient: false,
  currentPatient: {},
};

const sessionReducer = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setCurrentPatient: (state, { payload }) => ({
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
    setIsSubmitingPatient: (state, { payload }) => ({
      ...state,
      isSubmitingPatient: payload,
    }),
    addNewPatient: (state, { payload }) => ({
      ...state,
      isSubmitingPatient: false,
      patients: [payload, ...state.patients],
    }),
    setModalOpen: (state, { payload }) => ({
      ...state,
      modalOpen: payload,
    }),
    editPatient: (state, { payload }) => {
      const updatedPatients = state.patients.map((patient) =>
        patient.id === payload.id ? { ...patient, ...payload } : patient,
      );

      return {
        ...state,
        isSubmitingPatient: false,
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
  setCurrentPatient,
  setIsSubmitingPatient,
} = sessionReducer.actions;

export default sessionReducer.reducer;
