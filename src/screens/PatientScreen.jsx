import React from "react";
import styled from "styled-components/native";
import Button from "../components/Button/Button";
import GrayText from "../components/GrayText/GrayText";
import { Foundation } from "@expo/vector-icons";

const PatientScreen = () => {
  return (
    <Container>
      <PatientFullName>Marina Almazova</PatientFullName>
      <GrayText>+38 (063) 772-48-99</GrayText>
      <PatientButtons>
        <Button>Dental formula</Button>
        <Button color="#84D269" basis="12%" secondButton>
          <Foundation name="telephone" size={22} color="white" />
        </Button>
      </PatientButtons>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  padding: 25px;
`;

const PatientFullName = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #000000;
  line-height: 30px;
  margin-bottom: 3px;
`;

const PatientButtons = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

const FormulaButton = styled.View`
  flex-basis: 15%;
  height: 60px;
  margin-left: 5px;
`;

export default PatientScreen;
