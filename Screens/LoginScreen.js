import React,{Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
class LoginScreen extends Component{
	render(){
		return (
			<View>
			<Text>This is the Login PAge</Text>
			<Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="HOME PAGE "/>
			
			</View>
			);
	}
}
export default LoginScreen;