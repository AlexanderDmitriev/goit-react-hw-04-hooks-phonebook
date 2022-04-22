import styled from '@emotion/styled';

export const AddingForm = styled.div`
  border: ${props => `1px solid ${props.theme.colors.buttonColor}`};
  border-radius: ${props => props.theme.spacing(2)};
  width: ${props => props.theme.spacing(120)};
  padding: ${props => props.theme.spacing(3)};
`;

export const SubmitButton = styled.button`
  font-weight: 700;
  font-size: ${props => props.theme.spacing(3)};
  line-height: 1.9;
  color: ${props => props.theme.colors.white};
  letter-spacing: 0.06em;
  background-color: ${props => props.theme.colors.buttonColor};
  cursor: pointer;
  border-radius: ${props => props.theme.spacing(1)};
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(4)};
  min-width: ${props => props.theme.spacing(25)};
  text-align: center;
  margin-top: ${props => props.theme.spacing(2)};
`;
export const StyledErrorMessage = styled.p`
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: ${props => props.theme.spacing(4)};
  line-height: 1.2;
  color: ${props => props.theme.colors.red};
`;
