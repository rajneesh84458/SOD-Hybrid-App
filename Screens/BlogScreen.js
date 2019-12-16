import React, { Component } from 'react'
import { Text, View,SafeAreaView,Dimensions ,TouchableOpacity,Image,StyleSheet} from 'react-native'
import { Container, Header, Content, Item, Input ,Form,Label,CheckBox,Button,Icon,Textarea} from 'native-base';
//import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-picker';
import { TouchableHighlight } from 'react-native-gesture-handler';
const {width,height} =Dimensions.get('window')

export default class BlogScreen extends Component {
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
     const {photo} =this.state;
        return (
         <SafeAreaView style ={{flex:1}}>
        <Header style ={{backgroundColor: '#0A79DF',justifyContent:'space-between'}}>
                <Icon name='arrow-back'  style ={{marginHorizontal:20,color:'white'}}
                onPress={()=>this.props.navigation.navigate("Home")}/>
                <Text style ={{fontSize:26,color:'white',fontWeight:'bold',marginRight:190}}>Post a Blog</Text>
                </Header>
                <View style={{height:200,borderWidth:1,borderColor:'blue',marginHorizontal:10,marginVertical:10}}>
                {photo && (
                       <Image 
                              source={{uri:photo.uri}}
                              style ={{width:150,height:150,marginHorizontal:120,marginVertical:20}}/>
                  )}
                </View>
                <TouchableOpacity onPress ={this.handleChoosePhoto}>
                 
                    <Text style ={{textAlign:'center',fontSize:15,color:'grey'}}>Click here to upload Image</Text>
                </TouchableOpacity>
               <View style={{marginHorizontal:10,marginVertical:10}}>
                 <Item regular >
                    <Input placeholder='Title' />
                </Item>
                </View>
                <View style={{marginHorizontal:10,borderWidth:1,borderColor:'blue',height:50,justifyContent:'space-around'}}>
        
                 </View>
                <View style={{height:200,borderWidth:1,borderColor:'blue',marginHorizontal:10,marginVertical:10}}>
                <Textarea rowSpan={5} placeholder="Enter Brief description about blog" style={{fontSize:20}}/>
                    </View>
                    <Button full color style={{marginTop:20,marginHorizontal:20,borderRadius:10,width:140,marginHorizontal:120}}
     
                    onPress ={()=>this.props.navigation.navigate('Login')}>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Create Blog</Text>
          </Button>
          
         </SafeAreaView>
        )
    }
}

