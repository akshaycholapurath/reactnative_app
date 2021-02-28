import React, {Component} from 'react';
import Menu from './MenuComponent';
import { View, Text } from 'react-native';
import DishDetail from './DishDetail';
import { Button,Platform} from 'react-native';
import Home from './HomeComponent';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import { createStackNavigator } from '@react-navigation/stack';


const DishStack = createStackNavigator();

function DishStackScreen() {
  return (
    <DishStack.Navigator
        initialRouteName="Menu"
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}>
        <DishStack.Screen name="Menu" component={Menu} />
        <DishStack.Screen name="DishDetail" component={DishDetail} />
    </DishStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();


class Main extends Component {
         
    render(){
        return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Menu" component={DishStackScreen} />
                    <Tab.Screen name="Contact Us" component={ContactUs} />
                    <Tab.Screen name="AboutUs" component={AboutUs} />
            </Tab.Navigator>
        </NavigationContainer>
       )
    }

}

export default Main;