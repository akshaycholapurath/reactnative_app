import React,{Component} from 'react';
import { ScrollView,View, FlatList,Text,Image } from 'react-native';
import {Card} from 'react-native-elements';
import {Loading} from './LoadingComponent';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';

const mapStateToProps = state =>{
    return {
        dishes:state.dishes,
        promotions: state.promotions,
        leaders: state.leaders

    }
}

const RenderItem=({item,isLoading,errMess})=> {
    if (isLoading){
        return(
            <Card>
                <Loading />
            </Card>
        )
    } else if(errMess){
        return(
            <View>
                <Card><Text>{errMess}</Text></Card>
            </View>
        )
    } else {
    if (item != null) {
        return (
            <Card>
                <Card.Title>{item.name}</Card.Title>
                <Card.Divider />
                <Card.Image
                    resizeMode="cover"
                    source={{uri: baseUrl + item.image}}
                />
                <Text style={{ margin: 10 }}>
                    {item.description}
                </Text>
            </Card>
        );
    } else {
        return (<View></View>);
    }
    }
}


class Home extends Component{

    render(){
        return(
            <ScrollView>
                <RenderItem item={this.props.dishes.dishes.filter((dish)=> dish.featured )[0]} 
                    isLoading={this.props.dishes.isLoading} errMess={this.props.dishes.errMess}/>

                <RenderItem item={this.props.promotions.promotions.filter((promotion)=> promotion.featured )[0]} 
                    isLoading={this.props.promotions.isLoading} errMess={this.props.promotions.errMess}/>   

                <RenderItem item={this.props.leaders.leaders.filter((leader)=> leader.featured )[0]} 
                     isLoading={this.props.leaders.isLoading} errMess={this.props.leaders.errMess}/>

            </ScrollView>
            
        );
    }
}

export default connect(mapStateToProps)(Home);