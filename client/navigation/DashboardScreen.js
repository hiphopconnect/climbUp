import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import HeadText from "../components/text/HeadText.js";
import styles from "../components/styles/allStyles.js";
import RouteLogFilterButtons from "../components/buttons/RouteLogFilterButtons.js";
import RoutenViewList from "../components/lists/RoutenViewList.js";
import { query } from "../Controller/requestHandler.js";
import { Climber } from "../Controller/Procedures.js";
import calculateTimeStamps from "../components/input/TimeIntervals.js";

export default function DashboardScreen() {
  const [routes, setRoutes] = useState([]); // Verwenden von useState für den Zustand
  const [selectedTimeframe, setSelectedTimeframe] = useState();
  const [statistics, setStatistics] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Zustand für den Ladevorgang
  const interval = calculateTimeStamps(selectedTimeframe);

  console.log("interval :>> ", interval);

  useEffect(() => {
    query(Climber.get_user_statistics.call, [interval.past, interval.now])
      .then((res) => {
        const newStatistics = Array.isArray(res.data.data) ? res.data.data : [];
        console.log(newStatistics);
        setStatistics(newStatistics); // Zustand aktualisieren, sobald Daten verfügbar sind
        setIsLoading(false);
      })
      .catch((err) => {
        alert("Error: " + err);
        setIsLoading(false);
      });
  }, [selectedTimeframe]); // Leeres Abhängigkeitsarray, damit der Effekt nur beim Mounten der Komponente ausgeführt wird

  return (
    <>
      <HeadText content="Elevate your progress!" />
      {isLoading ? (
        <Text>Loading...</Text> // Anzeige eines Ladeindikators
      ) : (
        <>
          <View style={{ flexDirection: "row", marginBottom: 15 }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 50, fontWeight: "bold" }}>
                {statistics[0]?.total_routes_count || "N/A"}
              </Text>
              <Text style={styles.h3}>Climbs</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 50, fontWeight: "bold" }}>
                {statistics[0]?.highest_difficulty_level || "N/A"}
              </Text>
              <Text style={styles.h3}>best Level</Text>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <RouteLogFilterButtons
              setSelectedTimeframe={setSelectedTimeframe}
            />
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 12,
                paddingTop: 20,
              }}
            >
              <View style={{ flex: 12 }}>
                <Text style={styles.h3}>Route</Text>
              </View>
              <View style={{ flex: 2, alignItems: "center" }}>
                <Text style={styles.h3}>LVL</Text>
              </View>
              <View style={{ flex: 2, alignItems: "center" }}>
                <Text style={styles.h3}>P</Text>
              </View>
            </View>
            <RoutenViewList interval={interval} />
            <View style={{ marginBottom: 150 }} />
          </ScrollView>
        </>
      )}
    </>
  );
}
