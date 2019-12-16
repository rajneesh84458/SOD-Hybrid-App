import React, { Component } from 'react'
import { View,Text,Image,SafeAreaView,FlatList ,AppRegistry,Linking} from 'react-native'
import { List, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'react-native-axios';
//import {  Accordion,Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base'

export default class AluminiScreen extends Component {
  state = {
    expanded: false,
    dataSource:[]
}
  

makeCall = () => {

  let phoneNumber = '';

  if (Platform.OS === 'android') {
    phoneNumber = 'tel:${1234567890}';
  } else {
    phoneNumber = 'telprompt:${8445840988}';
  }

  Linking.openURL(phoneNumber);
};


getData = async()=>{

  const formData = new FormData();
  formData.append('rule', 'get_associates');
  formData.append('is_admin', 1);
  const that = this;
  axios({
    url: `https://shuddhairpurifier.com/mlacademy/api.php`,
    method: 'POST',
    data: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
   // console.log(response.data);
    that.setState({dataSource:response.data.data})
   // console.log('hello',response.data.data)
  }).catch(function (error) {
    console.log(error);
    
  });
}
  _handlePress1 = () =>
    this.setState({
      expanded: !this.state.expanded,
      });
   
      componentDidMount(){
        return  this.getData();
    }

    render() {
    return (
      <SafeAreaView style={{flex:1}}>
         {
                this.state.dataSource !==''  && 
                <FlatList
                keyExtractor={(item,id) => id.toString()}
                    //extraData={this.state.refresh}
                    data={this.state.dataSource}
                    numColumns={1}
                    renderItem={({item}) => {
                      return(
                        <View style={{flex:1,width:400,borderColor:'blue',borderWidth:1,borderRadius:20,marginVertical:7,margin:5}}>
      <View style ={{flexDirection:'row',borderWidth:1,width:350,margin:5,borderColor:'transparent'}}>
      <Image 
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
          }}
          style={{  width: 50, height: 50,marginTop:10 ,borderWidth:1,borderColor:'transparent'}}/> 
          <View style={{flexDirection:'column',marginHorizontal:10,paddingTop:5,width:130,borderWidth:1,borderColor:'transparent'}}>
          <Text style={{fontSize:15,color:'grey'}}>{item.user_name}</Text>
          <Text style={{fontSize:15,color:'grey'}}>{item.batch}</Text>       
          </View>
          <Icon name ="ios-call" size={32} color ="blue" style={{marginLeft:165,marginTop:10}}
           onPress={this.makeCall}/>
      </View>  
   
    <List.Accordion  style={{marginTop:-25,}}
         onPress={this._handlePress1}           >
          
        <View style={{marginHorizontal:10,padding:10,justifyContent:'center'}}>      
            <Text style ={{fontSize:15}}>Email                  : <Text style={{color:'grey',}}>{item.email}</Text></Text>
            <Text style ={{fontSize:15}}>Mobile                :  <Text style={{color:'grey',}}>{item.mobile}</Text></Text>
            <Text style ={{fontSize:15}}>Address             : <Text style={{color:'grey',}}>{item.address}</Text></Text>
            <Text style ={{fontSize:15}}>Social Profile     : <Text style={{color:'grey',}}></Text></Text>
       </View>
      </List.Accordion>
       </View>
                      )
                    }
                    
                  }
                  
                />
               
                }
      </SafeAreaView>
    )
  }
}

//AppRegistry.registerComponent('AluminiScreen', () => AluminiScreen)