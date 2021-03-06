import React,{Component} from 'react';
import { View, Button,FlatList,Text, ScrollView,Alert } from 'react-native';
import { ListItem,Avatar,Icon,Card } from 'react-native-elements';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import {deleteFavorite} from '../redux/ActionCreators';



const mapStateToProps = state =>{
    return {
        dishes:state.dishes,
        favorite:state.favorites
    }
}

const mapDispatchToProps = dispatch =>({
    deleteFavorite:(dishId)=> dispatch(deleteFavorite(dishId))
});

const RenderFavorite = (props)=>{
    const item = props.item;
    return(
            <ListItem key={item.id} bottomDivider >
                <Avatar source={{uri: baseUrl + item.image}} />
                <ListItem.Content >
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>            
                </ListItem.Content> 
                <Icon
                    raised
                    reverse
                    name="remove"
                    type='font-awesome'
                    color='red' 
                    onPress={()=>props.unmark()}
                    />        
            </ListItem>
    )
}


class Favorite extends Component {
   
    deleteFavoriteHandle=(dishId)=>{
        this.props.deleteFavorite(dishId)
    }

    render(){

    return(
        <ScrollView>
            <Card>
            <Card.Title>FAVORITES</Card.Title>
                <FlatList 
                    data={this.props.dishes.dishes.filter(dish=>this.props.favorite.some(el=>el===dish.id))}
                    renderItem={({ item }) =><RenderFavorite item={item} unmark={()=>this.deleteFavoriteHandle(item.id)} />}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={this.props} 
                    />
            </Card>

        </ScrollView>
       
    );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorite);