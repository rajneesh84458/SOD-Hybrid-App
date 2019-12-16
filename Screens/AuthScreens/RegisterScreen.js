import React, { Component } from 'react'

import {
  Image,
  PixelRatio,
  
  Text,
  TouchableOpacity,
  View,SafeAreaView,StyleSheet,ScrollView
} from 'react-native';
import {Header, Content, Item, Input ,Form,Label,CheckBox,Button,Icon} from 'native-base';

import ImagePicker from 'react-native-image-picker';
import { Dropdown } from 'react-native-material-dropdown';
import axios from 'react-native-axios';
export default class RegisterScreen extends Component {
    static navigationOptions ={
        title :"REGISTER",
        headerStyle:{
            backgroundColor: '#0A79DF',
            },
            headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:20
    },}

   state ={
        
         username:'',
         email:'',
         password:'',
         confirmpwd:'',
         address:'',
         mobile:'',
         batch:'',
         profilename:'',
         billing_address:'',
         social_media_id:'',
         alt_mobile:'',
         token_id:'',
           type:'',
           image:null

   }
  //  handleChoosePhoto = () =>{
  //   const options ={
  //  noData:true
  //   };
  //  ImagePicker.launchImageLibrary( options,response =>{
  //     console.log("response",response)
  //     if(response.uri){
  //         this.setState({image:response})
  //     }
  //   })
  // }


  selectPhotoTapped =()=> {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
       // let source = {uri: response.uri};
        let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          image: source,
        });
      }
    });
  }

   getData = async()=>{
    var {username,email,mobile,alt_mobile,address,batch,password,confirmpwd,profilename,image} =this.state;
       const formData = new FormData();
       formData.append('rule', 'signup');
       formData.append('user_name', username);
       formData.append('mobile',mobile);
       formData.append('email',email);
       formData.append('password',password);
       
       formData.append('alt_mobile',alt_mobile);
       formData.append('address',address);
       formData.append('billing_address','');
       formData.append('social_profile','');
       formData.append('profile_name', profilename);
       formData.append('batch', batch);
       formData.append('type', '');
       formData.append('token_id','');
       formData.append('social_media_id','');
       formData.append('image',image);
     
       const that = this;
    axios({
     
       url: `https://shuddhairpurifier.com/mlacademy/api.php`,
       method: 'POST',
       data:formData,
     
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json'
       }
     }).then(function (response) {
      console.log(response)
       //console.log(response.data.user_name);
      // that.setState({data:response.data.data})
     
       //console.log('hello',response.data)
     }).catch(function (error) {
       console.log(error);
       
     });
   }
  
   
    render() {
      
      let data = [{
        value:'Alumini Member (Free)',
      }, {
        value: 'Association Member (Paid)',
      }, 
      ];
     
        return (
            <SafeAreaView style={{flex:1}}>
                <Header style ={{backgroundColor: '#0A79DF',}}>
                <Icon name='arrow-back'  style ={{color:'white',marginRight:140}}
                onPress={()=>this.props.navigation.navigate("Login")}/>
                <Text style ={{fontSize:20,color:'white',marginRight:100}}>REGISTER</Text>
                </Header>
                <ScrollView style ={{flex:1}}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View
            style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
            {this.state.image === null ? (
              <Text>Select a Photo</Text>
            ) : (
              <Image style={styles.avatar} source={this.state.image} />
            )}
          </View>
        </TouchableOpacity>
         <Content style ={{marginHorizontal:10}}>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input value ={this.state.username}
                     onChangeText={(username)=>this.setState({username})} />
            </Item>
            <Item floatingLabel >
              <Label>Email Address</Label>
              <Input value ={this.state.email}
                    onChangeText={(email)=>this.setState({email})}/>
            </Item>
            <Item floatingLabel >
              <Label>Password</Label>
              <Input value ={this.state.password}
              onChangeText ={(password)=>this.setState({password})}
              secureTextEntry={true}/>
            </Item>
            <Item floatingLabel >
              <Label>Confirm Password</Label>
              <Input  value ={this.state.confirmpwd}
              onChangeText ={(confirmpwd)=>this.setState({confirmpwd})}
              secureTextEntry={true}/>
            </Item>
            <Item floatingLabel >
              <Label>Address</Label>
              <Input value ={this.state.address}
                     onChangeText ={(address)=>this.setState({address})} />
            </Item>
            <Item floatingLabel >
              <Label>Mobile</Label>
              <Input value ={this.state.mobile}
                    onChangeText ={(mobile)=>this.setState({mobile})}/>
            </Item>
            <Item floatingLabel >
              <Label>Batch year</Label>
              <Input value ={this.state.batchyear} 
                     onChangeText ={(batch)=>this.setState({batch})}/>
            </Item>
            <Item floatingLabel >
              <Label>Name to be displayed on profile</Label>
              <Input value ={this.state.name} 
                      onChangeText ={(profilename)=>this.setState({profilename})}/>
            </Item>
           
            <Dropdown
                  label='Select Subscription type'
                  data={data}
                    />
            <View style={{flexDirection:'row',marginTop:10}}>
                        <CheckBox checked={true} />
                       <Text style={{paddingLeft:20,color:'blue'}}>Agree with terms and conditions</Text>
                       </View>
     <Button full color style={{marginTop:20,marginHorizontal:20,borderRadius:10}}
     
     onPress ={this.getData}>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>SUBMIT</Text>
          </Button>
         
          </Form>
        </Content>
     
          </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150,
    marginHorizontal:120,
    marginVertical:20
  },
});