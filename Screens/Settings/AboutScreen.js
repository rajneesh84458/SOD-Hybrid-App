import React, { Component } from 'react'
import { Text, View ,SafeAreaView} from 'react-native'
import { Container, Header, Content, Item, Input ,Form,Label,CheckBox,Icon} from 'native-base';

export default class AboutScreen extends Component {
    render() {
        const {navigation} =this.props;
        return (
            <SafeAreaView style ={{flex:1}}>

            
            <Header style ={{backgroundColor: '#0A79DF',justifyContent:'space-around'}}>

                <Text style ={{fontSize:25,color:'white',marginRight:80,fontWeight:'bold'}}>About</Text>
                </Header>
                </SafeAreaView>
        )
    }
}
