import styled from 'styled-components';
import { Form as FormPhonebook, Field as NoStyledField } from 'formik';

export const Form = styled(FormPhonebook)`
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Field = styled(NoStyledField)`
  display: inline-block;
  width: 250px;
  margin-top: 10px;
`;

export const StyledAppContainer = styled.div`
  width: 500px;
  border: 1px dashed black;
  padding: 15px;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const StyledFilter = styled.input`
  display: block;
  width: 350px;
  margin-top: 10px;
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  :not(:first-child) {
    margin-top: 10px;
  }
`;

export const StyledError = styled.span`
  color: red;
`;
