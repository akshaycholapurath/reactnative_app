import React,{Component} from 'react';
import { View, Button,StyleSheet,FlatList,Text, ScrollView,Alert } from 'react-native';
import { ListItem,Avatar,Icon,Card,Input, CheckBox } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            remember:false
        }
        
    }

    // componentDidMount() {
    //     SecureStore.getItemAsync('userinfo')
    //         .then((userdata) => {
    //             let userinfo = JSON.parse(userdata);
    //             if (userinfo) {
    //                 this.setState({username: userinfo.username});
    //                 this.setState({password: userinfo.password});
    //                 this.setState({remember: true})
    //             }
    //         })
    // }

    // handleLogin(){
    //     console.log(JSON.stringify(this.state));
    //     if (this.state.remember){
    //         SecureStore.setItemAsync(
    //             'userinfo',
    //             JSON.stringify({username: this.state.username, password: this.state.password})
    //         )
    //         .catch((error)=> console.log("Could not save user info",error))
    //     }
    //     else{
    //         SecureStore.deleteItemAsync("userinfo")
    //         .catch((error)=> console.log("Could not delete user info",error))
    //     }
    // }

    render(){
        return(
            <View>
                <Card>
                    <Card.Title>Log-in</Card.Title>
                    <View style={styles.formRow}>
                         <Input placeholder="User Name" 
                                leftIcon={{type:'font-awesome',name:"user-o"}} 
                                onChangeText={(value)=>this.setState({username:value})}
                                />       
                    </View>
                    <View style={styles.formRow}>
                         <Input placeholder="Password" 
                                leftIcon={{type:'font-awesome',name:"key"}} 
                                onChangeText={(value)=>this.setState({password:value})}
                                />       
                    </View>
                    <CheckBox 
                        title="Remember Me"                    
                        checked={this.state.remember}
                        onPress={()=> this.setState({remember: !this.state.remember})}
                        />
                    <View style={styles.formRow}>
                        <Button
                                onPress={() => this.handleLogin() }
                                title="Login"
                                color="#000000"
                                />
                    </View>
                    <View style={styles.formRow}>
                        <Button
                                onPress={() => this.props.navigation.navigate("Home") }
                                title="Home"
                                color="#000000"
                                />
                    </View>                   
                </Card>
            </View>
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
    fornCheckbox:{
        margin:40,
        backgroundColor:null
    }
})

export default Login;