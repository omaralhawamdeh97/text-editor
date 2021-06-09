import styled from "styled-components";

export const FixedButton = styled.button`
  padding: 30px;
  background-color: ${(props) => props.color};
`;

export const FixedDiv = styled.div`
  align-items: center;
  text-align: center;
`;

export const Textarea = styled.input`
  width: 70%;
  margin: 1.25em;
  padding: 0.25em 10px;
  height: 100px;
  font-weight: ${(props) => props.fontWeight};
  text-decoration: ${(props) => props.textDecoration};
  font-style: ${(props) => props.fontStyle};
  font-size: 20px;
  color: ${(props) => props.color};
`;
