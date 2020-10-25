import styled from 'styled-components';

const color = 'black';

export const Button = styled.button`
background:#f00;
font-size: 20px;
border-radius: 3px;
border: 2px solid ${(props) => props.color ? props.color : color};
color: ${(props) => props.color ? props.color : color};
padding: 0.25em

`;
