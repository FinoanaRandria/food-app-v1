import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Categories from "./components/Categories";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Categories/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    marginTop: 40,
  },
});
