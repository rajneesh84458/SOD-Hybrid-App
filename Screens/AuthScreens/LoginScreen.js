import React, { Component } from 'react'
import { Text, View ,SafeAreaView,Image,TextInput} from 'react-native'
import { Container, Header, Content, Item, Input,Button,ListItem,CheckBox,Body,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'react-native-axios';
import Dialog from 'react-native-popup-dialog';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default class LoginScreen extends Component {
   
        state = {
                email_name:'shivanisingh7291@gmail.com',
                password:'123456',
                token_id:'',
                visible:false,
                checked :false,
                message :'',
                email:''

        }

       
   makeApiCall =() => {
      if(this.getData()) {
         
      }
   }
        getData = async()=>{
          var {email_name,password,token_id} =this.state;
             const formData = new FormData();
             formData.append('rule', 'login');
             formData.append('email_name', email_name);
             formData.append('password',password);
             formData.append('token_id', token_id);
             
             const that = this;
          axios({
           
             url: `https://shuddhairpurifier.com/mlacademy/api.php`,
             method: 'POST',
             data:formData,
           
             headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
             }
           })
           .then((response) => {
            //console.log(response);
            if (response.data.Status == 0)
                alert('Invalid User');
            else
                this.props.navigation.navigate("Home");
        })
          }
        
          componentDidMount (){
            this.forgotPasswordCall()
          }
forgotPasswordCall = () =>{
      var {message} =this.state;
       const formData = new FormData();
        formData.append('rule','forgot_password');
        formData.append ('email','')

        const that = this;
        axios({
         
           url: `https://shuddhairpurifier.com/mlacademy/api.php`,
           method: 'POST',
           data:formData,
         
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json'
           }
         })
         .then((response) => {
          console.log(response.data.message);
          if (response.data.status == 1)
          {
            console.log( "move to the screen")
            this.props.navigation.navigate("ChangePassword");
            }
          
         
      })
}

           render() {
   
        return (
          <SafeAreaView style ={{flex:1}}>
            <Header style ={{backgroundColor: '#0A79DF',}}>
               
                <Text style ={{fontSize:20,color:'white'}}>LOGIN</Text>
                </Header>
              <View style={{marginHorizontal:10,flex:0.4,justifyContent:'center',alignItems:"center",marginVertical:15}}>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
            }}
            style={{  width: 150, height: 150,marginTop:10 }}
          />
          <Text style={{fontSize:20,fontWeight:'bold',marginTop:40}}>Welcome to M L Academy</Text>
        </View>
                <View style ={{flex:0.3,marginHorizontal:20}}>
                <Item regular style ={{borderColor:'blue'}}>
                    <Input placeholder="Enter Username or email" 
                           onChangeText ={(email_name)=>this.setState({email_name})}
                          value ={this.state.email_name}/>
                </Item>
                <Item regular style ={{marginTop:15,borderColor:'blue'}}>
                    <Input placeholder="Enter Password"
                          value ={this.state.password}
                          onChangeText ={(password)=>this.setState({password})}
                     secureTextEntry={true} />
                </Item>

                <View style ={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                        <View style={{flexDirection:'row',}}>
                          
                        <CheckBox checked={true} />
                       <Text style={{paddingLeft:20}}>Stay logged in</Text>
                       </View>
                         <View>

                         
                        <TouchableOpacity onPress ={()=>this.setState({visible:true})}>
                            <Text>Forgot Password ?</Text>     
                        </TouchableOpacity>
                        </View>
                </View>
                <Button full color style={{marginTop:20}}
                   onPress ={this.makeApiCall}>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Login</Text>
          </Button>
          <TouchableOpacity style ={{alignItems:'center',justifyContent:'center',marginTop:20}}
           onPress ={()=>this.props.navigation.navigate('Register')}>
              <Text style ={{color:'black',fontSize:15,fontWeight:'bold'}}>New to Signup?</Text>
             
          </TouchableOpacity>
                </View>
                <Dialog
        visible={this.state.visible}
        onTouchOutside={() => {this.setState({ visible: false }) }} >
          <View style={{width:380,height:250,}}>
          <View style={{width:380,height:60,backgroundColor:'#0A79DF',flexDirection:'row',justifyContent:'space-between',padding:15}}>
            <Text style ={{fontSize:22,color:'white',fontWeight:'bold'}}>Forgot Password</Text>
            <AntDesign name ="close" size ={32} color ="white"
              onPress ={()=>this.setState({visible:false})}/>
            </View> 

            <View style ={{borderColor:'blue',marginHorizontal:15,borderWidth:1,height:60,justifyContent:'center',marginVertical:20}}>
               <TextInput  value ={this.state.email}
               onChangeText={(email)=>this.setState({email})}
               placeholder="Please Enter Email or Mobile no."
                  placeholderTextColor="#6A89CC"
                  style ={{fontSize:20,left:10}}>
                      </TextInput> 
            </View>
            <Button full  style={{width:100,marginTop:20,marginLeft:120,backgroundColor:'#0A79DF',borderRadius:20}}
                   onPress ={this.forgotPasswordCall}>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Submit</Text>
          </Button>  
          </View>
          </Dialog>
          </SafeAreaView>
        )
    }
}
