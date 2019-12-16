import React, { Component } from 'react'
import { Text, View,SafeAreaView } from 'react-native'
import AluminiScreen from '../TabScreen/AluminiScreen'

export default class Alumini extends Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                    <AluminiScreen/>
            </SafeAreaView>
        )
    }
}
