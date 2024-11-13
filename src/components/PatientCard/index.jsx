import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import { useSelector } from 'react-redux';

import 'react-loading-skeleton/dist/skeleton.css';

import Button from '@/components/Button';

import DefaultImage from '@/assets/images/user.webp';
import Edit from '@/assets/icons/edit-solid.svg?react';

import PatientCardSkeleton from './PatientCardSkeleton';

import './styles.scss';

const PatientCard = ({ patient = {} }) => {
  const { createdAt, name, avatar, description, website } = patient || {};

  const isFetching = useSelector(({ sessionReducer: { isFetchingPatients }}) => isFetchingPatients);

  const [isExpanded, setIsExpanded] = useState(false);
  const [imageSrc, setImageSrc] = useState(avatar);

  const handleError = () => {
    setImageSrc(DefaultImage);
  };
  
  const formattedDate = new Date(createdAt).toLocaleDateString();
  
  const handleToggleDescription = () => setIsExpanded(!isExpanded);

  if (isFetching) {
    return <PatientCardSkeleton/>
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
          <Edit onClick={() => {}} className="patient__edit"/>
        </div>
      </div>
      <div className="patient__footer">
        {description && (
          <Button onClick={handleToggleDescription} className="patient__toggle-button">
            {isExpanded ? 'Hide Description' : 'Show Description'}
          </Button>
        )}
        
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer" className="patient__website">
            Visit Website
          </a>
        )}
      </div>
      {/* TODO Handle description display */}
      {/* <div 
          className={
            classNames(
              'patient__description-tooltip', 
              { 'patient__description-tooltip--show': isExpanded },
            )
          }
        >
          {description}
        </div> */}
    </div>
  );
};

export default PatientCard;
