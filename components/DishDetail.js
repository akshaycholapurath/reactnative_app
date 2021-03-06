import React, {Component} from 'react';
import { View,Button, Text,ScrollView,Image,StyleSheet,PanResponder} from 'react-native';
import { Card ,ListItem,Icon,Rating, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import {postFavorite,postComment,deleteFavorite} from '../redux/ActionCreators';


const mapStateToProps = state =>{
    return {
        dishes:state.dishes,
        comments: state.comments,
        favorites:state.favorites
    }
}

const mapDispatchToProps = dispatch =>({
    deleteFavorite:(dishId)=> dispatch(deleteFavorite(dishId)),
    postFavorite:(dishId)=>dispatch(postFavorite(dishId)),
    postComment:(dishId, rating, comment, author)=>dispatch(postComment(dishId, rating, comment, author))
});


const RenderDish=(props)=>{
    const dish = props.dish;

    const recognizeDrag = ({moveX,moveY,dx,dy})=>{
        if(dx <-200)
            return true;
        else 
            return false;
    }

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder:(e,gestureState)=>{
            return true;
        },
        onPanResponderEnd: (e,gestureState)=>{
            if(recognizeDrag(gestureState)){
                props.favorite ? props.unmark() : console.log('Already deleted')
            }
            return true;
        }
    });

    if (dish != null ){
        return( 
                <Card {...panResponder.panHandlers}>
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
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            author: '',
            comment: ''
        }
    }
    markFavorite=(dishId)=>{
        this.props.postFavorite(dishId)
    }

    unmarkFavorite = (dishId)=>{
        this.props.deleteFavorite(dishId)
    }

    resetState(){
        this.setState({
                rating: 0,
                author: '',
                comment: ''
            })
        
    }

    handleComments(dishId){
        this.props.postComment(dishId, this.state.rating, this.state.comment, this.state.author);
        this.resetState();
    }

    render(){

        const {dishId} = this.props.route.params
    return(
        <ScrollView>
            <RenderDish dish={this.props.dishes.dishes[+dishId]} favorite={this.props.favorites.some(el=> el ===dishId)}
            onPress={()=> this.markFavorite(dishId)} unmark={()=>this.unmarkFavorite(dishId)}/>

            <Card>
                <Card.Title>Add Comments</Card.Title>
                <View style={styles.modal}>
    
                    <View>
                    <Rating showRating
                        type="star"
                        fractions={0}
                        startingValue={0}
                        imageSize={30}
                        onFinishRating={(value)=>this.setState({rating:value})}
                        />
                    </View>
    
                    <View style={styles.formRow}>
                        <Input 
                            placeholder='Author' 
                            onChangeText={(value)=>this.setState({author: value })}
                            />
                    </View>

                    <View style={styles.formRow}>
                        <Input 
                            placeholder='Comments' 
                            onChangeText={(value)=>this.setState({comment: value })}
                            />
                    </View>
                    <View>
                            <Button color="#512DA8"
                                title="SUBMIT"
                                onPress={() => this.handleComments(dishId)}
                            />
                    </View>
                    
                </View>
                
            </Card>

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
    },
    formLabel:{
        fontSize:14,
        flex:2
    },
    fontItem:{
        flex:1
    },
    button: {
        backgroundColor: 'blue',
        color: 'white',
        height: 30,
        lineHeight: 30,
        marginTop: 10,
        textAlign: 'center',
        width: 150
      },
      container: {
        flex:1,
        flexDirection:'row',
        margin:20
    
      },
      input: {
        borderColor: 'black',
        borderWidth: 1,
        height: 37,
        flex:1
      },
      modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#512DA8',
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});




export default connect(mapStateToProps,mapDispatchToProps)(Dishdetail);