import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function ClimbingHallBox({
  key,
  hall_name,
  street_address,
  city,
  navigation,
}) {
  const openHallWithRoutes = () => {
    navigation.navigate("Routen", { hall_name: hall_name });
  };

  
  return (  
  <TouchableOpacity onPress={openHallWithRoutes}>
    <View key={key} style={styles.borderBox}>
      <Text style={styles.h3}>{hall_name}</Text>
      <Text style={styles.text}>{street_address}</Text>
      <Text style={styles.text}>{city}</Text>
    </View>
    </TouchableOpacity>
  );
}
