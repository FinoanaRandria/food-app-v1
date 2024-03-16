
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Categories = () => {
  const [categorie, setCategorie] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        setCategorie(res.data.categories);
      })
      .catch((error) => {
        console.log("erro no data", error);
      });
  }, []);
  return (
    <View>
      
      <View>
        <Text style={{ fontSize: 40, textAlign: "center" }}>Sakafo</Text>
      </View>
      <ScrollView>
        <Text style={{ fontSize: 30 }}> Categorie</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 5,
          }}
        >
          {categorie.map((item) => (
            <View key={item.idCategory}>
              <Image
                source={{ uri: `${item.strCategoryThumb}` }}
                style={{ width: 100, height: 100, objectFit: "contain" }}
              />

              <Text style={{ textAlign: "center" }}>{item.strCategory}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;
