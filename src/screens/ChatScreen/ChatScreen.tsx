import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { logOut } from '../../api/api'

const ChatScreen = () => {
  const onPress = async () => {
    const data = await logOut()
    if (data) {
      // navigation.navigate("Signin")
      Alert.alert('Succesfully logout')
    } else {
      Alert.alert('Somthing went wrong')
    }
  }
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text>ChatScreen</Text>
    </TouchableOpacity>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})