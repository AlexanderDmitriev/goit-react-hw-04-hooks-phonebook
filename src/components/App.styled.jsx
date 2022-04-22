import styled from '@emotion/styled';

export const Title = styled.h2`
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: ${props => props.theme.spacing(5)};
  line-height: 1.2;
  color: ${props => props.theme.colors.textColor};
  padding-top: ${props => props.theme.spacing(2)};
`;

export const LabelText = styled.label`
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: ${props => props.theme.spacing(4)};
  line-height: 1.2;
  color: ${props => props.theme.colors.textColor};
  display: flex;
  align-items: center;
  margin: ${props => props.theme.spacing(2)} 0;
`;

export const InputOnContactForm = styled.input`
  border: ${props => `2px solid ${props.theme.colors.buttonColor}`};
  border-radius: ${props => props.theme.spacing(3)};
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: ${props => props.theme.spacing(4)};
  line-height: 1.2;
  padding: ${props => props.theme.spacing(1)};
  margin: 0 ${props => props.theme.spacing(1)};
  :focus {
    background-color: ${props => props.theme.colors.focusColor};
  }
`;
export const Container = styled.section`
  padding: ${props => props.theme.spacing(5)};
`;
