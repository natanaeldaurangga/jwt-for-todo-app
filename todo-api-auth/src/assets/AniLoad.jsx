import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const AniLoad = () => {
  return (
    <FontAwesomeIcon icon={faSpinner} className='animate-spin' />
  )
}

export default AniLoad