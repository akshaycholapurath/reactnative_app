import React from 'react';
import { View, FlatList,Text } from 'react-native';
import { ListItem,Avatar } from 'react-native-elements';



const Menu=(props)=> {

    const renderMenuItem = ({item, index}) => {

        return (
            <ListItem bottomDivider onPress={()=>props.onPress(item.id)}>
                <Avatar source={{uri: item.image}} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
                
            </ListItem>
        );
    };

    return (
            <FlatList 
                data={props.dishes}
                renderItem={renderMenuItem}
                keyExtractor={(item, index) => index.toString()}
                />
    );
}


export default Menu;