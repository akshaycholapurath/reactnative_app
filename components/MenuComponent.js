import React,{Component} from 'react';
import { View, FlatList,Text } from 'react-native';
import { ListItem,Avatar } from 'react-native-elements';
import {DISHES} from '../shared/dishes';



class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES
        }

    }

    
    render(){

    const renderMenuItem = ({item, i}) => {


            return (
                <ListItem key={i} bottomDivider onPress={() => this.props.navigation.navigate('DishDetail', { dishId: item.id})} >
                    <Avatar source={require("./images/buffet.png")} />
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                        
                    </ListItem.Content>
                    
                </ListItem>
            );
        }
        

    return (
            <FlatList 
                data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={(item, index) => index.toString()}
                />
    );
    }
}


export default Menu;