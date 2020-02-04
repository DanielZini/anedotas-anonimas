import styled from 'styled-components';
import patterns from '../../patterns';

export const Box = styled.View`
  width: 100%;
  margin-bottom: 20px;
  background: #FFF;
  border-radius: 4px;
  /* background: ${patterns.cl.second}; */
  elevation: 5;
`
export const Header = styled.View`
  padding: 5px 25px ;
`
export const DataPost = styled.Text`
  font-family: ${patterns.fontRegular};
  font-size: 12px;
  color: #AAA;
  margin-bottom: 15px;
  text-align: right;
`
export const WrapJoke = styled.View`
  padding: 20px 25px;
`
export const Line = styled.Text`
  font-family: ${patterns.fontRegular};
  font-size: 17px;
  color: ${patterns.cl.primary};
  margin-bottom: 10px;
`
export const WrapLikes = styled.View`
  flex-direction: row;
  height: 50px;
`
export const BoxNumLikes = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const NumLikes = styled.Text`
  font-family: ${patterns.fontBold};
  font-size: 24px;
  color: ${patterns.cl.primary};
  text-align: center;
`
export const TextLikes = styled.Text`
  font-family: ${patterns.fontRegular};
  font-size: 14px;
  margin-left: 7px;
  color: ${patterns.cl.primary};
  text-align: center;
`
export const BoxButton = styled.View`
  flex: 1;
`
