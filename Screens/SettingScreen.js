import React, { Component } from 'react'
import { Text, View ,Button,SafeAreaView,Dimensions,Alert,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Input, Item } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';  
import FontAwesome from 'react-native-vector-icons/FontAwesome';  
import Entypo from 'react-native-vector-icons/Entypo';  
import Ionicons from 'react-native-vector-icons/Ionicons';  
const {width,height} =Dimensions.get('window')
export default class SettingScreen extends Component {
    
    render() {
        const {navigation}=this.props;
        return (
            <SafeAreaView style={{flex:1,marginVertical:10}}>
                 <Header style ={{backgroundColor: '#0A79DF',justifyContent:'space-around'}}>
                 <TouchableOpacity onPress ={()=>navigation.toggleDrawer()} >
            <Ionicons name ="ios-menu" size={32} color ="white" style={{bottom:5}}/>
      
            </TouchableOpacity>
                <Text style ={{fontSize:20,color:'white',marginRight:80}}>Settings</Text>
                </Header>
                <TouchableOpacity   style={{flex:0.07,flexDirection:'row',borderColor:'grey',borderWidth:1,marginHorizontal:10,marginVertical:15,justifyContent:'space-between',padding:10}}
                onPress={() => this.props.navigation.navigate('ChangePassword')}>
                     <Text style={{fontSize:23}}>Change Password</Text>
               <AntDesign name="lock" size={35} color="#0A79DF" />  
            </TouchableOpacity>
                <TouchableOpacity   style={{flex:0.07,flexDirection:'row',borderColor:'grey',borderWidth:1,marginHorizontal:10,marginVertical:15,justifyContent:'space-between',padding:10}}
                onPress={() => this.props.navigation.navigate('EditProfile')}>
                     <Text style={{fontSize:23}}>Edit Profile</Text>
               <FontAwesome name="user-o" size={35} color="#0A79DF" />  
            </TouchableOpacity>
                <TouchableOpacity   style={{flex:0.07,flexDirection:'row',borderColor:'grey',borderWidth:1,marginHorizontal:10,marginVertical:15,justifyContent:'space-between',padding:10}}
                onPress={() => this.props.navigation.navigate('About')}>
                     <Text style={{fontSize:23}}>About</Text>
               <Entypo name="book" size={35} color="#0A79DF" />  
            </TouchableOpacity>
            

             
            </SafeAreaView>
        )
    }
}
