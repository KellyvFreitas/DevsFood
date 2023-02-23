import React from "react";
import { CartArea, CartHeader, CartIcon, CartText, CartBody } from "./styled";

export default () => {
  return (
    <CartArea>
      <CartHeader>
        <CartIcon src="/assets/cart.png" />
        <CartText>Meu Carrinho 2</CartText>
      </CartHeader>
      <CartBody></CartBody>
    </CartArea>
  );
};
