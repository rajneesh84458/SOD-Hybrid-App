import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform,Text, View,SafeAreaView ,StatusBar,ScrollView,Image} from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import  {createStackNavigator} from 'react-navigation-stack';
// import {SplashScreen} from 'react-native-splash-screen'
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderScreen from './screens/OrderScreen';
import PackageScreen from './screens/PackageScreen';
import NewServices from './screens/NewServices';
import PaymentScreen from './screens/PaymentScreen';
import ReferScreen from './screens/ReferScreen';
import SupportScreen from './screens/SupportScreen';
import AboutScreen from './screens/AboutScreen';
import LogOutScreen from './screens/LogOutScreen';
import { Container, Header, Content } from 'native-base';
import OfferScreen from './screens/TabContainer/OfferScreen';
import PoolingScreen from './screens/TabContainer/PoolingScreen';
import FoodScreen from './screens/TabContainer/FoodScreen';
import FeedBackScreen from './screens/TabContainer/FeedBackScreen';
import TermScreen from './screens/TabContainer/TermScreen';
import CustomHeader from './screens/CustomHeader';
import Home from './screens/TabContainer/Home';
import UpcomingScreen from './screens/UpcomingScreen';
import HistoryScreen from './screens/HistoryScreen';

console.disableYellowBox = true;
export default class App extends Component {

  // componentDidMount(){
  // SplashScreen.hide()
  // }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <MyApp/>
      </SafeAreaView>
    )
  }
}

const MyTabs =createMaterialTopTabNavigator({
  Home:Home,
  Offer:OfferScreen,
  Pooling:PoolingScreen,
  Food:FoodScreen,
  FeedBack:FeedBackScreen,
  Terms:TermScreen
},
{
  tabBarPosition:'top',
  swipeEnabled:true,
  animationEnabled:true,
  tabBarOptions:{
          renderIndicator: () =>null ,
          scrollEnabled:true,
          activeTintColor:'#ffffff',
          inactiveTintColor:'black',
          style:{
               backgroundColor:'#25CCF7'
          },
          labelStyle:{
               alignItems:'flex-start',
               width:80
          },
          indicatorStyle:{
               borderBottomColor:'transparent',
               borderBottomWidth:0
          },
          
          tabStyle:{
              width:80
          }
  }
})

const MyStack =createStackNavigator({
   defaulthome:MyTabs
},
{  
  defaultNavigationOptions: ({navigation})=>{
    return{
      header:(   
        <View style={{height:80,backgroundColor:'#25CCF7',flexDirection:'row',elevation:0,PaddingTop:20,alignItems:'center'}}>
        <Icon name ="ios-menu" size ={30} color ="white" style={{marginLeft:10}}
        onPress ={()=>navigation.toggleDrawer()}/> 
            <Text style={{marginLeft:20,color:'white',fontSize:20,fontWeight:'bold',}}>Home</Text>
        </View>
        
),
      }
    }
    }

)
const MyTab1 =createMaterialTopTabNavigator({
  Upcoming:UpcomingScreen,
  History:HistoryScreen
},
{
  tabBarPosition:'top',
  swipeEnabled:true,
  animationEnabled:true,
  tabBarOptions:{
          renderIndicator: () =>null ,
          scrollEnabled:true,
          activeTintColor:'#ffffff',
          inactiveTintColor:'black',
          style:{
               backgroundColor:'#25CCF7',
               fontWeight:'bold'
          },
          
          indicatorStyle:{
               borderBottomColor:'transparent',
               borderBottomWidth:0
          },
        }
      }
)

const MyStack1 =createStackNavigator({
   defaulhome:MyTab1
},
{  
  defaultNavigationOptions: {
   header:(
             <CustomHeader name ="Order"/>
   ),
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  }

  })


const CustomContentDrawerComponent =(props) =>  (

  <Container>
      <ScrollView>
        <Header style={{height:200,backgroundColor:'white',flexDirection:'column'}}>
              <View style={{flexDirection:'row',borderWidth:1,borderColor:'transparent'}}>
               <Image source ={require('./man.png')} style={{width:70,height:70,borderRadius:100,paddingTop:10}}/>
                 <View style={{flexDirection:'column',marginLeft:10}}>
                      <Text style={{paddingLeft:10,paddingTop:20}}>Rajneesh kumar</Text>
                      <Text style={{paddingLeft:10,paddingTop:20}}>9808767675</Text>
                </View>
                </View>

            <View style={{borderWidth:1,borderColor:'transparent',marginTop:15,padding:15}}>
              <Text>Total Services :</Text>
              <Text>Remaining Services :</Text>
              <Text>Days Remaining :</Text>
              </View>    
        </Header>

        <View style={{width:'100%',height:0.5,}}></View>
         <Content style={{backgroundColor:'white'}}>
            <DrawerItems {...props}/>
         </Content>
      </ScrollView>
  </Container>
)
const MyDrawer =createDrawerNavigator({
  Home:MyStack,
  Profile:ProfileScreen,
  Order:OrderScreen,
  Package:PackageScreen,
  NewServices:NewServices,
  Payment:PaymentScreen,
  ReferEarn:ReferScreen,
  Support:SupportScreen,
  About:AboutScreen,
  LogOut:LogOutScreen
},{
  
    initialRouteName:'Home',
    drawerPosition:'left',
    contentComponent:CustomContentDrawerComponent,
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerToggleRoute:'DrawerToggle'
 
})

const MyApp =createAppContainer(MyDrawer)
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

