import React, { Component } from 'react'
import { Text, SafeAreaView,Dimensions,View } from 'react-native' ;
const {width,height} =Dimensions.get('window');
import { Container, Header, Content, Item, Input ,Form,Label,CheckBox,Button,Icon,Textarea} from 'native-base';
 export default class SuggestionScreen extends Component {
    render() {
        return (
            <SafeAreaView style ={{flex:1}}>
             <View style ={{width:width,height:50,backgroundColor:'#EAF0F1'}}>
                <Text style ={{padding:15,fontSize:20,color:'grey'}}>Help us help you better</Text>
             </View>

              <View style ={{flex:0.4}}>
            <Text style ={{fontSize:20,padding:20,color:'grey'}}>Thank you for using our application.Your views and 
                suggestions are essential in improving our application.
            </Text>
            <Text style={{fontSize:20,padding:20,color:'grey'}}>
                Please submit your feedback and help us improve our application.
            </Text>
              </View>
              <View style={{flex:0.5}}>
              <View style={{marginHorizontal:10,marginVertical:10}}>
                 <Item  >
                    <Input placeholder='Title' style ={{borderColor:'black',borderWidth:1}} />
                </Item>
                </View>
               
                <View style={{height:200,borderWidth:1,borderColor:'black',marginHorizontal:10,marginVertical:10}}>
                <Textarea rowSpan={5} placeholder="Feedback" style={{fontSize:20}}/>
                    </View>
             </View>
                    <Button full color style={{marginTop:20,marginHorizontal:20,borderRadius:10,width:200,marginHorizontal:120}}
     
                    onPress ={()=>this.props.navigation.navigate('Login')}>
            <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>Send Feedback</Text>
          </Button>
          
            </SafeAreaView>
        )
    }
}
