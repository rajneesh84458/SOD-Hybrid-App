import React, { Component } from 'react'
import { View,Text,Image,SafeAreaView,FlatList,TouchableOpacity } from 'react-native';
// import AssociationScreen from '../TabScreen/AssociationScreen'
import axios from 'react-native-axios';
import { thisTypeAnnotation } from '@babel/types';
export default class GoverningScreen extends Component {
    state = {
        expanded: false,
        dataSource:[]
    }
      
    
      _handlePress = () =>
        this.setState({
          expanded: !this.state.expanded
        });
    
       
          
      getData = async() =>{
       const formData =new FormData;
         formData.append('rule','get_admins')
         formData.append('is_admin',1)
          const that =this;
       axios({
             url :`https://shuddhairpurifier.com/mlacademy/api.php`,
             method:'POST',
             data:formData,
             headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
       })
         .then(function(response){
              console.log(response)
              that.setState({dataSource:response.data.data})
         })
         .catch(function (error) {
          console.log(error)
        });
      }

      componentDidMount(){
        this.getData()
      }
      renderItem = ({item}) =>{
        return(
          <View style={{flex:1,width:400,borderColor:'blue',borderWidth:1,borderRadius:20,marginVertical:7,margin:5}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("AdminProfile")}>
      <View style ={{flexDirection:'row',borderWidth:1,width:350,margin:5,borderColor:'transparent'}}>
      <Image 
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
          }}
          style={{ width:50,  height: 50,marginTop:10 ,borderWidth:1,borderColor:'transparent'}}/> 
          <Text style={{fontSize:20,color:'grey',margin:20}}>{item.user_name}</Text>
        </View>
    </TouchableOpacity> 
    </View>
        )
    }
      render() {
        return (
          <SafeAreaView style={{flex:1}}>
            
             <FlatList
               keyExtractor={(item,id) => id.toString()}
                  data ={this.state.dataSource}
                  renderItem={this.renderItem}/>
          </SafeAreaView>
        )
    }
}
