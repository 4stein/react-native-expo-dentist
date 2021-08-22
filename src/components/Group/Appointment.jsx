import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import GrayText from "../GrayText/GrayText";

export const Appointment = ({ title, data, navigation }) => {
  return (
    <Group>
      <GroupTitle>{title}</GroupTitle>
      {data.map((item, index) => (
        <GroupItem key={index} onPress={() => navigation.navigate("Patient")}>
          <Avatar
            source={{
              uri: item.user.avatar,
            }}
          />
          <View style={{ flex: 1 }}>
            <FullName>{item.user.fullName}</FullName>
            <GrayText>{item.diagnosis}</GrayText>
          </View>
          <GroupDate active={item.active}>{item.time}</GroupDate>
        </GroupItem>
      ))}
    </Group>
  );
};

Appointment.defaultProps = {
  title: "Untitled",
  items: [],
};

const Group = styled.View`
  padding: 0 20px;
  margin-bottom: 25px;
`;

const GroupTitle = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #000000;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  padding: 20px 0;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const FullName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const GroupDate = styled.Text`
  background-color: ${(props) => (props.active ? "#2A86FF;" : "#e9f5ff")};
  color: ${(props) => (props.active ? "#ffffff;" : "#4294ff")};
  border-radius: 18px;
  font-weight: 700;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 30px;
`;
