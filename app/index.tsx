import { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const [textInputColor, setTextInputColor] = useState("blue");
  const handleButtonPress = () => {
    if (!inputValue) {
      setTextInputColor("red");
      return;
    } else Alert.alert(`Hello ${inputValue}`);
  };

  return (
    <ScrollView>
      <Text style={styles.textStyle}>My First Ever App in React</Text>
      <View>
        <Text style={{ textAlign: "center", marginVertical: 20 }}>
          Image From the assests.
        </Text>
        <Image
          source={require("../assets/images/favicon.png")}
          style={styles.imageSize}
        />
        <Text style={styles.textStyle}>Enter your Name. I will Greet You.</Text>
        <TextInput
          style={[styles.textInput, { backgroundColor: textInputColor }]}
          placeholder="Enter Your Name"
          onChangeText={(text) => {
            if (text.length > 0) {
              setTextInputColor("green");
            }
            setInputValue(text);
          }}
        />
        <Pressable style={styles.button} onPress={handleButtonPress}>
          <Text>Press when Done</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  imageSize: {
    width: 200,
    height: 150,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  textStyle: {
    fontSize: 20,
    marginTop: 16,
    color: "#20232a",
    textAlign: "center",
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 20,
    marginHorizontal: 20,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
