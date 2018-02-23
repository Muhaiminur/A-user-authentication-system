import React,{Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import LoginForm from './LoginForm';
class LoginScreen extends Component{
	render(){
		return (
			<View style={styles.container}>
			<Text style={styles.welcome}>WELCOME TO THE LOGIN PAGE</Text>
			<Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="HOME PAGE "/>
			<View style={styles.formContainer}>
				<LoginForm/>
			</View>
			</View>
			);
	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#3498db'

	},
	welcome:{
		textAlign:'center',
		color:'#FFF',
		fontWeight:'700'
	}
});
export default LoginScreen;