import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from 'axios';

const SignUp = ({navigation}) => {
    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    
    const handleSubmit = async () =>{
        if (name === '' || email === ''|| password=== ''){
            alert("Todos los campos son obligatorios");
            return;
        }
        await axios.post("http://192.168.1.7:8081/api/singin", {name,email,password});
        alert("Registro Exitoso");
    }

    return (
        <KeyboardAwareScrollView contentCotainerStyle={styles.container}>
        <View style={{marginVertical:100}}>
        <View style={styles.imageContainer}>
            <Image source={require("../assets/Logo-USM.png")} style={styles.imageStyles}/>
        </View>
        <View style={styles.container}>
            <Text style={styles.signupText}>Registrarse</Text>
            <View style={{ marginHorizontal: 24}}>
                <Text style={{fontSize: 16, color: '#8e93a1'}}>Nombre</Text>
                <TextInput style={styles.signupInput} value={name} onChangeText={text => 
                setName(text)} autoCapitalize="words" autoCorrect={false}/>
            </View>
            <View style={{ marginHorizontal: 24}}>
                <Text style={{fontSize: 16, color: '#8e93a1'}}>Correo</Text>
                <TextInput style={styles.signupInput} value={email} onChangeText={text => 
                setEmail(text)} autoCompleteType="email" keyboardType="email-address"/>
            </View>
            <View style={{ marginHorizontal: 24}}>
                <Text style={{fontSize: 16, color: '#8e93a1'}}>Contraseña</Text>
                <TextInput style={styles.signupInput} value={password} onChangeText={text => 
                setPassword(text)} secureTextEntry={true} autoCompleteType="password"/>
            </View>

            <TouchableOpacity onPress={handleSubmit} style={styles.buttomStyle}>
            <Text style={styles.buttomText}>Submit</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 12, textAlign: 'center'}}>
            ¿Ya te uniste? Iniciar sesión{""}
            <Text
            style={{ color: 'darkred', fontWeight: 'bold'}}
            onPress={()=> navigation.navigate("Inicio de Sesión")}> 
            Iniciar sesión   
            </Text>
            </Text>

            <Text style= {{ marginHorizontal: 24}}>{JSON.stringify({ name, email, password })}</Text>
        </View>
        </View>
        </KeyboardAwareScrollView>
    )  
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    signupText: {
        fontSize: 30,
        textAlign: 'center',
        },
    signupInput: {
            borderBottomWidth:0.5,
            height: 48,
            borderBottomColor: "#8e93a1",
            marginBottom: 30,
        },
    buttomStyle: {
        backgroundColor: "#0000cd",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        marginHorizontal: 15,
        borderRadius: 15,
        },
    buttomText: {
            fontSize: 20,
            textAlign: 'center',
            color: '#fff',
            textTransform: 'uppercase',
            fontWeight: 'bold',
        },
    imageContainer: {justifyContent: "center", alignItems:"center"},
    imageStyles: {width: 100, height: 100, marginVertical:20}
    })

export default SignUp