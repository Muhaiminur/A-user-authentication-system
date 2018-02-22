import React,{Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
class RegistrationScreen extends Component{
	render(){
		return (
			<View>
			<Text>This is the REGISTRATION Screen</Text>
			<Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="HOME PAGE "/>
			
			</View>
			);
	}
}
export default RegistrationScreen;