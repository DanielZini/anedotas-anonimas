import React from 'react';
import { ActivityIndicator } from 'react-native';
import * as Cm from './styles';
import patterns from '../../../patterns';

//dependencies
import IconAwesome from 'react-native-vector-icons/Fontisto';

export default LikeButton = props => {

  return (
    <Cm.Button>
      {!props.processingLike ?
        <Cm.ToucheArea {...props}>
          <IconAwesome name='smiley' size={25} color={patterns.cl.third} />
          <Cm.ButtonText>
            Eu ri
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