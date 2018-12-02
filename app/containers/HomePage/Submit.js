import styled from 'styled-components';

const Submit = styled.input`
  background-color: ${props => (props.disabled ? 'gray' : 'lightgreen')};
  border: 1px solid;
  margin-top: 1%;
  width: 8%;
`;
export default Submit;
