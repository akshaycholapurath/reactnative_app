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
import {connect} from 'react-redux';
import {fetchDishes,fetchComments,fetchPromos,fetchLeaders} from '../redux/ActionCreators';
import Reservation from './ReservationComponent';
import Favorite from './FavoriteComponent';
import Login from './LoginComponent';

const mapStateToProps = state =>{
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: ()=> dispatch(fetchDishes()),
  fetchComments: ()=> dispatch(fetchComments()),
  fetchPromos: ()=> dispatch(fetchPromos()),
  fetchLeaders: ()=> dispatch(fetchLeaders())
});


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

const LoginStack = createStackNavigator();

function LoginStackScreen(){
  return(
    <LoginStack.Navigator
      initialRouteName="Login"
          screenOptions={{
              headerTintColor: 'white',
              headerStyle: { backgroundColor: 'black' },
            }}>
      <LoginStack.Screen name="Login" component={Login}  />      
      <LoginStack.Screen name="Home" component={Home}  />      

    </LoginStack.Navigator>
  )
}


const Tab = createBottomTabNavigator();


class Main extends Component {
    
    componentDidMount(){
      this.props.fetchDishes();
      this.props.fetchComments();
      this.props.fetchLeaders();
      this.props.fetchPromos();
    }

    render(){
        return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Login">
                    <Tab.Screen name="Login" component={LoginStackScreen} options={{
                        tabBarLabel: 'Login',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="login" color="black" size={size} />
                        ),
                      }}/>
                    
                    <Tab.Screen name="Menu" component={DishStackScreen} options={{
                        tabBarLabel: 'Menu',
                        tabBarIcon: ({ color, size }) => (
                          <Icon name="menu" color="black" size={size} />
                        ),
                      }} />
                    <Tab.Screen name="Favorite" component={Favorite} options={{
                        tabBarLabel: 'Favorite',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="heart" color="black" size={size} />
                        ),
                      }}/>
                    <Tab.Screen name="Contact Us" component={ContactUs} options={{
                        tabBarLabel: 'Contact',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="account" color="black" size={size} />
                        ),
                      }}/>
                    {/* <Tab.Screen name="AboutUs" component={AboutUs} options={{
                        tabBarLabel: 'About Us',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="bell" color="black" size={size} />
                        ),
                      }} /> */}
                      <Tab.Screen name="Reservation" component={Reservation} options={{
                        tabBarLabel: 'Reservation',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="note" color="black" size={size} />
                        ),
                      }} />
            </Tab.Navigator>
        </NavigationContainer>
       )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Main);