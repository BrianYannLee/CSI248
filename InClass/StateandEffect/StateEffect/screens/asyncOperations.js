import { Text, View, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AsyncOperations() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const savedName = await AsyncStorage.getItem("name");
      if (savedName) {
        setSavedName(savedName);
      }
    } catch (error) {
      console.error("Error loading name", error);
    }
  };

  const saveName = async () => {
    try {
      await AsyncStorage.setItem("name", name);
    } catch (error) {
      console.error("Error save name");
    }
  };

  return (
    <View>
      <Text>Saved Name: {savedName || "No name saved"}</Text>
      <Text>Name: {name}</Text>
      <TextInput placeholder="Enter Name" value={name} onChangeText={setName} />
      <Button titlte="save Name" onPress={saveName} />
    </View>
  );
}
