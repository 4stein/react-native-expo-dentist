import React from 'react'
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Appointment } from "../components/Group/Appointment";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
  {
    title: "September 14",
    data: [
      {
        time: "15:30",
        diagnosis: "Some problem",
        active: true,
        user: {
          fullName: "User Name1",
          avatar:
            "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png",
        },
      },
      {
        time: "16:30",
        diagnosis: "Some problem",
        user: {
          fullName: "User Name2",
          avatar:
            "https://freepikpsd.com/media/2019/10/avatar-png-images-7-Transparent-Images.png",
        },
      },
      {
        time: "16:30",
        diagnosis: "Some problem",
        user: {
          fullName: "User Name3",
          avatar:
            "https://toppng.com/uploads/preview/batman-icon-jira-avatar-11562897771zvwv8r510z.png",
        },
      },
      {
        time: "17:30",
        diagnosis: "Some problem",
        user: {
          fullName: "User Name4",
          avatar:
            "https://e7.pngegg.com/pngimages/363/698/png-clipart-avatar-female-others-purple-face-thumbnail.png",
        },
      },
    ],
  },
  {
    title: "September 15",
    data: [
      {
        time: "16:30",
        diagnosis: "Some problem",
        user: {
          fullName: "User Name5",
          avatar:
            "https://toppng.com/uploads/preview/batman-icon-jira-avatar-11562897771zvwv8r510z.png",
        },
      },
      {
        time: "17:30",
        diagnosis: "Some problem",
        user: {
          fullName: "User Name6",
          avatar:
            "https://e7.pngegg.com/pngimages/363/698/png-clipart-avatar-female-others-purple-face-thumbnail.png",
        },
      },
      {
        time: "18:30",
        diagnosis: "Some problem",
        user: {
          fullName: "User Name7",
          avatar:
            "https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png",
        },
      },
      {
        time: "15:30",
        diagnosis: "Some problem",
        user: {
          fullName: "User Name8",
          avatar:
            "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png",
        },
      },
      {
        time: "16:30",
        diagnosis: "Some problem",
        user: {
          fullName: "User Name9",
          avatar:
            "https://freepikpsd.com/media/2019/10/avatar-png-images-7-Transparent-Images.png",
        },
      },
    ],
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Appointment {...item} navigation={navigation} />}
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
  )
}

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