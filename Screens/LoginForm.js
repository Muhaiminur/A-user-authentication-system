import React,{Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';
class LoginForm extends Component{
	render(){
		return (
			<View style={styles.container}>
			<TextInput
			placeholder="USERNAME OR EMAIL"
			style={styles.input}
			/>
			<TextInput 
			placeholder="PASSWORD"
			secureTextEntry
			style={styles.input}
			/>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={styles.buttonText}>LOGIN</Text>
			</TouchableOpacity>
			</View>
			);
	}
}
const styles = StyleSheet.create({
	container:{
		// flex:1,
		// backgroundColor:'#3498db'
		padding : 20

	},
	input:{
		height: 40,
		backgroundColor : 'rgba(255,255,255,0.2)',
		marginBottom:10,
		color:'#FFF',
		paddingHorizontal:10
	},
	buttonContainer:{
		backgroundColor : '#2980b9',
		paddingVertical:15
	},
	buttonText:{
		textAlign:'center',
		color:'#FFF',
		fontWeight:'700'
	}
	
});
export default LoginForm;