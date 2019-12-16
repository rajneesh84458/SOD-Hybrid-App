import React, { Component } from 'react'
import { Platform,Text, View,SafeAreaView ,StatusBar,ScrollView,Image,TouchableOpacity,Dimensions,StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default class DirectoryScreen extends Component {
    // static navigationOptions = {
    //     headerStyle: {
    //                 backgroundColor: '#0A79DF',
    //               },headerLeft: () => (
    //                  <View style={{flexDirection:'row',paddingHorizontal:20,paddingBottom:20}}>
    //                  <TouchableOpacity onPress ={()=>this.props.navigation.goBack()} >
    //                  <AntDesign name ="arrowleft" size={32} color ="white" style={{bottom:5}}
    //                  />
    //               </TouchableOpacity>
    //                  <Text style={{marginLeft:20,fontSize:20,fontWeight:'bold',color:'white'}}>Description</Text>
    //                  </View>
    //               ),
                
    //   };
    render() {
        
        return (
            <View>
                <Text> DirectoryScreen </Text>
            </View>
        )
    }
}
