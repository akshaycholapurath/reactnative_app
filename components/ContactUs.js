import React, {Component} from 'react';
import { View, Text} from 'react-native';
import { Card } from 'react-native-elements';


function RenderContact (){
    return(
        <Card >
                   <Card.Title>Contact Information</Card.Title>
                    <Card.Divider/>                  
                    <Text style={{margin:10}}>
                        121, Clear Water Bay Road<br /><br />
                        Clear Water Bay, Kowloon<br /><br />
                        HONG KONG<br /><br />
                        Tel: +852 1234 5678<br /><br />
                        Fax: +852 8765 4321<br /><br />
                        Email:confusion@food.net
                    </Text>
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