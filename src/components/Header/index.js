import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, CartButton, Count, LogoButton } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <LogoButton onPress={() => navigation.navigate('Main')}>
        <Logo />
      </LogoButton>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={26} color="#FFF" />
        <Count>{cartSize || 0}</Count>
      </CartButton>
    </Container>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
