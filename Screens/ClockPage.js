import React, { useState } from "react";
import { StyleSheet, Text, View,  TouchableOpacity,
} from "react-native";
import Clock from "./Clock";
import { StopWatch } from "./StopWatch";
import { TimerComponent } from "./TimerComponent";
import { useNavigation } from '@react-navigation/native'

export default function ClockPage() {
  const [viewTab, setViewTab] = useState(
    "CLOCK"
  );

  const getView = () => {
    if (viewTab === "CLOCK") {
      return <Clock minuteHandLength={110} />;
    }
    if (viewTab === "STOPWATCH") {
      return <StopWatch></StopWatch>;
    }
    if (viewTab === "TIMER") {
      return <TimerComponent></TimerComponent>;
    }
  };

  const getClockTitle = () => {
    if (viewTab === "CLOCK") {
      return "CLOCK";
    } else if (viewTab === "STOPWATCH") {
      return "STOPWATCH";
    } else if (viewTab === "TIMER") {
      return "TIMER";
    }
  };

  return (
    <View
      style={{
        width: "100%",
        height: "10%",
        marginTop: 10,
        backgroundColor: "#93E7E2",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 48,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        {getClockTitle()}
      </Text>

      <View>
        <View
          style={{
            width: 350,
            borderRadius: 300,
            height: 350,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 90,
            marginLeft: 20,
            backgroundColor: "#93E7E2",
          }}
        >
          {getView()}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 130,
            marginLeft: 30,
          }}
        >
             <TouchableOpacity  style={{
              width: 90,
              borderRadius: 30,
              height: 80,
              backgroundColor: "#93E7E2",
            }}
            onPress={()=> setViewTab("CLOCK")}>
          <Text style={styles.buttonText}>CLOCK</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={{
              width: 90,
              marginLeft: 30,
              borderRadius: 30,
              height: 80,
              backgroundColor: "#93E7E2",
            }}
            onPress={()=> setViewTab("TIMER")}>
          <Text style={styles.buttonText}>TIMER</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={{
              width: 90,
              marginLeft: 30,
              borderRadius: 30,
              height: 80,
              backgroundColor: "#93E7E2",
            }}
            onPress={()=> setViewTab("STOPWATCH")}>
          <Text style={styles.buttonText}>STOPWATCH</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    margin: "100",
    width: "100%",
    height: "30%",
    backgroundColor: "#93E7E2",
  },
  buttonText: {
    color: "#000",
    paddingTop:33,
    fontWeight:"bold",
    fontSize: 12,
    textAlign: "center",
  },
});
