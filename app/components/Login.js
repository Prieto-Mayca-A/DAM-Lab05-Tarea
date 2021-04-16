
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

export default class LoginView extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./images.png")} />
        <Text></Text> 
        <View style={styles.inputContainer}>  
        <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://definicion.de/wp-content/uploads/2019/06/perfildeusuario.jpg'}}/>
          <TextInput style={styles.inputs}
              placeholder="Usuariol"
              underlineColorAndroid='transparent'/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://cdn.icon-icons.com/icons2/2387/PNG/512/public_padlock_unlock_person_people_icon_144648.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Contraseña"
              underlineColorAndroid='transparent'/>
        </View>
     
        <TouchableOpacity style={styles.restoreButtonContainer}>
            <Text>Se olvido su contraseña?</Text>
            <Text></Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText} onPress={ () => this.props.navigation.navigate('Lista')} >Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainerFacebook, styles.loginButtonFacebook]}>
        <Text style={styles.loginText}>Login con facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainerGoogle, styles.loginButtonGoogle]}>
          <Text style={styles.loginTextGoogle}>Login con google</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DC2323',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#1C1C1C',
  },

  buttonContainerFacebook: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButtonFacebook: {
    backgroundColor: '#2F44C8',
  },

  buttonContainerGoogle: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButtonGoogle: {
    backgroundColor: '#FFFFFF',
  },

  loginText: {
    color: 'white',
  },
  loginTextGoogle: {
    color: 'black',
  },
  socialIcon:{
    color: "#FFFFFF",
    marginRight:5
  }
});
