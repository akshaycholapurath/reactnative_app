import React, {Component} from 'react';
import { View, Text,ScrollView,Image,StyleSheet} from 'react-native';
import { Card ,ListItem,Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import {postFavorite} from '../redux/ActionCreators';

const mapStateToProps = state =>{
    return {
        dishes:state.dishes,
        comments: state.comments,
        favorites:state.favorites
    }
}

const mapDispatchToProps = dispatch =>({
    postFavorite:(dishId)=>dispatch(postFavorite(dishId))
});


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
                    <View style={styles.formRow}>
                        <Icon
                            raised
                            reverse
                            name={props.favorite? "heart":"heart-o"}
                            type='font-awesome'
                            color='#f50'
                            onPress={()=>props.favorite?console.log("Already Favorite") : props.onPress()} />

                        <Icon
                            raised
                            reverse
                            name="pencil"
                            type='font-awesome'
                            color='purple'
                            />
                    </View>
                    
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
    
    markFavorite=(dishId)=>{
        this.props.postFavorite(dishId)
    }

    render(){

        const {dishId} = this.props.route.params
    return(
        <ScrollView>
            <RenderDish dish={this.props.dishes.dishes[+dishId]} favorite={this.props.favorites.some(el=> el ===dishId)}
            onPress={()=> this.markFavorite(dishId)}/>
            <RenderComments comment={this.props.comments.comments.filter((comment)=>comment.dishId === dishId)} />
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formRow:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        flexDirection:'row',
        margin:20
    }});

export default connect(mapStateToProps,mapDispatchToProps)(Dishdetail);