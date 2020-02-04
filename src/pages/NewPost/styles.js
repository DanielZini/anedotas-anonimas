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
export const Label = styled.Text`
  font-family: ${patterns.fontRegular};
  font-size: 18px;
  margin-bottom: 15px;

`