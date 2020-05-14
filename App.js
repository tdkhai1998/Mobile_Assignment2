import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Button,
} from "react-native";
import { MyButton } from "./Components/Button";
// const ActionType = { color: "color", undo: "undo", redo: "redo" };
export default function App() {
  const [currentState, setState] = useState({
    moments: [],
    position: -1,
  });
  const { moments, position } = currentState;
  const changeColor = (color) => {
    setState((state) => {
      const { moments, position } = state;
      if (position === moments.length - 1) {
        return { moments: [...moments, color], position: moments.length };
      } else {
        return {
          moments: [...moments.slice(0, position + 1), color],
          position: position + 1,
        };
      }
    });
  };
  const Undo = () => {
    setState((state) => ({
      moments: state.moments,
      position: state.position - 1,
    }));
  };
  const Redo = () => {
    setState((state) => ({
      moments: state.moments,
      position: state.position + 1,
    }));
  };
  return (
    <>
      <StatusBar></StatusBar>
      <View style={styles.container}>
        <View style={styles.toolBar}>
          <MyButton color="red" onPress={() => changeColor("red")} />
          <MyButton color="green" onPress={() => changeColor("green")} />
          <MyButton color="blue" onPress={() => changeColor("blue")} />
          <MyButton
            text="Undo"
            style={styles.borderButton}
            onPress={Undo}
            disabled={position < 0}
          />
          <MyButton
            text="Redo"
            style={styles.borderButton}
            onPress={Redo}
            disabled={position >= moments.length - 1}
          />
          {/* <MyButton
            text="clear"
            style={styles.borderButton}
            onPress={() => {
              setState((state) => ({ moments: [], position: -1 }));
            }}
          /> */}
        </View>
        <View style={styles.centerContainer}>
          <View
            style={{
              width: 120,
              height: 120,
              backgroundColor: moments[position] || "white",
              borderColor: moments[position] || "black",
              borderWidth: 1,
            }}
          ></View>
          {/* {currentState.moments.map((i) => (
            <Text>{i}</Text>
          ))} */}
        </View>
        <View
          style={{ height: 40, backgroundColor: "blue", flexDirection: "row" }}
        >
          {currentState.moments.map((i, index) => {
            if (index === currentState.position)
              return <Text style={{ color: "red" }}>{i}</Text>;
            return <Text>{i}</Text>;
          })}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    padding: 10,
  },
  toolBar: {
    // flex: 1,
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
  },
  centerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  colorSquare: {},
  borderButton: {
    borderWidth: 1,
  },
});
