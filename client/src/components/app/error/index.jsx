import React from 'react';
import styles from './error.module.sass';
import CloseIcon from '@mui/icons-material/Close';


const Error = ({ status, data, clearError }) => {
  const getMessage = () => {
    switch (status) {
      case 400:
        return 'Check the input data'
      default:
        return data
    }
  }

  return (
    <div className={styles.errorContainer}>
      <span>{getMessage()}</span>
      <CloseIcon color='white' onClick={clearError}/>
    </div>
  )
}

export default Error;