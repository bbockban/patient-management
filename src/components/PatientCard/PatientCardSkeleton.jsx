import React from 'react';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

import './styles.scss';

const PatientCardSkeleton = () => (
  <div className="patient">
    <div className="patient__header">
      <Skeleton circle={true} height={80} width={80} className="patient__avatar" />
      <div className="patient__info">
        <Skeleton width={250} height={20} className="patient__name" />
        <Skeleton width={80} height={16} className="patient__date" />
      </div>
    </div>
    <div className="patient__footer">
      <Skeleton width={100} height={24} className="patient__button" />
    </div>
  </div>
);

export default PatientCardSkeleton;
