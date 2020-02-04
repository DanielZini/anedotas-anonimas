import styled from 'styled-components';
import patterns from '../../patterns';

export const Button = styled.View`
  width: 60px;
  height: 60px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 10;
  border-radius: 50px;
  border-width: 3px;
  border-color: ${patterns.cl.third};
  background: ${patterns.cl.primary};
  elevation: 2;
`
export const ToucheArea = styled.TouchableOpacity`
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
export const Offset = styled.View`
  width: 100%;
  height: 60px;
  background: ${patterns.cl.second};
`
