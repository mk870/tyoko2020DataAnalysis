import React from 'react'
import { ErrorStyles } from './styles/ErrorStyles'

const Errors = ({err}) => {
  return (
    <ErrorStyles>
      <h1>{err}</h1>
    </ErrorStyles>
  )
}

export default Errors