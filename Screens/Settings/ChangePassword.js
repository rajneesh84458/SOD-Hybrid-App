import React, { Component } from 'react'
import { Text, View,SafeAreaView } from 'react-native'
import { Container, Header, Icon,Card,Body,CardItem,Item,Input,Button} from 'native-base';
import PasswordInputText from 'react-native-hide-show-password-input';
export default class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          oldPass: '',
          newPass:'',
          confirmPass:''
        };
      }

  
    render() {
        const { oldPass,newPass,confirmPass } = this.state;
    
        return (
            <SafeAreaView style ={{flex:1}}>
                <Header style ={{backgroundColor: '#0A79DF',justifyContent:'space-around'}}>
                <Icon name='arrow-back'  style ={{color:'white',}}
                onPress={()=>this.props.navigation.navigate("Login")}/>
                <Text style ={{fontSize:20,color:'white',marginRight:80}}>Change Password</Text>
                </Header>
                <Card style ={{flex:0.4,width:'95%',marginLeft:10,paddingHorizontal:10}}>
                <PasswordInputText 
                        label ="Enter old password"
                        getRef={input => this.input = input}
                        value={oldPass}
                        onChangeText={(oldPass) => this.setState({ oldPass })}
                />
                <PasswordInputText
                        label ="Enter New password"
                        getRef={input => this.input = input}
                        value={newPass}
                        onChangeText={(newPass) => this.setState({ newPass })}
                />
            
                <PasswordInputText
                        label ="Enter Confirm password"
                        getRef={input => this.input = input}
                        value={confirmPass}
                        onChangeText={(confirmPass) => this.setState({ confirmPass })}
                />
            
             
            <Button full color style={{marginTop:20,marginHorizontal:20,borderRadius:10,width:120,marginHorizontal:120}}
     
                    onPress ={()=>this.props.navigation.navigate('Login')}>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Submit</Text>
          </Button>
         </Card>
                
            </SafeAreaView>
        )
    }
}



