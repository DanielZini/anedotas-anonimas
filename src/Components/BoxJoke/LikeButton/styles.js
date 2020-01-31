import styled from 'styled-components';
import patterns from '../../../patterns';

export const Button = styled.View`
  width: 100%;
  background: ${patterns.cl.primary};
`
export const ToucheArea = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
`
export const WrapLoadingButton = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
`
export const ButtonText = styled.Text`
  font-family: ${patterns.fontRegular};
  font-size: 15px;
  margin-left: 10px;
  color: ${patterns.cl.third};
  text-transform: lowercase;
`