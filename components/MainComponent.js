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
import { createStackNavigator,TransitionSpecs  } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const DishStack = createStackNavigator();

function DishStackScreen() {
  return (
    <DishStack.Navigator
        initialRouteName="Menu"
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}>
        <DishStack.Screen name="Menu" component={Menu}  />
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
                    <Tab.Screen name="Home" component={Home} options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="home" color="black" size={size} />
                        ),
                      }}/>
                    <Tab.Screen name="Menu" component={DishStackScreen} options={{
                        tabBarLabel: 'Menu',
                        tabBarIcon: ({ color, size }) => (
                          <Icon name="menu" color="black" size={size} />
                        ),
                      }} />
                    <Tab.Screen name="Contact Us" component={ContactUs} options={{
                        tabBarLabel: 'Contact',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="account" color="black" size={size} />
                        ),
                      }}/>
                    <Tab.Screen name="AboutUs" component={AboutUs} options={{
                        tabBarLabel: 'About Us',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="bell" color="black" size={size} />
                        ),
                      }} />
            </Tab.Navigator>
        </NavigationContainer>
       )
    }

}

export default Main;