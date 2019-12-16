import React, { Component } from 'react'
import { Text, View,SafeAreaView,Dimensions ,TouchableOpacity,Image,} from 'react-native'
import { Container, Header, Item, Input,Icon} from 'native-base';

import ImagePicker from 'react-native-image-picker';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width,height} =Dimensions.get('window')

export default class AdminProfileScreen extends Component {
state ={
  avatarSource: null,
}
  handleChoosePhoto = () =>{
    const options ={
   noData:true
    };
   ImagePicker.launchImageLibrary( options,response =>{
      console.log("response",response)
      if(response.uri){
          this.setState({avatarSource:response})
      }
    })
  }
    render() {
     const {photo} =this.state;
        return (
         <SafeAreaView style ={{flex:1}}>
        <Header style ={{backgroundColor: '#0A79DF',justifyContent:'space-between'}}>
                <Icon name='arrow-back'  style ={{marginHorizontal:20,color:'white'}}
                onPress={()=>this.props.navigation.navigate("Home")}/>
                <Text style ={{fontSize:26,color:'white',fontWeight:'bold',marginRight:190}}>Admin Profile</Text>
                </Header>
                <View style={{height:200,borderWidth:1,borderColor:'blue',marginHorizontal:10,marginVertical:10}}>
               
                  {/* <View style ={{width:150,height:150,borderRadius:150/2,borderColor:'blue',borderWidth:1,marginHorizontal:120,marginVertical:20}}> */}
                  {photo && (
            <Image source={{uri:photo.uri}}
                style ={{width:150,height:150,borderRadius:150/2,marginHorizontal:120,marginVertical:20}}/>
                  )}
                  </View>
                {/* </View> */}
                <TouchableOpacity onPress ={this.handleChoosePhoto}>
                 
<Text style ={{textAlign:'center',fontSize:15,color:'grey'}}>Click here to upload Image</Text>
                </TouchableOpacity>
               <View style={{marginHorizontal:15,marginVertical:10}}>
                 <Item regular>
                    <Input placeholder='Name' />
                </Item>
                </View>
               <View style={{marginHorizontal:15,marginVertical:10}}>
                 <Item regular >
                    <Input placeholder='Email'/>
                </Item>
                </View>
               <View style={{marginHorizontal:15,marginVertical:10}}>
                 <Item regular >
                    <Input placeholder='Mobile' />
                    <Ionicons name ="ios-call" size={32} color ="blue" style={{marginTop:10}}
                        onPress ={()=>alert("Calling .....")}/>
                </Item>
                </View>
               <View style={{marginHorizontal:15,marginVertical:10}}>
                 <Item regular >
                    <Input placeholder='Batch' />
                </Item>
                </View>
                
                
          
         </SafeAreaView>
        )
    }
}

