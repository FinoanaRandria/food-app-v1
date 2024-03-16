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

const ListFoodCategries = ({ route }) => {
  const { product } = route.params;
  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={{ uri: `${product.strCategoryThumb}` }}
          style={{ width: 200, height: 200, objectFit: "contain" }}
        />
      </View>

      <Text style={{ margin: 10, fontSize: 15 }}>
        {product.strCategoryDescription}
      </Text>
    </View>
  );
};

export default ListFoodCategries;
