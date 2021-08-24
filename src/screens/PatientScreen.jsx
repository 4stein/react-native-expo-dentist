import React from "react";
import styled from "styled-components/native";
import Button from "../components/Button/Button";
import GrayText from "../components/GrayText/GrayText";
import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Badge from "../components/Group/Badge";

const PatientScreen = ({ route }) => {
  const { item } = route.params;
  const AppointmentDate =
    new Date(item.date).getDate() +
    "." +
    new Date(item.date).getMonth() +
    "." +
    new Date(item.date).getFullYear();

  return (
    <View style={{ flex: 1 }}>
      <PatientDetails>
        <PatientFullName>{item.user.fullname}</PatientFullName>
        <GrayText>{item.user.phone}</GrayText>
        <PatientButtons>
          <Button>Dental formula</Button>
          <Button color="#84D269" basis="12%" secondButton>
            <Foundation name="telephone" size={22} color="white" />
          </Button>
        </PatientButtons>
      </PatientDetails>

      <PatientAppointments>
        <AppointmentCard>
          <MoreButton>
            <MaterialIcons
              name="more-vert"
              size={24}
              color="rgba(0,0,0, 0.4)"
            />
          </MoreButton>

          <AppointmentCardRow>
            <FontAwesome5 name="tooth" size={22} color="#ccc" />
            <AppointmentCardLabel>
              Tooth: <Text style={{ fontWeight: "700" }}>{item.user._id}</Text>
            </AppointmentCardLabel>
          </AppointmentCardRow>
          <AppointmentCardRow>
            <FontAwesome5 name="tooth" size={22} color="#ccc" />
            <AppointmentCardLabel>
              Diagnosis:{" "}
              <Text style={{ fontWeight: "700" }}>{item.diagnosis}</Text>
            </AppointmentCardLabel>
          </AppointmentCardRow>

          <AppointmentCardRow
            style={{ justifyContent: "space-between", marginTop: 15 }}
          >
            <Badge style={{ width: 175 }} active>
              {AppointmentDate}
            </Badge>
            <Badge color="green">{item.balance} $</Badge>
          </AppointmentCardRow>
        </AppointmentCard>
      </PatientAppointments>
    </View>
  );
};

const MoreButton = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

const AppointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3.5px;
  margin-bottom: 3.5px;
`;

const AppointmentCard = styled.View`
  shadow-color: black;
  elevation: 0.5;
  shadow-opacity: 0.4;
  shadow-radius: 3.5px;
  padding: 20px 25px;
  border-radius: 10px;
  background: white;
  justify-content: center;
`;

const Container = styled.SafeAreaView`
  padding: 25px;
`;

const PatientDetails = styled(Container)`
  flex: 0.3;
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

const PatientAppointments = styled(Container)`
  flex: 1;
`;

export default PatientScreen;
