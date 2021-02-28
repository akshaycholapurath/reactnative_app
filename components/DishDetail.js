import React, {Component} from 'react';
import { View, Text} from 'react-native';
import { Card } from 'react-native-elements';
import {DISHES} from '../shared/dishes';


const RenderDish=(props)=>{
    const dish = props.dish;

    if (dish != null ){
        return(      
                <Card >
                    <Card.Title>{dish.name}</Card.Title>
                    <Card.Divider/>                  
                    <Text style={{margin:10}}>
                        {dish.description}
                    </Text>
                </Card>            
        );
    }else{
        return(
            <View>
            </View>
        );
    }

}

class Dishdetail extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES
        }

    }


    render(){

        const {dishId} = this.props.route.params
    return(
        <RenderDish dish={this.state.dishes[+dishId]} />
        );
    }
}

export default Dishdetail;