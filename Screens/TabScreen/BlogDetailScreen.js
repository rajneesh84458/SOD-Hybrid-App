import React, { Component } from 'react'
import { Text, View ,ScrollView,SafeAreaView,Image,TextInput} from 'react-native'
import {Header, Content, Item, Input ,Form,Label,CheckBox,Button,Icon,Textarea} from 'native-base';


export default class BlogDetailScreen extends Component {
   
    makeApiCall =()=>{
        if (this.props.getData()){
              alert("comment successfully")
        }
        else {
               console.log("no comment !!!!")
        }
        
    }
    
    render() {
        const { navigation } = this.props;  
        const title = navigation.getParam('title', 'no title');
        const post = navigation.getParam('post_by', 'no title');
        const timestamp = navigation.getParam('timestamp', 'no title');
        const description = navigation.getParam('description', 'no title');
        const blog_image = navigation.getParam('blog_image', 'no title');
        const comment = navigation.getParam('comment', 'no title');

        return (
            <SafeAreaView style ={{flex:1}}>
                <Header style ={{backgroundColor: '#0A79DF',}}>
                <Icon name='arrow-back'  style ={{color:'white',marginLeft:-100}}
                onPress={()=>this.props.navigation.navigate("Login")}/>
                  <Text style ={{fontSize:20,color:'white',marginLeft:50,fontWeight:'bold'}}>Blog Post Details</Text>
                </Header>
                <ScrollView>
                   
                <View style ={{width:'95%',height:150,justifyContent:'center',alignItems:'center'}}>
       
                      <Image
                        source={ {uri:blog_image}}
                        style={{ width: 250, height: 200}}
                        />  
                    </View>
         
        <View style ={{height:220,width:'95%',borderColor:'transparent',borderWidth:1,marginHorizontal:10,flexDirection:'row',justifyContent:'space-between',marginTop:50}}>

            <View style ={{width:130,height:200,borderWidth:1,borderColor:'transparent',paddingVertical:10}}>
               <Text style={{fontSize:17,fontWeight:'bold',paddingTop:15,left:10}}>Title</Text>
               <Text style={{fontSize:17,fontWeight:'bold',paddingTop:25,left:10,top:10}}>Posted by</Text>
               <Text style={{fontSize:17,fontWeight:'bold',paddingTop:15,left:10,top:10}}>Posted At</Text>
               <Text style={{fontSize:17,fontWeight:'bold',paddingTop:15,left:10,top:10}}>Description</Text>
            </View>
             
            <View style ={{width:230,height:200,borderWidth:1,borderColor:'transparent'}}>
            <Text style={{fontSize:16,paddingTop:15,left:10}}>:   {title}</Text>
               <Text style={{fontSize:16,paddingTop:25,left:10}}>:    {post}</Text>
               <Text style={{fontSize:16,paddingTop:20,left:10}}>:    {timestamp}</Text>
               <Text style={{fontSize:16,paddingTop:20,left:10}}>:    </Text>
           
            </View>
             
            </View>
            <ScrollView style ={{height:180,backgroundColor:'#EAF0F1',marginHorizontal:20,marginTop:20}}>
               <Text style={{fontSize:15,color:'red',padding:5}}>{description}</Text>
            </ScrollView>

            <Text style ={{fontSize:17,fontWeight:'bold',marginHorizontal:20,marginVertical:10}}>Comment :</Text>
            
            <Textarea  value ={comment}
            onChangeText ={(comment)=>this.setState({comment}, console.log('hello',comment))}
             maxLength={200} placeholder="Please Comment here" style={{fontSize:20,backgroundColor:'#EAF0F1',marginHorizontal:20,height:50}} />
    
                <View style ={{width:400,borderColor:'transparent',height:50,borderWidth:1,alignItems:'flex-end'}}>
                   
                <Button onPress ={this.makeApiCall}
                style={{width:70,justifyContent:'center',borderRadius:50}}>

            <Text style ={{color:'white'}}>SEND</Text>
          </Button>
         
</View>
<View style ={{width:380,borderColor:'blue',height:80,borderBottomWidth:1,marginHorizontal:20}}>
<Text style ={{padding:20}}>You will always remain with us Om Sir</Text>
<Text style ={{marginLeft:300}}>{post}</Text>
</View>

                </ScrollView>
            </SafeAreaView>
        )
    }
}
