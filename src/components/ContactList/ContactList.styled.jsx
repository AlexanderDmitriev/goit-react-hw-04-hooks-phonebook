import styled from '@emotion/styled';

export const ContactListItem = styled.li`
  list-style: none;
  padding: ${props => props.theme.spacing(1)};
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: ${props => props.theme.spacing(4)};
  line-height: 1.2;
  color: ${props => props.theme.colors.textColor};
`;

export const DeleteButton = styled.button`
  margin: 0 ${props => props.theme.spacing(2)};
`;
