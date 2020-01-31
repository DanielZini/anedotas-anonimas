import React from 'react';
import { ActivityIndicator } from 'react-native';

import * as Cm from './styles';

export default Button = props => {

  return (
    <Cm.Button>
      {!props.isSending ?
        <Cm.ToucheArea {...props}>
          <Cm.ButtonText>
            {props.title}
          </Cm.ButtonText>
        </Cm.ToucheArea>
        :
        <Cm.WrapLoadingButton>
          <ActivityIndicator size="small" color="#FFF" />
        </Cm.WrapLoadingButton>
      }
    </Cm.Button>
  )
}