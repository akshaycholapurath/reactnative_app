import React, {Component} from 'react';
import { ScrollView,FlatList, Text} from 'react-native';
import { ListItem,Card,Avatar } from 'react-native-elements';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import {Loading} from './LoadingComponent';

const mapStateToProps = state =>{
    return {
        leaders:state.leaders
    }
}


function RenderHistory (){
    return(
        <Card >
                   <Card.Title>Our History</Card.Title>
                    <Card.Divider/>                  
                    <Text style={{margin:10}}>
                    Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.<br />
                    <br />
                    The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
                    </Text>
        </Card>
    );
}

const RenderLeaderDetail = ({item, index}) => {

    return (
        <ListItem bottomDivider >
            <Avatar source={{uri: baseUrl+ item.image }} />
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
            </ListItem.Content>
            
        </ListItem>
    );
}


const RenderLeaders = ({leaders})=>{
    if (leaders.isLoading){
        return(
            <Card >
                <Card.Title>Corporate Leadership</Card.Title>
                <Card.Divider/>
                <Loading />
            </Card>
        );
    }else if(leaders.errMess){
        return(
            <Text>{leaders.errMess}</Text>
        )
    }else{
    return(
        <Card >
                <Card.Title>Corporate Leadership</Card.Title>
                <Card.Divider/>                  
                <Text style={{margin:10}}>
                    <FlatList 
                        data={leaders.leaders}
                        renderItem={RenderLeaderDetail}
                        keyExtractor={(item, index) => index.toString()}
                    />    
                </Text>
        </Card>
    );
    }
}

class AboutUs extends Component {
   
    render(){
    return(
        <ScrollView>
            <RenderHistory />
            <RenderLeaders leaders={this.props.leaders} />
        </ScrollView>
    );
    }
}

export default connect(mapStateToProps)(AboutUs);