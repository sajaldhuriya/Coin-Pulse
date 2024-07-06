import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const Error = ({message}) => {
  return (
    <Alert status='error' position={'fixed'} bottom={'4'} left={'50%'} transform={'translatex(-50%)'} w={['70%','50%']}>
      <AlertIcon />
      {message}
    </Alert>
  )
}

export default Error