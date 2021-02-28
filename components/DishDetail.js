import React from 'react';
import { View, Text} from 'react-native';
import { Card } from 'react-native-elements';


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

const Dishdetail=(props)=>{
    return(
        <RenderDish dish={props.dish} />
        );
}

export default Dishdetail;