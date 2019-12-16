import React, { Component } from 'react'
import { Text, View ,SafeAreaView,FlatList,Image,TouchableOpacity} from 'react-native'
import axios from 'react-native-axios';
export default class GalleryScreen extends Component {

     state ={
         photos:''
     }

    getData = async()=>{

        const formData = new FormData();
        formData.append('rule', 'gallery');
       // formData.append('is_admin', 1);
        const that = this;
        axios({
          url: `https://shuddhairpurifier.com/mlacademy/api.php`,
          method: 'POST',
          data: formData,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          console.log(response.data);
          that.setState({photos:response.data.data})
          //console.log('hello',response.data.data)
        }).catch(function (error) {
          console.log(error);
          
        });
      }
      componentDidMount(){
          this.getData()
      }

      renderItem =({item}) =>{
        return(
            
                <Image
              source={ {uri:item.image }}
              style={{ width: 200, height: 200 ,justifyContent:'center'}}
            />
       
         
          )
      }
      space(){
        return(<View style={{height: 20,}}/>)
    }
    render() {
        return (
            <SafeAreaView style ={{flex:1}}>
              <FlatList
                         ItemSeparatorComponent={this.space}
                         keyExtractor ={(item,index)=>index.toString()}
                        data ={this.state.photos}
                        renderItem ={this.renderItem}
              />


            </SafeAreaView>
        )
    }
}
