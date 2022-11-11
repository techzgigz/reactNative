import React from 'react';

import {View, Text} from 'react-native';

const SignUpheader = ({screeNum, heading, widthBox}) => {
  return (
    <View>
      <View style={{flex: 1, padding: 15, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0F6BBF29',
              borderRadius: 50,
              height: 50,
              width: 50,
            }}>
            <Text
              style={{
                fontSize: 23,
                fontWeight: 'bold',
                color: '#0F6BBF',
              }}>
              {screeNum}
            </Text>
          </View>
        </View>
        <View style={{flex: 4}}>
          <Text
            style={{
              letterSpacing: 1,
              color: '#0F6BBF',
              fontSize: 13,
              fontWeight: 'bold',
            }}>
            STEP {screeNum}/3
          </Text>
          <Text style={{color: '#051F4E', fontSize: 23, fontWeight: 'bold'}}>
            {heading}
          </Text>
        </View>
      </View>
      <View
        style={{height: 6, backgroundColor: '#EFF0F6', position: 'relative'}}>
        <View
          style={{
            height: 6,
            backgroundColor: '#0F6BBF',
            position: 'absolute',
            top: 0,
            left: 0,
            width: widthBox,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
};

export default SignUpheader;
