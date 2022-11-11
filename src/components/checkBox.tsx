import React , {useState}  from "react";
import {View , Text, Image, Pressable } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import checkboxImg from '../assets/icons/checkBox.png';

const CheckBox = () =>{
    const [ checked , setChecked] = useState(false);
 return(
    <Pressable onPress={ () => setChecked(!checked)}>
        {checked ? <View style={{  width : 20 , height : 20 }}>
        <Image style={{ width : 20 , height : 20 }} source={checkboxImg} />
    </View> : <View style={{ borderWidth : 1 , borderColor : 'gray' , width : 20 , height : 20 }}>
    </View> }
    </Pressable>
 )
}
export default CheckBox ; 
