import React from "react";
import { string } from 'prop-types'
import styled from 'styled-components';

const ButtonStyled = styled('button')`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Button = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
