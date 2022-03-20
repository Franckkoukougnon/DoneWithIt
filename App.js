import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";
import {
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native-web";

export default function App() {
  const handlePresse = () => console.log("text pressed !!!");

  console.log(require("./assets/ezy.jpg"));

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => console.log("Image Tapped")}>
        <Image
          fadeDuration={300}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300",
          }}
        />
      </TouchableOpacity>
      <TouchableHighlight
        style={{ margin: 5 }}
        onPress={() => console.log("Image cliquéé")}
      >
        <Button title="click Me" onPress={() => alert("clicked")} />
      </TouchableHighlight>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 150,
  },
});
