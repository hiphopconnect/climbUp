import React, { useState, useEffect } from "react";
// Components
import { View, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import RouteBox from "../../components/reuseable/RouteBox";
import routes from "../../_mock/routes.js";
import HeadText from "../../components/reuseable/HeadText.js";
import RouteFilter from "../../components/reuseable/RouteFilter.js";
import ButtonBack from "../../components/reuseable/ButtonBack.js";
import styles from "../../components/reuseable/allStyles.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Climber,Hall_Owner } from "../../components/reuseable/Procedures.js";
import { query } from "../../components/reuseable/generalRequest.js";
// --------------------------------------------------------------------
export default function RoutenScreen({ navigation, route }) {
  const { hall_name } = route.params;
  const [routes, setRoutes] = useState([]); // Verwenden von useState für den Zustand
  const [isLiked, setIsLiked] = useState(false);
  
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  
  console.log("hall_name :>> ", hall_name);

  useEffect( () => {
    // Hall_Owner.insert_route
    // await query(`INSERT INTO climbup.climbing_halls (hall_name, street_address, city, postal_code) VALUES ('testhall3', 'asdf1243','ok','12345')`);
    // let text = `INSERT INTO climbup.climbing_halls.testhall3 (route_name, sector, level_of_difficulty, color, line_number, tilt) VALUES ('Route1', 'A', '3', 'Red', '1', TRUE)`;
      // const values = [`Route ${i}`, 'Sector A', '5.10a', 'Red', 1, false];
    // await query(text);
  //   query(Climber.get_routes_by_hall_name.call, ['testhall2'])
  //     .then(response => {
  //       setRoutes(response.data); // Zustand aktualisieren, sobald Daten verfügbar sind
  //     })
  //     .catch(err => alert("Error: " + err));
  // }, []);
    // for(let i = 0; i < 10; i++){
      
  // }
// let text = "SELECT * from climbup.climbing_hall";
    // query(text);
  // }, []);
}, []);
  return (
    <>
        <ButtonBack/>
      <View style={styles.head}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.h1}>{hall_name}</Text>
          </View>
          <TouchableOpacity
            style={{ justifyContent: "center", margin: 6}}
            onPress={toggleLike}
          >
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={36}
              color={isLiked ? "red" : "black"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <RouteFilter />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
        {routes && routes.map((item, index) => ( // Überprüfen, ob 'halls' definiert ist
            <RouteBox
              key={index}
              routeName={item.routeName}
              Sector={item.Sector}
              levelOfDificulty={item.LevelOfDifficulty}
              color={item.color}
              lineNumber={item.lineNumber}
              navigation={navigation}
            />
          ))}
        </View>
        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}
