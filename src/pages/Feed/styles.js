import styled from 'styled-components';
import patterns from '../../patterns';

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
  background: ${patterns.cl.second};
`
export const Content = styled.View`
  width: 100%;
  padding: 30px 20px;
`
export const Logo = styled.Image`
  width: 220px;
  resize-mode: contain;
  align-self: center;
  margin: 60px 0 30px 0;
`
export const ReturnMsg = styled.Text`
  font-family: ${patterns.fontRegular};
  font-size: 18px;
  text-align: center;
  color: #AAA;
  margin-bottom: 10px;
  padding: 0 30px;
`