import React, {Component} from 'react';
import { View, Text,ScrollView,StyleSheet,Switch,Button,Modal} from 'react-native';
import { Card ,ListItem,Icon,Input} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
// import * as Permissions from 'expo-permissions';
// import * as Notifications from 'expo-notifications';



class Reservation extends Component{
    constructor(props){
        super(props);
        this.state={
            guests:1,
            smoking: false,
            date:'',
        }
    }

    handleReservation =() =>{
        console.log(JSON.stringify(this.state));
        // this.presentLocalNotification(this.state.date);
        this.resetForm();    
    }

    toggleModal(){
        this.setState({showModal: !this.state.showModal})
    }

    resetForm(){
        this.setState({
            guests:1,
            smoking: false,
            date:''
        });
    }

    // async obtainNotificationPermission(){
    //     let permission = await Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS);
    //     if (permission.status !=='granted'){
    //         permission = await Permissions.askAsync(Permissions.USER_FACING_NOTIFICATIONS);
    //         if(permission.status != 'granted'){
    //             console.log("permission not granted")
    //         }
    //     } 
    //     return permission;
    // }

    // async presentLocalNotification(date){
    //     await this.obtainNotificationPermission();
    //     Notifications.presentLocalNotificationAsync({
    //         title:'Your Reservation',
    //         body:'Reserved For Date' + date
            
    //     });
    // }

    render(){
        return(
            <ScrollView>
                <Card.Title style={styles.formRow}>Reservation Counter</Card.Title>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Number of Guests</Text>
                        <Picker 
                            style={styles.fontItem}
                            selectedValue={this.state.guest}
                            onValueChange={(itemValue,itemIndex)=> this.setState({guests:itemValue})}
                            >
                            <Picker.Item label='1' value='1' />
                            <Picker.Item label='2' value='2' />
                            <Picker.Item label='3' value='3' />
                            <Picker.Item label='4' value='4' />
                            <Picker.Item label='5' value='5' />
                            <Picker.Item label='6' value='6' />
                        </Picker>                 
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Smoking/Non-Smoking ?</Text>
                        <Switch 
                                value={this.state.smoking}    
                                onValueChange={(value)=> this.setState({smoking:value})}
                                >
                        </Switch>                
                    </View>
                    <View style={styles.formRow}>
                         <Input placeholder="Date and Time" onChangeText={(value)=>this.setState({date:value})}/>       
                    </View>
                    <View style={styles.formRow}>
                      <Button
                        onPress={() => this.handleReservation()}
                        title="Reserve"
                        color="#000000"
                        />
                    </View>
                    
                        {/* <Modal        
                            animationType="slide" 
                            transparent={true}                   
                            visible={this.state.showModal}
                            onRequestClose={()=>this.toggleModal()}
                            >
                            <View style={styles.modal}>
                                <Text style={styles.modalTitle}>Your Reservation</Text>
                                <Text style={styles.modalText}>Number of Guests: {this.state.guests}</Text>
                                <Text style={styles.modalText}>Smoking ? : {this.state.smoking?"YES":"NO"}</Text>
                                <Text style={styles.modalText}>Date and Time : {this.state.date}</Text>
                                <Button 
                                    onPress={()=>{this.toggleModal();this.resetForm();}} 
                                    color="#512DA8"
                                    title="close"
                                    />

                            </View>
                        </Modal>                   */}
                        
            </ScrollView>
        )
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
    modal:{
        flex: 2,
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 100
    },
    modalTitle:{
        fontSize:24,
        fontWeight:'bold',
        backgroundColor:'#512DA8',
        textAlign:"center",
        color:"white",
        marginBottom: 20
    },
    modalText:{
        fontSize:18,
        margin:10
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#ede3f2',
        padding: 100
     }
})


export default Reservation;