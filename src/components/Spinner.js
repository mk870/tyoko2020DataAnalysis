import React from 'react'
import { Oval } from  'react-loader-spinner'
import { LoaderStyles } from './styles/LoaderStyles'

const Spinner = () => {
  return (
    <LoaderStyles>
      <Oval
        height="200"
        width="200"
        color="#00BFFF"
        ariaLabel='loading'
      />
    </LoaderStyles>
    
  )
}

export default Spinner




