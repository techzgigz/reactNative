import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Modal from 'react-native-modal'
import { hitSlop2020, WINDOW_HEIGHT } from '../utils/style'
import { WHITE } from '../assets/colors';
import { Dropdown } from 'react-native-element-dropdown';
import { TextInput } from 'react-native-gesture-handler';
import { postGmAction } from '../api/api2';


const AddToGMModal = ({ post, visible, setVisible }) => {
  const [postModal, setPostModal] = useState();
  const [formData, setFormData] = useState(
    {
      selectedSkillarea: '',
      selectedActivityType: '',
      activityLink: '',
      activityType: ''
    }
  );
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
  const [value, setValue] = useState(null);
  const handleGmModal = () => {
    (async () => {
      const gmModalResponse = await postGmAction(post.id, post.postId, null, null, post.instituteId)
      console.log(' GM Modal', gmModalResponse)
      setPostModal(gmModalResponse)
    })();
  }
  const handleChange = (fieldname, value) => {
    setFormData({
      ...formData,
      [fieldname]: value,
    })
  }
  return (
    <Modal
      style={styles.modal}
      backdropOpacity={0.4}
      isVisible={visible}
      onBackdropPress={() => setVisible(false)}
    >
      <View style={styles.modalWrapper}>
        <TouchableOpacity
          hitSlop={hitSlop2020}
          style={styles.buttonClose}
          onPress={() => setVisible(false)}
        />
        <View><Text style={styles.heading}>Add to GM</Text></View>
        <View style={{ height: 1, backgroundColor: '#051F4E' }}></View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={styles.inputLabel}>
            Select Skill Area  <Text style={{ fontFamily: 'Inter-Black', color: 'red' }}>*</Text>
          </Text>
          <View
            style={styles.inputWrapper}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select area skills"
              searchPlaceholder="Search..."
              value={formData.selectedSkillarea}
              onChange={item => {
                handleChange('selectedSkillarea', item.value);
              }}
            // renderLeftIcon={() => (
            //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            // )}
            />

          </View>
          <Text
            style={styles.inputLabel}>
            Select Activity Type  <Text style={{ fontFamily: 'Inter-Black', color: 'red' }}>*</Text>
          </Text>
          <View
            style={styles.inputWrapper}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select area skills"
              searchPlaceholder="Search..."
              value={formData.selectedActivityType}
              onChange={item => {
                handleChange('selectedActivityType', item.value);
              }}
            // renderLeftIcon={() => (
            //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            // )}
            />
          </View>
          <Text
            style={styles.inputLabel}>
            Enter Activity Link    <Text style={{ fontFamily: 'Inter-Black', color: 'red' }}>*</Text>
          </Text>
          <View>
            <TextInput
              onChangeText={e => handleChange('activityLink', e)}
              placeholder="Enter Activity Link"
              // onFocus={ ()=> setShowLogin(false)}
              // onBlur={()=> setShowLogin(true)}
              style={styles.inputTypeBox}
            />
          </View>
          <Text
            style={styles.inputLabel}>
            Enter Activity Title   <Text style={{ color: 'red' }}>*</Text>
          </Text>
          <View>
            <TextInput
              onChangeText={e => handleChange('activityType', e)}
              placeholder="Enter Activity Title "
              // onFocus={ ()=> setShowLogin(false)}
              // onBlur={()=> setShowLogin(true)}
              style={styles.inputTypeBox}
            />
          </View>
        </View>
        <View style={{ height: 1, marginTop: 20, backgroundColor: '#051F4E' }}></View>
        <View style={{ padding: 30 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => setVisible(false)} >
              <View style={[styles.btn, { backgroundColor: '#D1D5DB', }]}>
                <Text style={{ fontSize: 16, color: '#303439', fontFamily: 'Inter-Bold' }}>Cancel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGmModal()} >
              <View style={[styles.btn, { backgroundColor: '#0F6BBF' }]}>
                <Text style={{ fontSize: 16, color: 'white', fontFamily: 'Inter-Bold' }}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default AddToGMModal

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    width: '100%',
    marginLeft: 0,
  },
  modalWrapper: {
    height: WINDOW_HEIGHT - 180 - 34,
    marginTop: 180 + 34,
    backgroundColor: WHITE,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  buttonClose: {
    height: 5,
    width: 36,
    borderRadius: 4,
    backgroundColor: '#999999',
    marginTop: 9,
    marginBottom: 9,
    alignSelf: 'center',
  },
  inputLabel: {
    marginTop: 10,
    color: '#051F4E',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  inputWrapper: {
    borderColor: '#D1D5DB',
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  heading: { color: '#051F4E', fontSize: 22, fontFamily: 'Inter-Bold', padding: 20 },
  btn: {
    borderRadius: 50,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
  }, dropdown: {
    // margin: 16,
    height: 50,
    paddingHorizontal: 10,
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
  inputTypeBox: {
    height: 50,
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D1D5DB',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
})