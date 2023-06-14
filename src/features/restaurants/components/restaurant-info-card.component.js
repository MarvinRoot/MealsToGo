import React from "react";
import styled from "styled-components/native";
import { Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "la pizza mia",
    icon = "https://picsum.photos/700",
    photos = [
      "https://cmon-files.s3.amazonaws.com/images/product/avatar/233/Foodies_Avatar_640x734.jpg",
    ],
    address = "themistokli germenji",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: icon }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});
