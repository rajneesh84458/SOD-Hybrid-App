import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator,Image } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { List, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'react-native-axios';
class ChatScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      dataSource: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const formData = new FormData();
  formData.append('rule', 'get_associates');
  formData.append('is_admin', 1);
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
   // console.log(response.data);
  that.setState({dataSource:response.data.data})
   // console.log('hello',response.data.data)
  }).catch(function (error) {
    console.log(error);
    
  });

  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    console.log("hello")
    this.setState({
      value: text,
    });    

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.user_name.toUpperCase()} ${item.batch.toUpperCase()} ${item.address.toUpperCase()}`;
      const textData = text.toUpperCase();
       return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };
  _handlePress1 = () =>
  this.setState({
    expanded: !this.state.expanded,
    });
 
  //   componentDidMount(){
  //     return  this.makeRemoteRequest();
  // }
  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <ListItem
              //leftAvatar={{ source: { uri: item.picture.thumbnail } }}
              title={`${item.user_name} ${item.batch}`}
              subtitle={item.email}
            />
          )}
          keyExtractor={(item,id) => id.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default ChatScreen;