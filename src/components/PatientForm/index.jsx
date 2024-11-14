import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import BaseModal from '@/components/BaseModal';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Toast from '@components/Toast';

import {
  setModalOpen, 
  setCurrentPatient,
  addNewPatient,
  editPatient,
  setIsSubmitingPatient,
} from '@/features/sessionSlice';

import DefaultImage from '@/assets/images/user.webp';

import schema from './validation.js';

import './styles.scss';

const PatientForm = () => {
  const dispatch = useDispatch();
  
  const isOpen = useSelector(({ sessionReducer: { modalOpen }}) => modalOpen);
  const patient = useSelector(({ sessionReducer: { currentPatient }}) => currentPatient);
  const isLoading = useSelector(({ sessionReducer: { isSubmitingPatient }}) => isSubmitingPatient);

  const [imagePreview, setImagePreview] = useState(DefaultImage);
  const [texts, setTexts] = useState({
    success: 'Patient created!',
    title: 'Create a new Patient',
  });

  const isEdit = !!patient?.id;

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(setIsSubmitingPatient(true));

    if (isEdit) {
      dispatch(editPatient({
        ...data,
        avatar: imagePreview,
        id: patient.id,
      }));
    } else {
      const today = new Date();

      dispatch(addNewPatient({
        ...data,
        avatar: imagePreview,
        createdAt: today.toISOString(),
        id: `${data?.name}-${today.toISOString()}`
      }));
    }

    Toast(texts.success, 'success')
    reset();
    dispatch(setModalOpen(false));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const image = new Image();

      image.src = URL.createObjectURL(file);

      image.onload = () => {
        setImagePreview(image.src); 
      };
    }
  };

  useEffect(() => {
    if (isOpen) {
      console.log(patient)

      reset({
        name: patient?.name || '',
        description: patient?.description || '',
        image: patient?.image || '',
        website: patient?.website || ''
      });
      setImagePreview(patient?.avatar || '');

      if (isEdit) {
        setTexts({
          success: 'Patient edited!',
          title: 'Edit a Patient',
        });
      } 
    } else {
      reset();
      setImagePreview(DefaultImage);
      setTexts({
        success: 'Patient created!',
        title: 'Create a new Patient',
      });
    }
  }, [isOpen, isEdit]);

  return (
    <BaseModal 
      isOpen={isOpen} 
      onClose={() => {
        dispatch(setCurrentPatient({}));
        dispatch(setModalOpen(false));
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="patient-form">
        <h2 className="patient-form__title">{texts.title}</h2>
        
        <Input
          label="Name"
          placeholder="Enter patient name"
          {...register('name')}
          error={errors.name?.message}
        />

        <Input
          label="Description"
          placeholder="Enter a brief description"
          isTextArea
          {...register('description')}
          error={errors.description?.message}
        />

        <div className="patent-form__image-input">
          {imagePreview && (
            <div className="patent-form__image-display">
              <img 
                src={imagePreview} 
                alt="Patient Preview" 
                className="patient-form__image" 
                onError={() => setImagePreview(DefaultImage)}
              />
            </div>
          )}
          <Input
            label="Avatar"
            type="file" 
            accept="image/*"
            error={errors.avatar?.message}
            onChange={handleImageUpload}
          />
        </div>

        <Input
          label="Website"
          placeholder="Enter website URL"
          type="url"
          {...register('website')}
          error={errors.website?.message}
          description="Provide the patient's personal or official website link."
        />

        <Button 
          type="submit" 
          className="patient-form__button"
          disabled={isLoading}  
        >
          Save
        </Button>
      </form>
    </BaseModal>
  );
};

export default PatientForm;
