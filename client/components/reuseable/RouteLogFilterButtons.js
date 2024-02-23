import React, { useState } from "react";
// Components
import { TouchableOpacity, View, Text } from "react-native";
// Styles
import styles from "./allStyles.js";

// -----------------------------------------------------------------------

export default function RouteLogFilterButtons() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.buttonlarge,
              selectedButton === 1 && styles.selectedButton,
              {width: 140}
            ]}
            onPress={() => handleButtonPress(1)}
          >
            <Text style={styles.buttonlargetext}>last Day</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.buttonlarge,
              selectedButton === 2 && styles.selectedButton,
              {width: 140}
            ]}
            onPress={() => handleButtonPress(2)}
          >
            <Text style={styles.buttonlargetext}>last Week</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.buttonlarge,
              selectedButton === 3 && styles.selectedButton,
              {width: 140}
            ]}
            onPress={() => handleButtonPress(3)}
          >
            <Text style={styles.buttonlargetext}>last Month</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.buttonlarge,
              selectedButton === 4 && styles.selectedButton,
              {width: 140}
            ]}
            onPress={() => handleButtonPress(4)}
          >
            <Text style={styles.buttonlargetext}>last Year</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
