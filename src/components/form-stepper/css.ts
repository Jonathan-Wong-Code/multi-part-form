import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NumberStepList = styled.ul`
  width: 30%;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

export const NumberStep = styled(Link)<{
  step: number;
  isHighlighted: boolean;
}>`
  display: block;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isHighlighted }) =>
    isHighlighted ? 'black' : 'white'};

  color: ${({ isHighlighted }) => (isHighlighted ? 'white' : 'black')};

  &::before {
    content: '${(props) => props.step}';
    font-weight: ${(props) => (props.isHighlighted ? 700 : 400)};
  }
`;
