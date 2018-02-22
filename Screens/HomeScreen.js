import React,{Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
class HomeScreen extends Component{
	render(){
		return (
			<View>
			<Text>This is the Home Screen</Text>
			<Button onPress={() => this.props.navigation.navigate('LoginScreen')} title="LOGIN PAGE "/>
			<Button onPress={() => this.props.navigation.navigate('RegistrationScreen')} title="REGISTRATION PAGE "/>
			</View>
			);
	}
}
export default HomeScreen;