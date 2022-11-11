import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WINDOW_WIDTH } from '../utils/style';


const ConnectionCard = ({Cardtype}) =>{
return(
            <View style={{ alignItems : 'center' , padding : 10 ,  margin : 8 ,  width : WINDOW_WIDTH /2 - 15  , borderWidth : 1 , borderRadius : 8 , borderColor : '#D1D5DB' }}>
                <Image style={{ width : 72 , height : 72 , borderRadius : 50 , marginBottom : 10  }} source={require('../assets/icons/girl-avatar.png')} />
                <Text style={{color : '#051F4E' , fontSize : 14 , fontWeight : 'bold'}} >Charlie Korsgaard</Text>
                <Text style={{ color : '#051F4E' , fontSize : 12   }} >Business Analyst at Indianic Infotech</Text>
                <Text style={{ color : '#77838F'}}>10 mutual contacts</Text>
                {
                    Cardtype === 'connections' && 
                <View style={{ flexDirection : 'row'}}>
                    <TouchableOpacity>
                    <Image style={{ width : 40 , height : 40  , margin : 5  }}   source={require('../assets/icons/AddIcon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image style={{ width : 40 , height : 40  , margin : 5  }}   source={require('../assets/icons/Approved.png')} />
                    </TouchableOpacity>
                </View>
                }
                { Cardtype === 'Requests' && 
                <View style={{ flexDirection : 'row'}}>
                    <TouchableOpacity>
                    <Image style={{ width : 40 , height : 40  , margin : 5  }}   source={require('../assets/icons/accept.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image style={{ width : 40 , height : 40  , margin : 5  }}   source={require('../assets/icons/reject.png')} />
                    </TouchableOpacity>
                </View>
                }
            </View>
            
)
}
export default ConnectionCard