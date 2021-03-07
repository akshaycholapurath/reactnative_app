import React, {Component} from 'react';
import { View, Text} from 'react-native';
import { Card,Icon,Button } from 'react-native-elements';

function RenderContact(){

    return(
        <Card >
                   <Card.Title>Contact Information</Card.Title>
                    <Card.Divider/>                  
                    <Text style={{margin:10}}>
                        121, Clear Water Bay Road
                    </Text>
                    <Text style={{margin:10}}>
                        Clear Water Bay, Kowloon
                        </Text>
                    <Text style={{margin:10}}>
                        HONG KONG
                        </Text>
                    <Text style={{margin:10}}>
                        Tel: +852 1234 5678
                        </Text>
                    <Text style={{margin:10}}>
                        Fax: +852 8765 4321
                        </Text>
                    <Text style={{margin:10}}>
                        Email:confusion@food.net
                    </Text>
                    <Button 
                        title="Send Email"
                        buttonStyle={{backgroundColor:'#512DA8'}}
                        icon = {<Icon name='envelope-o' type="font-awesome" color="white" />}
                        />
        </Card>
    );
}

class ContactUs extends Component {

    render(){
    return(
        <RenderContact />
    );
    }
}

export default ContactUs;