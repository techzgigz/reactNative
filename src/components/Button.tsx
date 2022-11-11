import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Button = ({ lable, imguri, stylecontainer, lablestyle, onPress }) => {
    return (
        <TouchableOpacity style={[styles.container, stylecontainer]}
            onPress={onPress}
            activeOpacity={0.5}
        >
            {imguri ?
                <Image
                    source={imguri}
                    style={styles.logo}
                    resizeMode='contain'
                />
                : null}
            <Text style={[lablestyle]}>{lable}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logo: {
        height: 20,
        width: 20,
        marginRight: 15
    }
})