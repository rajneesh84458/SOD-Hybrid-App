import React, { Component } from 'react'
import { Text, View,SafeAreaView,Dimensions ,TouchableOpacity,Image,StyleSheet,ScrollView} from 'react-native'
import { Container, Header, Content, Item, Input ,Form,Label,CheckBox,Button,Icon,Textarea} from 'native-base';
//import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-picker';
import { TouchableHighlight } from 'react-native-gesture-handler';
const {width,height} =Dimensions.get('window')

export default class EditProfile extends Component {
state ={
   photo:null
}
  handleChoosePhoto = () =>{
    const options ={
   noData:true
    };
   ImagePicker.launchImageLibrary( options,response =>{
      console.log("response",response)
      if(response.uri){
          this.setState({photo:response})
      }
    })
  }
    render() {
        const {navigation} =this.props;
     const {photo} =this.state;
        return (
         <SafeAreaView style ={{flex:1}}>
        <Header style ={{backgroundColor: '#0A79DF',justifyContent:'space-between'}}>
                <Icon name='arrow-back'  style ={{marginHorizontal:20,color:'white'}}
                onPress={()=>this.props.navigation.navigate("Home")}/>
                <Text style ={{fontSize:26,color:'white',fontWeight:'bold',marginRight:190}}>Edit Profile</Text>
                </Header>
                <ScrollView>
                <View style={{height:200,borderWidth:1,borderColor:'transparent',marginHorizontal:10,marginVertical:10}}>
                {photo && (
                       <Image 
                              source={{uri:photo.uri}}
                              style ={{width:150,height:150,marginHorizontal:120,marginVertical:20}}
                              />
                              
                              
                  )}
                  <TouchableOpacity onPress ={this.handleChoosePhoto} style ={{alignItems:'center',justifyContent:'center'}}>
                              <Image source= {require ('../images/avatar.png')}  style ={{width:150,height:150,marginHorizontal:120,marginVertical:20}}/>
                              {/* <Text style ={{textAlign:'center',fontSize:15,color:'grey'}}>Click here to upload Image</Text> */}
                          </TouchableOpacity>
                </View>
               
               <View style={{flex:1,marginHorizontal:10,marginVertical:20}}>
                 
                 <Item regular  style={{marginVertical:10,flexDirection:'row'}}>
                    <Input placeholder='Name' />
                    <Image source= {require ('../images/edit.png')}  style ={{width:25,height:25,}}/>
                </Item>
                 <Item regular style={{marginVertical:10}}>
                    <Input placeholder='Email' />
                </Item>
                 <Item regular style={{marginVertical:10}}>
                    <Input placeholder='Mobile' />
                </Item>
                 <Item regular style={{marginVertical:10,flexDirection:'row'}}>
                    <Input placeholder='altMobile' />
                    <Image source= {require ('../images/edit.png')}  style ={{width:25,height:25,}}/>
                </Item>
                 <Item regular style={{marginVertical:10}}>
                    <Input placeholder='Batch' />
                </Item>
                 <Item regular style={{marginVertical:10,flexDirection:'row'}}>
                    <Input placeholder='Place' />
                    <Image source= {require ('../images/edit.png')}  style ={{width:25,height:25,}}/>
                </Item>
               
                </View>
                 
                
                    <Button full color style={{marginTop:20,marginHorizontal:20,borderRadius:10,width:140,marginHorizontal:120}}
     
                    onPress ={()=>this.props.navigation.navigate('Login')}>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>UPDATE</Text>
          </Button>
          </ScrollView>
         </SafeAreaView>
        )
    }
}

