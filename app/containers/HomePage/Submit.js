import styled from 'styled-components';

const Submit = styled.input`
  border: 1px solid;
  background-color: ${props => (props.disabled ? 'gray' : 'lightgreen')};
`;
export default Submit;
