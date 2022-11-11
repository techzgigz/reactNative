import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
} from 'react-native';
// import {Picker} from '@react-native-picker/picker';
import SignUpheader from '../../components/SignupHeader/Signupheader';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import uploadImg from '../../assets/icons/upload.png';
import style from '../../../storybook/stories/Button/style';
import {savePersonDetails} from '../../redux/features/AuthSlice';
import {useDispatch, useSelector} from 'react-redux';
import { Dropdown } from 'react-native-element-dropdown';
const data = [
  { label: 'Item 1', value: 'Testing 1' },
  { label: 'Item 2', value: 'Testing 2' },
  { label: 'Item 3', value: 'Testing 3' },
  { label: 'Item 4', value: 'Testing 4' },
  { label: 'Item 5', value: 'Testing 5' },
  { label: 'Item 6', value: 'Testing 6' },
  { label: 'Item 7', value: 'Testing 7' },
  { label: 'Item 8', value: 'Testing 8' },
];

const COUNTRY = [
  { label: 'Afghanistan', value: 'Afghanistan' },
  { label: 'land Islands', value: 'land Islands' },
  { label: 'American', value: 'American' },
  { label: 'Antarctica', value: 'Antarctica' },
  { label: 'Mexico', value: 'Mexico' },
];
const STATES = [
  { label: 'State Name', value: 'Mumbai' },
  { label: 'State Name', value: 'Mumbai' },
  { label: 'State Name', value: 'Mumbai' },
  { label: 'State Name', value: 'Mumbai' },
  { label: 'State Name', value: 'Mumbai' },
  { label: 'State Name', value: 'Mumbai' },
  { label: 'State Name', value: 'Mumbai' },
  { label: 'State Name', value: 'Mumbai' },
];
const CITY = [
  { label: 'Cityes Name', value: 'Shahpur' },
  { label: 'Cityes Name', value: 'Shahpur' },
  { label: 'Cityes Name', value: 'Shahpur' },
  { label: 'Cityes Name', value: 'Shahpur' },
  { label: 'Cityes Name', value: 'Shahpur' },
  { label: 'Cityes Name', value: 'Shahpur' },
  { label: 'Cityes Name', value: 'Shahpur' },
  { label: 'Cityes Name', value: 'Shahpur' },
];
const PersonalDetails = ({navigation}) => {
  const [value, setValue] = useState(null);
  const {personDetails} = useSelector(state => state.userLogin);
  const [ imgName , setImgName  ] = useState('');
  console.log('DATA IS REDUX PERsona ', personDetails);
  const dispatch = useDispatch();
  const [personalData, setpersonalData] = useState({
    name: '',
    surName: '',
    currentPosition: '',
    image: '',
    email: '',
    alternateEmail: '',
    mobile: '',
    alternateMobile: '',
    country: '',
    State: '',
    city: '',
    websiteUrl: '',
    Overview: '',
    FullDescription: '',
  });

  const handleChange = (fieldname, e) => {
    console.log('e.target.value', e);
    setpersonalData({
      ...personalData,
      [fieldname]: e,
    });
  };
  console.log('FORM DATA personalData : - ', personalData);
  const handleUpload = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 0.8,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      handleChange('image' , response.assets )
      setImgName(response);
      
    });
    
  };
  const handlePersonDetails = () => {
    console.log('Funion Called');
    dispatch(savePersonDetails(personalData));
  };
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <SignUpheader
        heading={'Personal Details'}
        screeNum={1}
        widthBox={'33%'}
      />

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
          onChangeText={e => handleChange('name', e)}
          placeholder="Enter name"
          style={Style.inputBox}
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
          onChangeText={e => handleChange('surName', e)}
          placeholder="Enter surname"
          style={Style.inputBox}
        />
        <Text
          style={{
            marginTop: 10,
            color: '#051F4E',
            fontSize: 16,
          }}>
          Current Position *
        </Text>
        <View
          style={{
            borderColor: '#D1D5DB',
            height: 50,
            borderRadius: 8,
            borderWidth: 1,
            marginTop: 10,
          }}>
            <Dropdown
            style={Style.dropdown}
            placeholderStyle={Style.placeholderStyle}
            selectedTextStyle={Style.selectedTextStyle}
            inputSearchStyle={Style.inputSearchStyle}
            iconStyle={Style.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              handleChange('currentPosition', item.value);
            }}
            // renderLeftIcon={() => (
        //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
      />

        </View>
        <Text
          style={{
            marginTop: 10,
            color: '#051F4E',
            fontSize: 16,
          }}>
          Upload Image*
        </Text>
        <Pressable onPress={() => handleUpload()}>
          <View style={Style.uploadInputBox}>
            <Image style={{width: 50, height: 50}} source={uploadImg} />
            {imgName && imgName.assets && imgName.assets.length  > 0   ? <Text>{imgName && imgName.assets && imgName.assets[0].fileName}   </Text>  :  <Text style={{fontSize: 13, color: '#77838F'}}>
              Browse From Your System or Just Drag & Drop Here.. Size 200 x 200
              / JPG, PNG
            </Text> }
          </View>
        </Pressable>

        <Text
          style={{
            marginTop: 10,
            color: '#051F4E',
            fontSize: 16,
          }}>
          Email *
        </Text>
        <TextInput
          onChangeText={e => handleChange('email', e)}
          placeholder="Enter email"
          style={Style.inputBox}
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
          onChangeText={e => handleChange('alternateEmail', e)}
          placeholder="Enter alternative email"
          style={Style.inputBox}
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
          onChangeText={e => handleChange('mobile', e)}
          placeholder="Enter mobile number"
          style={Style.inputBox}
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
          onChangeText={e => handleChange('alternateMobile', e)}
          placeholder="Enter alternative mobile"
          style={Style.inputBox}
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
              <Dropdown
            style={Style.dropdown}
            placeholderStyle={Style.placeholderStyle}
            selectedTextStyle={Style.selectedTextStyle}
            inputSearchStyle={Style.inputSearchStyle}
            iconStyle={Style.iconStyle}
            data={COUNTRY}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              handleChange('country', item.value);
            }}
            // renderLeftIcon={() => (
        //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
      />
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
             <Dropdown
            style={Style.dropdown}
            placeholderStyle={Style.placeholderStyle}
            selectedTextStyle={Style.selectedTextStyle}
            inputSearchStyle={Style.inputSearchStyle}
            iconStyle={Style.iconStyle}
            data={STATES}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              handleChange('State', item.value);
            }}
            // renderLeftIcon={() => (
        //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
      />
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
              <Dropdown
            style={Style.dropdown}
            placeholderStyle={Style.placeholderStyle}
            selectedTextStyle={Style.selectedTextStyle}
            inputSearchStyle={Style.inputSearchStyle}
            iconStyle={Style.iconStyle}
            data={CITY}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              handleChange('city', item.value);
            }}
            // renderLeftIcon={() => (
        //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
      />
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
          onChangeText={e => handleChange('websiteUrl', e)}
          placeholder="Enter website url"
          style={Style.inputBox}
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
          onChangeText={e => handleChange('Overview', e)}
          placeholder="Enter overview here"
          multiline={true}
          numberOfLines={6}
          style={Style.MultiLineBox}
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
          onChangeText={e => handleChange('FullDescription', e)}
          placeholder="Enter full description"
          numberOfLines={6}
          style={Style.MultiLineBox}
          multiline={true}
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
          <Pressable
            onPress={() => {
              navigation.navigate('EducationDetails');
              handlePersonDetails();
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Next
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
const Style = StyleSheet.create({
  inputBox: {
    fontSize: 14,
    height: 50,
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D1D5DB',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  MultiLineBox: {
    fontSize: 14,
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D1D5DB',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  uploadInputBox: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    height: 150,
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D1D5DB',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  dropdown: {
    // margin: 16,
    height: 50,
    paddingHorizontal: 10 , 
    borderBottomColor: 'gray',
    // borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default PersonalDetails;
