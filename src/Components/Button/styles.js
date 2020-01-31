import styled from 'styled-components';
import patterns from '../../patterns';

export const Button = styled.View`
  width: 100%;
  margin-bottom: 30px;
  background: ${patterns.cl.primary};
`
export const ToucheArea = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`
export const WrapLoadingButton = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`
export const ButtonText = styled.Text`
  font-family: ${patterns.fontBold};
  font-size: 18px;
  margin-left: 10px;
  color: ${patterns.cl.third};
`