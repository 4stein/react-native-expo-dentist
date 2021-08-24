import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import axios from "axios";
import { Appointment } from "../components/Group/Appointment";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  // DATA LOAD
  useEffect(() => {
    axios.get("https://trycode.pw/c/77N50.json").then(({ data }) => {
      const result = data.appointments.map((item) => {
        const day = new Date(item.date).getDate();
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const month = new Date(item.date).getMonth();
        const patientDate = `${day} ${monthNames[month]}`;
        return {
          title: patientDate,
          data: data.appointments.map((item) => ({
            ...item,
            user: data.users.filter((user) => user._id === item.user_id)[0],
          })),
        };
      });
      setData(result);
    }); 
  }, []);

  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Appointment item={item} navigation={navigation} />
        )}
      />
      <PlusButton
        style={{
          shadowColor: "#2A86FF",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.7,
          shadowRadius: 3.5,
          elevation: 4,
        }}
      >
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 15px;
`;

const PlusButton = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  bottom: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background-color: #2a86ff;
  color: #fff;
`;

export default HomeScreen;
