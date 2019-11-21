import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Container = styled.View`
  background: #191920;
  padding: 10px;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;

export const CartButton = styled.TouchableOpacity`
  padding-right: 10px;
`;

export const LogoButton = styled.TouchableOpacity`
  padding-right: 0px;
`;

export const Count = styled.Text`
  position: absolute;
  text-align: center;
  top: -6px;
  right: 4px;
  width: 18px;
  height: 18px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
  line-height: 14px;
`;
