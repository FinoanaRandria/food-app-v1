import ListFoodCategries from "./components/ListFoodCategries";
import Categories from "./components/Categories"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer intiCategorie='Categorielist'>
      <Stack.Navigator>
         <Stack.Screen
           name="Categorielist"
           component={Categories}
           options={{title:"Categorie List"}}
          />
          <Stack.Screen
            name="CategorieDetails"
            component={ListFoodCategries}
            options={{title:"CategorieDetails"}}
           />
            
          
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
