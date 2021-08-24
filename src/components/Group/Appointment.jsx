import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import GrayText from "../GrayText/GrayText";
import Badge from "./Badge";

export const Appointment = ({ item, navigation }) => {
  const { title, data } = item
  return (
    <Group>
      <GroupTitle>{title}</GroupTitle>
      {data.map((item, index) => (
        <GroupItem key={index} onPress={() => navigation.navigate("Patient", {item})}>
          <Avatar
            source={{
              uri: item.user.avatar,
            }}
          />
          <View style={{ flex: 1 }}>
            <FullName>{item.user.fullname}</FullName>
            <GrayText>{item.diagnosis}</GrayText>
          </View>
          <Badge active={item.active}>{item.time}</Badge>
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