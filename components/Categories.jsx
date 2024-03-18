import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextInput } from "react-native-gesture-handler";

const Categories = ({ navigation }) => {
  const [categorie, setCategorie] = useState([]);
  const [food, setFood]= useState('')
  const [searchFood, setSearchFood]= useState([])
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
     
  const searchFoods = ()=>{
     
        axios.get(`http://www.themealdb.com/api/json/v1/1/search.php?s=${food}`).then((res)=>{
           setSearchFood(res.data.meals)
        }).catch(error=>{
          console.log('error for this',error);
       })
       console.log(searchFood);
  }
   
  return (
    <View>
      
      <ScrollView>
        
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent:'space-evenly',
            gap: 5,
            
          }}
        >
          {categorie.map((item) => (
            <TouchableOpacity key={item.idCategory} onPress={()=> navigation.navigate('CategorieDetails', {product:item})}>
              <View key={item.idCategory}>
                <Image
                  source={{ uri: `${item.strCategoryThumb}` }}
                  style={{ width: 100, height: 100, objectFit: "contain" }}
                />

                <Text style={{ textAlign: "center" }}>{item.strCategory}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

           <Text style={{textAlign:'center', fontSize:40, fontWeight:'200', marginTop:20 , marginBottom:20}}> Find your food </Text>
             
             <View>
                  <TextInput 
                  placeholder="Search your favorite food "
                   onChangeText={(text)=>setFood(text)}
                   style={{ fontSize: 22, color: 'gray', borderBottomColo:'black' }}
                    />
                    <Button title="search" style={{width: 20}} onPress={()=>{searchFoods()}}/>
             </View>

                <View>
                    sear
                </View>
                     
      </ScrollView>
    </View>
  );
};

export default Categories;
