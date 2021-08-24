import styled from "styled-components/native";

export default styled.Text`
  background-color: ${(props) => (props.active ? "#2A86FF" : "#e9f5ff")};
  color: ${(props) => (props.active ? "#ffffff" : props.color ? props.color : "#2A86FF")};
  border-radius: 18px;
  font-weight: 700;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 30px;
`;

