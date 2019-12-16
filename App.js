import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Button,Platform,Text, View,SafeAreaView ,StatusBar,ScrollView,Image,TouchableOpacity,Dimensions,StyleSheet,AppRegistry,Alert} from 'react-native'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import { Container, Header, Content } from 'native-base';
import {createAppContainer,createSwitchNavigator}from 'react-navigation'
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import GeneralInfoScreen from './Screens/TabScreen/GeneralInfoScreen';
import AluminiScreen from './Screens/TabScreen/AluminiScreen';
import AssociationScreen from './Screens/TabScreen/AssociationScreen';
const activeTintLabelColor = 'blue';
const inactiveTintLabelColor = 'black';
const DEVICE_WIDTH = Dimensions.get('window').width;
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import DirectoryScreen from './Screens/DirectoryScreen';
import BuySubscription from './Screens/BuySubscription';
import ChatScreen from './Screens/ChatScreen';
import AnnoucementScreen from './Screens/AnnoucementScreen';
import SchlorshipScreen from './Screens/SchlorshipScreen';
import GalleryScreen from './Screens/GalleryScreen';
import GoverningScreen from './Screens/GoverningScreen';
import SuggestionScreen from './Screens/SuggestionScreen';
import SettingScreen from './Screens/SettingScreen';
import SignOutScreen from './Screens/SignOutScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/AuthScreens/LoginScreen';
import RegisterScreen from './Screens/AuthScreens/RegisterScreen';
import BlogScreen from './Screens/BlogScreen';
import AdminProfileScreen from './Screens/AuthScreens/AdminProfileScreen';
import Alumini from './Screens/DirectoryTabs/Alumini';
import Association from './Screens/DirectoryTabs/Association';
import ChangePassword from './Screens/Settings/ChangePassword';
import EditProfile from './Screens/Settings/EditProfile';
import AboutScreen from './Screens/Settings/AboutScreen';
import CertificateScreen from './Screens/AboutTabs/CertificateScreen';
import MOAScreen from './Screens/AboutTabs/MOAScreen';
import RulesScreen from './Screens/AboutTabs/RulesScreen';
import NotablesScreen from './Screens/AboutTabs/NotablesScreen';
import BlogDetailScreen from './Screens/TabScreen/BlogDetailScreen';

export default class App extends Component {

  render() {
    return (
     <SafeAreaView style={{flex:1}}>
       
        <MyApp/>
        </SafeAreaView>
    )
  }
}

const AboutTabs=createMaterialTopTabNavigator({
  Certificate:CertificateScreen,
  MOA:MOAScreen,
  Rules:RulesScreen,
  Notables:NotablesScreen
}, {
  tabBarOptions:{
        renderIndicator: () =>null ,
        scrollEnabled:true,
        activeTintColor:"white",
        inactiveTintColor: "black",
        style:{
             backgroundColor:"#0A79DF"
        },
        
        tabStyle:{
            width:120
        }
}
}
)
const AboutStack =createStackNavigator({
  defaultHome:AboutTabs

},
{  defaultNavigationOptions: ({navigation})=> {
  return {
      headerStyle: {
        backgroundColor: '#0A79DF',
      },headerLeft: () => (
         <View style={{flexDirection:'row',paddingHorizontal:20,paddingBottom:20}}>
         <TouchableOpacity onPress ={()=>this.props.navigation.navigate('Home')} >
         {/* <Ionicons name ="ios-arrow-round-back" size={32} color ="white" style={{bottom:5}}/> */}
      
         </TouchableOpacity>
         <Text style={{marginLeft:20,fontSize:20,fontWeight:'bold',color:'white'}}>About</Text>
         </View>
      ),
 } }},
)
const SettingStack =createSwitchNavigator({
   Setting:SettingScreen,
   d:ChangePassword,
   EditProfile:EditProfile,
   About: AboutStack
  })



const MyTabs =createMaterialTopTabNavigator({
  GeneralInfromation: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 15, color: activeTintLabelColor  }}>GENERAL INFORMATION </Text>,
     
    }
  },
  AluminiMember: {
    screen: AluminiScreen,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 15, color: activeTintLabelColor  }}> ALUMINI MEMBER </Text>,
      
    }
  },
  AssociationMember: {
    screen: AssociationScreen,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 15, color: activeTintLabelColor  }}>ASSOCIATION MEMBER </Text>,
      },
      tabBarOptions:{
        activeTintColor: "blue",
        inactiveTintColor: "black",
      }
  },
},
{
    tabBarOptions:{
          renderIndicator: () =>null ,
          scrollEnabled:true,
          activeTintColor: "blue",
          inactiveTintColor: "black",
          style:{
               backgroundColor:'white'
          },
          
          tabStyle:{
              width:193
          }
  }
}
  )
  

  const DirectoryTabs =createMaterialTopTabNavigator({
    Association: {
      screen: Association,
     
    },
    Alumini: {
      screen: Alumini,
      
    },
      
      
  },
  {
    tabBarOptions:{
          renderIndicator: () =>null ,
          scrollEnabled:true,
          activeTintColor:"#0A79DF",
          inactiveTintColor: "black",
          style:{
               backgroundColor:'white'
          },
          
          tabStyle:{
              width:193
          }
  }
})



const MyStack1 =createStackNavigator({
  defaultHome:MyTabs
},{
  defaultNavigationOptions: ({navigation})=> {
  return {
      headerStyle: {
        backgroundColor: '#0A79DF',
      },headerLeft: () => (
         <View style={{flexDirection:'row',paddingHorizontal:20,paddingBottom:20}}>
         <TouchableOpacity onPress ={()=>navigation.toggleDrawer()} >
         <Ionicons name ="ios-menu" size={32} color ="white" style={{bottom:5}}/>
      
         </TouchableOpacity>
         <Text style={{marginLeft:20,fontSize:20,fontWeight:'bold',color:'white'}}>Home</Text>
         </View>
      ),
    }},
})
const MyStack2 =createStackNavigator({
  defaultHome:DirectoryTabs
},
{
  defaultNavigationOptions: ({navigation})=> {
  return {
      headerStyle: {
        backgroundColor: '#0A79DF',
      },headerLeft: () => (
         <View style={{flexDirection:'row',paddingHorizontal:20,paddingBottom:20}}>
         <TouchableOpacity onPress ={()=>navigation.toggleDrawer()} >
         <Ionicons name ="ios-menu" size={32} color ="white" style={{bottom:5}}/>
      
         </TouchableOpacity>
         <Text style={{marginLeft:20,fontSize:20,fontWeight:'bold',color:'white'}}>Description</Text>
         </View>
      ),
    }},
}
)
const MyStack3 =createStackNavigator({
  defaultHome:BuySubscription
},
{
  defaultNavigationOptions: ({navigation})=> {
  return {
      headerStyle: {
        backgroundColor: '#0A79DF',
      },headerLeft: () => (
         <View style={{flexDirection:'row',paddingHorizontal:20,paddingBottom:20}}>
         <TouchableOpacity onPress ={()=>navigation.toggleDrawer()} >
         <Ionicons name ="ios-menu" size={32} color ="white" style={{bottom:5}}/>
        </TouchableOpacity>
         <Text style={{marginLeft:20,fontSize:20,fontWeight:'bold',color:'white'}}>Contribution</Text>
         </View>
      ),
    }},
})
const MyStack4 =createStackNavigator({
  defaultHome:ChatScreen
},
{
  defaultNavigationOptions: ({navigation})=> {
  return {
      headerStyle: {
        backgroundColor: '#0A79DF',
      },headerLeft: () => (
         <View style={{flexDirection:'row',paddingHorizontal:20,paddingBottom:20}}>
         <TouchableOpacity onPress ={()=>navigation.toggleDrawer()} >
         <Ionicons name ="ios-menu" size={32} color ="white" style={{bottom:5}}/>
      </TouchableOpacity>
         <Text style={{marginLeft:20,fontSize:20,fontWeight:'bold',color:'white'}}>ML Academians</Text>
         </View>
      ),
    }},
})
const MyStack5 =createStackNavigator({
  defaultHome:AnnoucementScreen
},{
  defaultNavigationOptions: ({navigation})=> {
  return {
      headerStyle: {
        backgroundColor: '#0A79DF',
      },headerLeft: () => (
         <View style={{flexDirection:'row',paddingHorizontal:20,paddingBottom:20}}>
         <TouchableOpacity onPress ={()=>navigation.toggleDrawer()} >
         <Ionicons name ="ios-menu" size={32} color ="white" style={{bottom:5}}/>
    </TouchableOpacity>
         <Text style={{marginLeft:20,fontSize:20,fontWeight:'bold',color:'white'}}>Annoucement</Text>
         </View>
      ),
    }},
})
const MyStack6 =createStackNavigator({
  defaultHome:SchlorshipScreen
},{
  defaultNavigationOptions: ({navigation})=> {
  return {
      headerStyle: {
        backgroundColor: '#0A79DF',
      },headerLeft: () => (
         <View style={{flexDirection:'row',paddingHorizontal:20,paddingBottom:20}}>
         <TouchableOpacity onPress ={()=>navigation.toggleDrawer()} >
         <Ionicons name ="ios-menu" size={32} color ="white" style={{bottom:5}}/>
      
         </TouchableOpacity>
         <Text style={{marginLeft:20,fontSize:20,fontWeight:'bold',color:'white'}}>Apply for Scholarship</Text>
         </View>
      ),
    }},
})
const MyStack7 =createStackNavigator({
  defaultHome:GalleryScreen
},{
  defaultNavigationOptions: ({navigation})=> {
  return {
      headerStyle: {
        backgroundColor: '#0A79DF',
      },headerLeft: () => (
         <View style={{flexDirection:'row',paddingHorizontal:20,paddingBottom:20}}>
         <TouchableOpacity onPress ={()=>navigation.toggleDrawer()} >
         <Ionicons name ="ios-menu" size={32} color ="white" style={{bottom:5}}/>
      
         </TouchableOpacity>
         <Text style={{marginLeft:20,fontSize:20,fontWeight:'bold',color:'white'}}>Gallery</Text>
         </View>
      ),
    }},
})
const MyStack8 =createStackNavigator({
  defaultHome:GoverningScreen
},{
  defaultNavigationOptions: ({navigation})=> {
  return {
      headerStyle: {
        backgroundColor: '#0A79DF',
      },headerLeft: () => (
         <View style={{flexDirection:'row',paddingHorizontal:20,paddingBottom:20}}>
         <TouchableOpacity onPress ={()=>navigation.toggleDrawer()} >
         <Ionicons name ="ios-menu" size={32} color ="white" style={{bottom:5}}/>
      
         </TouchableOpacity>
         <Text style={{marginLeft:20,fontSize:20,fontWeight:'bold',color:'white'}}>Governing Body</Text>
         </View>
      ),
    }},
})
const MyStack9 =createStackNavigator({
  defaultHome:SuggestionScreen
},{
  defaultNavigationOptions: ({navigation})=> {
  return {
      headerStyle: {
        backgroundColor: '#0A79DF',
      },headerLeft: () => (
         <View style={{flexDirection:'row',paddingHorizontal:20,paddingBottom:20}}>
         <TouchableOpacity onPress ={()=>navigation.toggleDrawer()} >
         <Ionicons name ="ios-menu" size={32} color ="white" style={{bottom:5}}/>
      
         </TouchableOpacity>
         <Text style={{marginLeft:20,fontSize:20,fontWeight:'bold',color:'white'}}>Suggestion</Text>
         </View>
      ),
    }},
})
const MyStack10 =createStackNavigator({
  defaultHome:SettingStack
},{
  defaultNavigationOptions: ({navigation})=> {
  return {
      headerStyle: {
        backgroundColor: '#0A79DF',
      },headerLeft: () => (
         <View style={{flexDirection:'row',paddingHorizontal:20,paddingBottom:20}}>
         <TouchableOpacity onPress ={()=>navigation.toggleDrawer()} >
         <Ionicons name ="ios-menu" size={32} color ="white" style={{bottom:5}}/>
      
         </TouchableOpacity>
         <Text style={{marginLeft:20,fontSize:20,fontWeight:'bold',color:'white'}}>Settings</Text>
         </View>
      ),
    }},
})


// Drawer Navigator

const CustomContentDrawerComponent =(props) =>  (

  <Container style={{flex:1}}>
      <ScrollView style={{flex:1}}>

    <LinearGradient colors={['#0A79DF', 'white']} style={styles.linearGradient}>
    
      <View style={{width:DEVICE_WIDTH,height:200,marginVertical:10}}>
        <TouchableOpacity style={{width:300,height:30,borderWidth:1,borderColor:'transparent',alignItems:'flex-end'}} onPress ={()=>alert("Edit")}>
        <MaterialIcons name ="edit" size={30} color ="white" />
        </TouchableOpacity>
        <View style={{width:300,height:180,borderWidth:1,borderColor:'transparent',marginTop:10,justifyContent:'center',alignItems:'center'}}>
           <TouchableOpacity style={{width:100,height:100,borderColor:'white',borderRadius:100,justifyContent:'center',alignItems:'center'}}>
           <Image source ={require('./user.png')} style={{width:100,height:100,borderRadius:100}}/>
           </TouchableOpacity> 
           <View style={{padding:20,justifyContent:'center',alignItems:'center'}}>
        <Text style ={{color:'white'}}>Rajneesh</Text>
        <Text style ={{color:'white'}}>rajneesh@gmail.com</Text>
        <Text style ={{color:'white'}}>Noida</Text>
        </View>
        </View>
      </View>
        
        <View style={{width:'100%',height:0.5,borderColor:'white',borderWidth:0.5}}></View>

         <Content style={{width:'100%',marginVertical:30}}>
            <DrawerItems {...props}/>
            <TouchableOpacity onPress={()=>Alert.alert('Log out', 'Do you want to logout?',
                [
                  {text: 'Cancel', onPress: () => {return null}},
                  {text: 'Confirm', onPress: () => {
                    // AsyncStorage.clear();
                    props.navigation.navigate('Login')
                  }},
                ],
                { cancelable: false }
              )  
            }>  
            <View style ={{flexDirection:'row',padding:15}}>
           <Image source ={require('./Screens/images/exit.png')} style={{width:30,height:30,overlayColor:'white'}} />
              <Text style={{fontSize:17,color: "black",paddingLeft:25}}>Logout</Text>
              </View>
           
              </TouchableOpacity>
         </Content>
        
      {/* </ScrollView> */}
      </LinearGradient>
      </ScrollView>
  </Container>
  
)
const MyDrawer =createDrawerNavigator({
  Screen1: {
    screen: MyStack1,
    navigationOptions: {
      drawerLabel: 'Home',
      fontSize:20,
      drawerIcon:( <AntDesign name="home" size={30} color="black" />)
    },
  },

  Screen2: {
    //Title
    screen:MyStack2 ,
    navigationOptions: {
      drawerLabel: 'Directory',
      drawerIcon:(
          <Foundation name="book-bookmark" size={30} color="black" />
      )
    },
  },
  Screen3: {
    //Title
    screen: MyStack3,
    navigationOptions: {
      drawerLabel: 'Buy Subscription',
      drawerIcon:(
        <Image source ={require('./Screens/images/buy.png')} style={{width:30,height:30,overlayColor:'white'}} />
      )
    },
  },
  Screen4: {
    //Title
    screen: MyStack4,
    navigationOptions: {
      drawerLabel: 'Chat',
      drawerIcon:(
        <Image source ={require('./Screens/images/chat.png')} style={{width:30,height:30,overlayColor:'white'}} />
     
      )
    },
  },
  Screen5: {
    //Title
    screen: MyStack5,
    navigationOptions: {
      drawerLabel: 'Annoucement',
      drawerIcon:(
        <Image source ={require('./Screens/images/speaker.png')} style={{width:30,height:30,overlayColor:'white'}} />
     
      )
    },
  },
  Screen6: {
    //Title
    screen: MyStack6,
    navigationOptions: {
      drawerLabel: 'Apply for Scholarship',
      drawerIcon:(
        <Image source ={require('./Screens/images/degree.png')} style={{width:30,height:30,overlayColor:'white'}} />
     
      )
    },
  },
  Screen7: {
    //Title
    screen: MyStack7,
    navigationOptions: {
      drawerLabel: 'Gallery',
      drawerIcon:(
        <Image source ={require('./Screens/images/camera.png')} style={{width:30,height:30,overlayColor:'white'}} />
      )
    },
  },
  Screen8: {
    //Title
    screen: MyStack8,
    navigationOptions: {
      drawerLabel: 'Governing Body',
      drawerIcon:(
        <Image source ={require('./Screens/images/avatar.png')} style={{width:30,height:30,overlayColor:'white'}} />
     
      )
    },
  },
  Screen9: {
    //Title
    screen: MyStack9,
    navigationOptions: {
      drawerLabel: 'Suggestion',
      drawerIcon:(
        <Image source ={require('./Screens/images/journal.png')} style={{width:30,height:30,overlayColor:'white'}} />
        )
    },
  },
  Screen10: {
    //Title
    screen: SettingStack,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon:(
        <Image source ={require('./Screens/images/development.png')} style={{width:30,height:30,overlayColor:'white'}} />
     
      )
    },
  },
},
{
  
  initialRouteName:'Screen1',
  drawerPosition:'left',
  contentComponent:CustomContentDrawerComponent,
  drawerOpenRoute:'DrawerOpen',
  drawerCloseRoute:'DrawerClose',
  drawerToggleRoute:'DrawerToggle',
  drawerWidth: DEVICE_WIDTH - 80,

})

const AuthStack =createSwitchNavigator({
 
  Login:LoginScreen,
  Register:RegisterScreen,
  Home:MyDrawer,
  Blog:BlogScreen,
  AdminProfile:AdminProfileScreen,
  BlogDetails:BlogDetailScreen


})

const MyApp = createAppContainer(AuthStack);
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  });

  //AppRegistry.registerComponent('App', () => App)