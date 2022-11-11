import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const PersonalDetails = () => {
  return (
    <ScrollView>
      <View style={{backgroundColor: 'white', padding: 15, flex: 1}}>
        <Text
          style={{
            marginTop: 5,
            color: '#051F4E',
            fontSize: 16,
          }}>
          Name *
        </Text>
        <TextInput
          placeholder="Enter name"
          style={{
            fontSize: 14,
            height: 50,
            marginTop: 8,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#D1D5DB',
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            color: '#051F4E',
            fontSize: 16,
          }}>
          Surname *
        </Text>
        <TextInput
          placeholder="Enter surname"
          style={{
            fontSize: 14,
            height: 50,
            marginTop: 8,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#D1D5DB',
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            color: '#051F4E',
            fontSize: 16,
          }}>
          Email *
        </Text>
        <TextInput
          placeholder="Enter email"
          style={{
            fontSize: 14,
            height: 50,
            marginTop: 8,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#D1D5DB',
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            color: '#051F4E',
            fontSize: 16,
          }}>
          Alternative Email *
        </Text>
        <TextInput
          placeholder="Enter alternative email"
          style={{
            fontSize: 14,
            height: 50,
            marginTop: 8,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#D1D5DB',
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        />
         <Text
          style={{
            marginTop: 10,
            color: '#051F4E',
            fontSize: 16,
          }}>
          Mobile Number
        </Text>
        <TextInput
          placeholder="Enter mobile number"
          style={{
            fontSize: 14,
            height: 50,
            marginTop: 8,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#D1D5DB',
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        />
         <Text
          style={{
            marginTop: 10,
            color: '#051F4E',
            fontSize: 16,
          }}>
          Alternative Mobile Number
        </Text>
        <TextInput
          placeholder="Enter alternative mobile"
          style={{
            fontSize: 14,
            height: 50,
            marginTop: 8,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#D1D5DB',
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        />

        <Text
          style={{
            marginTop: 10,
            color: '#051F4E',
            fontSize: 16,
          }}>
          Country *
        </Text>
        <View
          style={{
            borderColor: '#D1D5DB',
            height: 50,
            borderRadius: 8,
            borderWidth: 1,
            marginTop: 10,
          }}>
          <Picker placeholder="Select">
            <Picker.Item label="choose" />
            <Picker.Item label="Student" value="student" />
            <Picker.Item label="Admin" value="Admin" />
            <Picker.Item label="Teacher" value="teacher" />
          </Picker>
        </View>
        <Text
          style={{
            marginTop: 10,
            color: '#051F4E',
            fontSize: 16,
          }}>
          Privince/State *
        </Text>
        <View
          style={{
            borderColor: '#D1D5DB',
            height: 50,
            borderRadius: 8,
            borderWidth: 1,
            marginTop: 10,
          }}>
          <Picker placeholder="Select">
            <Picker.Item label="choose" />
            <Picker.Item label="Student" value="student" />
            <Picker.Item label="Admin" value="Admin" />
            <Picker.Item label="Teacher" value="teacher" />
          </Picker>
        </View>
        <Text
          style={{
            marginTop: 10,
            color: '#051F4E',
            fontSize: 16,
          }}>
          City *
        </Text>
        <View
          style={{
            borderColor: '#D1D5DB',
            height: 50,
            borderRadius: 8,
            borderWidth: 1,
            marginTop: 10,
          }}>
          <Picker placeholder="Select">
            <Picker.Item label="choose" />
            <Picker.Item label="Student" value="student" />
            <Picker.Item label="Admin" value="Admin" />
            <Picker.Item label="Teacher" value="teacher" />
          </Picker>
        </View>
        <Text
          style={{
            marginTop: 10,
            color: '#051F4E',
            fontSize: 16,
          }}>
          Website Url *
        </Text>
        <TextInput
          placeholder="Enter website url"
          style={{
            fontSize: 14,
            height: 50,
            marginTop: 8,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#D1D5DB',
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            color: '#051F4E',
            fontSize: 16,
          }}>
          Overview *
        </Text>
        <TextInput
          placeholder="Enter overview here"
          multiline={true}
          numberOfLines={6}
          style={{
            fontSize: 14,
            marginTop: 8,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#D1D5DB',
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            color: '#051F4E',
            fontSize: 16,
          }}>
          Full Description
        </Text>
        <TextInput
          placeholder="Enter full description"
          multiline={true}
          numberOfLines={6}
          style={{
            fontSize: 14,
            marginTop: 8,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#D1D5DB',
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        />
        <View
          style={{
            marginVertical: 20,
            backgroundColor: '#0F6BBF',
            borderRadius: 50,
            height: 49,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Next
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default PersonalDetails;
