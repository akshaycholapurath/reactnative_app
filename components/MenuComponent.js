import React,{Component} from 'react';
import { View, FlatList,Text } from 'react-native';
import { ListItem,Avatar } from 'react-native-elements';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';

const mapStateToProps = state =>{
    return {
        dishes:state.dishes,
    }
}


class Menu extends Component{
  
    render(){

    const renderMenuItem = ({item, i}) => {


            return (
                <ListItem key={i} bottomDivider onPress={() => this.props.navigation.navigate('DishDetail', { dishId: item.id})} >
                    <Avatar source={{uri: baseUrl + item.image}} />
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                        
                    </ListItem.Content>
                    
                </ListItem>
            );
        }
        

    return (
            <FlatList 
                data={this.props.dishes.dishes}
                renderItem={renderMenuItem}
                keyExtractor={(item, index) => index.toString()}
                />
    );
    }
}


export default connect(mapStateToProps)(Menu);