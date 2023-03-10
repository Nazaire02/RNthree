import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetailScreen from './screens/MealDetailScreen';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions = {{
            title: "All categories",
            headerStyle : { backgroundColor : "#351401"},
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25"}
          }} 
        >
          <Stack.Screen 
              name='MealsCategories' 
              component={CategoriesScreen}
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen name='MealDetail' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>  
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
