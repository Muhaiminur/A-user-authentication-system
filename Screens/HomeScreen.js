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
			<View style={styles.container}>
			<Text style={styles.welcome}>WELCOME TO THE LANDING PAGE</Text>
			<Button style={styles.button} onPress={() => this.props.navigation.navigate('LoginScreen')} title="LOGIN PAGE "/>
			<Button style={styles.button} onPress={() => this.props.navigation.navigate('RegistrationScreen')} title="REGISTRATION PAGE "/>
			</View>
			);
	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center'

	},
	welcome:{
		textAlign:'center',
		fontWeight:'700'
	},
	button:{
		marginBottom:10,
		paddingVertical:15
	}

});
export default HomeScreen;