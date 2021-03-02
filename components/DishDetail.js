import React, {Component} from 'react';
import { View, Text,ScrollView,Image} from 'react-native';
import { Card ,ListItem,Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';

const mapStateToProps = state =>{
    return {
        dishes:state.dishes,
        comments: state.comments
    }
}


const RenderDish=(props)=>{
    const dish = props.dish;

    if (dish != null ){
        return(      
                <Card >
                    <Card.Title>{dish.name}</Card.Title>
                    <Card.Image
                    resizeMode="cover"
                    source={{uri: baseUrl + dish.image}}
                     />
                    <Card.Divider/>                  
                    <Text style={{margin:10}}>
                        {dish.description}
                    </Text>
                    <Icon
                        raised
                        reverse
                        name={props.favorite? "heart":"heart-o"}
                        type='font-awesome'
                        color='#f50'
                        onPress={()=>props.favorite?console.log("Already Favorite") : props.onPress()} />
                </Card>            
        );
    }else{
        return(
            <View>
            </View>
        );
    }

}



const RenderComments = ({comment})=>{
    return(
        <View style={{margin:10}}>
           <Card>
               <Card.Title>Comments</Card.Title>
               <Card.Divider/> 
               <Text style={{margin:10}}>
                {
                    comment.map((l,i)=>(
                        <ListItem key={l.id}>
                            <ListItem.Content>
                                <ListItem.Subtitle>{l.comment}</ListItem.Subtitle>
                                <ListItem.Title>{`--Rating ${l.rating} -- ${l.author} `}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
                </Text>
            </Card>
        </View>
    );
}

class Dishdetail extends Component{
    constructor(props){
        super(props);
        this.state={
            favorites:[]
        }

    }

    markFavorite=(dishId)=>{
        this.setState({favorites:this.state.favorites.concat(dishId)})
    }

    render(){

        const {dishId} = this.props.route.params
    return(
        <ScrollView>
            <RenderDish dish={this.props.dishes.dishes[+dishId]} favorite={this.state.favorites.some(el=> el ===dishId)}
            onPress={()=> this.markFavorite(dishId)}/>
            <RenderComments comment={this.props.comments.comments.filter((comment)=>comment.dishId === dishId)} />
        </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Dishdetail);