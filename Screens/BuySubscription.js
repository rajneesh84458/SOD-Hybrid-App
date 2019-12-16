import React, { Component } from 'react'
import { Text, View ,SafeAreaView,Image, Picker,StyleSheet,Dimensions} from 'react-native'
import { Container, Header, Content, Button,ListItem,List} from 'native-base';
import { RadioButton } from 'react-native-paper';
const {width,height} =Dimensions.get('window')
export default class BuySubscription extends Component {
    state = {
        checked: 'first',
        user:''
      };
      updateUser = (user) => {
        this.setState({ user: user })
     }
    render() {
        const { checked } = this.state;
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:0.4,borderColor:'blue',borderWidth:1,marginHorizontal:10,marginVertical:10}}>
                 <Image source= {require('./images/razorpay.png')} style={{marginHorizontal:40,width:300}}/>
                 <Text style={{textAlign:'center',fontSize:18,marginTop:50}}>Transfer your money through RazorPay</Text>
                </View>
    <View style={{flex:0.5,borderColor:'blue',borderWidth:1,marginHorizontal:10,marginVertical:10,}}>
        
            <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10,}}>
                    <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'first' }); }}
                    />
                    <Text style={{fontSize:15,paddingTop:5}}>Membership </Text>
                    </View>
                    <View style={{flexDirection:'row',marginHorizontal:10}}>
                    <RadioButton 
                    value="second" 
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'second' }); }}
                    />
                    <Text style={{fontSize:15,paddingTop:5}}>Contribution</Text>
                    
                    
                    </View>
                    

                   
        <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}
         style={{ height: 100, width: '100%' }}
            >
               <Picker.Item label = "Annually" value = "1000" />
               <Picker.Item label = "Permanent" value = "5000" />
              
            </Picker>
            <List style ={{marginTop:60}}>
            <ListItem itemHeader first >
            <Text style = {styles.text}>{this.state.user}</Text>
            </ListItem>
            </List>
                </View>

                <Button primary 
                         onPress={()=>alert("Payment.......")}
                style={{width:100,marginHorizontal:160,justifyContent:'center',borderRadius:10}}>
            <Text style={{color:'white',fontSize:20}}>PAY</Text>
          </Button>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
       fontSize: 20,
       alignSelf: 'flex-start',
       color: 'grey',
      
      
      
    }
 })