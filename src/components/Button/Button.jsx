import React from "react";
import styled from "styled-components/native";

const Button = ({ children, color, basis, secondButton }) => {
  const ButtonWrapper = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: ${color ? color : '#2a86ff'};
    color: #fff;
    text-align: center;
    height: 45px;
    flex-basis: ${basis ? basis : '80%'};
    margin-left: ${secondButton ? '15px' : '0'};;
  `;

  const ButtonText = styled.Text`
    color: #fff;
    font-weight: 400;
    font-size: 16px;
  `;

  return (
    <ButtonWrapper>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
