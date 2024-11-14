import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@/components/Button';

import DefaultImage from '@/assets/images/user.webp';
import Edit from '@/assets/icons/edit-solid.svg?react';

import { setModalOpen, setCurrentPatient } from '@/features/sessionSlice';

import PatientCardSkeleton from './PatientCardSkeleton';

import './styles.scss';

const PatientCard = ({ patient = {} }) => {
  const dispatch = useDispatch();

  const { createdAt, name, avatar, description, website } = patient || {};

  const isFetching = useSelector(
    ({ sessionReducer: { isFetchingPatients } }) => isFetchingPatients,
  );

  const [isExpanded, setIsExpanded] = useState(false);
  const [imageSrc, setImageSrc] = useState(DefaultImage);

  const handleError = () => {
    setImageSrc(DefaultImage);
  };

  useEffect(() => {
    setImageSrc(avatar);
  }, [avatar]);

  const formattedDate = new Date(createdAt).toLocaleDateString();

  const handleToggleDescription = () => setIsExpanded(!isExpanded);

  if (isFetching) {
    return <PatientCardSkeleton />;
  }

  return (
    <div className="patient">
      <div className="patient__main">
        <div className="patient__header">
          <img
            src={imageSrc}
            alt={name}
            className="patient__avatar"
            onError={handleError}
          />
          <div className="patient__info">
            <h3 className="patient__name">{name}</h3>
            <p className="patient__date">Joined on {formattedDate}</p>
          </div>
          <Edit
            onClick={() => {
              dispatch(setCurrentPatient(patient));
              dispatch(setModalOpen(true));
            }}
            className="patient__edit"
          />
        </div>
      </div>
      <div className="patient__footer">
        {description && (
          <div className="patient__description-container">
            <Button
              onClick={handleToggleDescription}
              className="patient__toggle-button"
            >
              {isExpanded ? 'Hide Description' : 'Show Description'}
            </Button>
          </div>
        )}

        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="patient__website"
          >
            Visit Website
          </a>
        )}
      </div>

      <div
        className={classNames('patient__description', {
          'patient__description--show': isExpanded,
        })}
      >
        {description}
      </div>
    </div>
  );
};

PatientCard.propTypes = {
  patient: PropTypes.shape({
    createdAt: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
    description: PropTypes.string,
    website: PropTypes.string,
  }),
};

export default PatientCard;
