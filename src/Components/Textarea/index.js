import React from 'react';
import * as Cm from './styles';

export default Textarea = props => {
  return (
    <Cm.Container>
      <Cm.InputText {...props} placeholderTextColor='#AAA' />
    </Cm.Container>
  )
}