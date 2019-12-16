import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SearchableDropDown from 'react-native-searchable-dropdown';
import Icon from '@expo/vector-icons/EvilIcons';

var items =[
             { id:1,name :'Rajneesh'},
             { id:2,name :'Rahul'},
             { id:3,name :'Ajay'},
             { id:4,name :'Chanchal'},
             { id:5,name :'Deepak'},
             { id:6,name :'hello'},
             { id:7,name :'bye'},
]

export default class App extends Component {
  state = {
    serverData: [],
    //Data Source for the SearchableDropdown
  };
  componentDidMount() {
    fetch('https://aboutreact.000webhostapp.com/demo/webservice/demosearchables.php')
      .then(response => response.json())
      .then(responseJson => {
        //Successful response from the API Call
        this.setState({
          serverData: [...this.state.serverData, ...responseJson.results],
          //adding the new data in Data Source of the SearchableDropdown
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style ={{flex:1,marginTop:20}}>
        <Text> Static dropdown Array</Text>
        
        <View style={{flexDirection:'row',width:'90%',marginHorizontal:20}}>
          <View style={{width:320}}>
        <SearchableDropDown
        
                    onTextChange ={text =>console.log(text)}

                    onItemSelect ={item =>alert(JSON.stringify(item))}
                    containerStyle ={{padding:5}}
                     textInputStyle ={{padding:12,borderWidth:1,borderColor:'blue'}}
                     itemStyle ={{ padding:10,marginTop:2,}}
                    itemTextStyle={{color:'blue'}}
                    itemContainerStyle={{maxHeight:'100%'}}
                    items={this.state.serverData}
                    defaultIndex = {2}
                    placeholder="Search anything you want!!"
                    resetValue={false}
                    onRemoveItem={(items,index)=>{items}}
                 
        />
        </View>
        <View style={{width:50,paddingTop:15,marginLeft:-50}}>
        <Icon name ="search" size ={30} color ="blue"/>
          </View>

</View>
      </View>
    )
  }
}