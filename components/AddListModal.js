import React from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput} from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import tempData from '../tempData';
import TodoColors from '../TodoColors';


export default class AddListModal extends React.Component{
    state ={
        name : "",
        color: TodoColors.blue
    };

    createTodo = () => {

        const {name,color} = this.state

        const list ={name,color}
        this.props.addList(list);

        this.setState({
            name: ""});
        this.props.closeModal();
    }
    render(){

        return(
            <KeyboardAvoidingView style ={styles.container} behavior ="padding">
                <TouchableOpacity style ={{position : "absolute", top: 64, right:32}} onPress ={this.props.closeModal}>
                    <AntDesign name = "close" size ={24} color ={Colors.black} />
                </TouchableOpacity>

                <View style ={{alignSelf: "stretch", narginHorizontal : 32}}>
                    <Text style ={styles.title}>Create Todo List</Text>

                    <TextInput style ={styles.input} placeholder ="List Name"  onChangeText={text => this.setState ({name: text})}/>

                    <TouchableOpacity style ={[styles.create, {backgroundColor: TodoColors.skyBlue}]} onPress ={this.createTodo}>
                        <Text style ={{color: Colors.white, fontWeight: "600"}}>Create</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}



const styles =StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: Colors.black,
        alignSelf: "center",
        marginBottom: 16
    },
    input:{
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.blue,
        borderRadius: 6,
        height:50,
        marginTop:8,
        paddingHorizontal: 16,
        fontSize: 18
    },
    create:{
        marginTop: 24,
        height: 50,
        borderRadius: 6,
        alignItems: "center",
        justifyContent:"center"
    }
});