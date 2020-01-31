import React, { Component } from 'react';
import * as Cm from './styles';

import IconAwesome from 'react-native-vector-icons/FontAwesome';
import patterns from '../../patterns';

export default FloatButton = props => {

  return (
    <Cm.Button>
      <Cm.ToucheArea {...props}>
        <IconAwesome name='plus' size={25} color={patterns.cl.third} />
      </Cm.ToucheArea>
    </Cm.Button>
  )
}

export const Offset = () => {
  return <Cm.Offset></Cm.Offset>
}