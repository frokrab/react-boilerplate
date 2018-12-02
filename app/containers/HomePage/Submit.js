import styled from 'styled-components';

const Submit = styled.input`
  border: 1px solid;
  background-color: ${props => (props.disabled ? 'gray' : 'lightgreen')};
  width: 8%;
  margin-top: 1%;
`;
export default Submit;
