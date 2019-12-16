import React, { Component } from 'react'
import { Text, View,FlatList ,ScrollView,SafeAreaView,Image,TouchableOpacity} from 'react-native'
import BlogDetailScreen from './TabScreen/BlogDetailScreen'
import axios from 'react-native-axios';

export default class HomeScreen extends Component {
    state ={
        dataSource:[],
       
       
        
    }
 getData =() =>{
       
          const formData =new FormData();
                formData.append('rule','get_blog_list_all');
                formData.append('user_id','' );
               
              


                const that =this;
 
                axios({
                    url: `https://shuddhairpurifier.com/mlacademy/api.php`,
                    method: 'POST',
                    data: formData,
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json'
                    }
                  }).then(function (response) {
                    response = JSON.parse(JSON.stringify(response).replace(/\s(?=\w+":)/g, ""));
                   // console.log(response.data.allblog);
                   
                    that.setState({dataSource:response.data.allblog})
                    //console.log('hello',response.data.allblog)
                  }).catch(function (error) {
                    console.log(error);
                    
                  });
                }
                
    componentDidMount(){
            this.getData();
    }

    renderItem = ({item}) =>{
         return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("BlogDetails",{
              title: item.title,
              post_by: item.post_by,
             timestamp:item.timestamp,
             description:item.description,
             blog_image:item.blog_image,
             comment:this.state.comment
            }
              )}>

            
               <View style ={{width:400,height:200,borderWidth:1,marginVertical:30,marginHorizontal:10,borderColor:'blue'}}>
                 
            <Image source ={{ uri: item.blog_image }} 
              style={{ width: 400, height: 200 ,justifyContent:'center'}}
            /> 
              <View style ={{width:400,height:60,backgroundColor:'blue'}}>
                 <Text style ={{color:'white',fontSize:15}}>{item.description}</Text>
                 <Text style ={{color:'white',fontSize:15}}>{item.post_by}</Text>
                 <Text style ={{marginLeft:230,color:'white',fontSize:15}}></Text>
                 
               
                </View>    
               </View>
               </TouchableOpacity>
         )
    }
    
    render() {
     
        return (
           <SafeAreaView style={{flex:1}}>
          <FlatList
           keyExtractor={(item,index) => index.toString()}
              data ={this.state.dataSource}
              renderItem={this.renderItem}/>


              
  <View style ={{position:'absolute',top:590,left:330}}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("Blog")}>
  <Image source ={require('../plus.png')}
        style={{width:40,height:40,overlayColor:'white'}} />    
</TouchableOpacity>

  </View>
        
           </SafeAreaView>
        )
    }
}
