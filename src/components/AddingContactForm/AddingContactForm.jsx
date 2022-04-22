import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from '@emotion/styled';
import { LabelText } from '../App.styled';
import {
  AddingForm,
  SubmitButton,
  StyledErrorMessage,
} from './AddingContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required().positive().integer(),
});

const ToFormikInput = styled(Field)`
  display: block;
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

export const ContactForm = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (values, { resetForm }) => {
    setName(values.name);
    setNumber(values.number);
    console.log(values);
    console.log(name);
    console.log(number);
    resetForm();
  };

    return (
      <div>
        <Formik
          initialValues={{ name: '', number: '' }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, isSubmitting }) => (
            <AddingForm>
              <Form onSubmit={handleSubmit}>
                <LabelText htmlFor="name">
                  Name
                  <ToFormikInput
                    type="text"
                    name="name"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  />
                  <ErrorMessage
                    name="name"
                    render={msg => (
                      <StyledErrorMessage>
                        {'Incorrect name'}
                      </StyledErrorMessage>
                    )}
                  />
                </LabelText>
                <LabelText htmlFor="number">
                  Number
                  <ToFormikInput
                    type="tel"
                    name="number"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
                  <ErrorMessage
                    name="number"
                    render={msg => (
                      <StyledErrorMessage>
                        {'Incorrect number'}
                      </StyledErrorMessage>
                    )}
                  />
                </LabelText>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  Add contact
                </SubmitButton>
              </Form>
            </AddingForm>
          )}
        </Formik>
      </div>
    );
  
}
