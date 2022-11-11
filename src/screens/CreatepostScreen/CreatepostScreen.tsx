import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/style'
import CreatePostModal from '../../components/CreatePostModal'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import { addPost } from '../../api/api2'

const CreatepostScreen = ({ navigation }) => {
  const { userInfo } = useSelector(state => state.userLogin);
  const [posttext, setPosttext] = useState('')
  const [visible, setVisible] = useState(false)
  const [postImage, setPostImage] = useState(null);

  const handleUpload = index => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 0.8,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      let img = (response && response.assets && response.assets[0].uri) ?? null;
      setPostImage(img);
    });
  };
  const setHashTag = () => {
    let text = posttext + '#'
    setPosttext(text)

  }
  const onPost = async () => {
    const createPost = await addPost( posttext , postImage , 'photo' , 'Anyone' ,   true , null , 'Anyone')
    console.log('createPost Result', createPost)
    // navigation.navigate('HomeScreen')
  }
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.leftheader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/icons/cross-icon.png')} style={{ height: 22, width: 22, marginRight: 8 }} />
            </TouchableOpacity>
            <Text style={styles.blacktext}>Create Post</Text>
          </View>
          <TouchableOpacity onPress={() => onPost()}>
            <Text style={styles.bluetext}>Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.border} />
        <View style={styles.profilecontainer}>
          <View style={styles.leftheader}>
            {userInfo && userInfo.profilePicURL ? <Image source={{ uri: userInfo && userInfo.profilePicURL }} style={{ height: 40, width: 40, borderRadius: 20, marginRight: 8 }} /> :
              <Image source={require('../../assets/icons/avatar.png')} style={{ height: 40, width: 40, borderRadius: 20, marginRight: 8 }} />}
            <Text style={styles.smallblacktext}>{userInfo && userInfo.firstName ? userInfo.firstName : '*****'} {userInfo && userInfo.lastName}</Text>
          </View>
          <TouchableOpacity style={styles.rightcontainer}>
            <Image source={require('../../assets/icons/GM.png')} style={{ height: 12, width: 12 }} />
            <Text style={styles.extrasmallblacktext}>Anyone</Text>
            <Image source={require('../../assets/icons/GM.png')} style={{ height: 12, width: 12 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.maincontainer}>
          <TextInput
            value={posttext}
            onChangeText={(text) => setPosttext(text)}
            placeholder='What do you want to post?'
            style={{ width: WINDOW_WIDTH - 32, fontSize: 14, fontWeight: '400', lineHeight: 18 }}
            placeholderTextColor={'#77838F'}
            multiline
          />
          <Image source={{ uri: postImage }} style={{ height: WINDOW_HEIGHT / 3, width: WINDOW_WIDTH - 32, borderRadius: 10, marginTop: 32 }} />
        </View>
      </ScrollView>
      <View style={styles.bottomcontainer}>
        <TouchableOpacity onPress={() => setHashTag()}>
          <Text style={[styles.bluetext, { padding: 16 }]}>Add Hashtag</Text>
        </TouchableOpacity>
        <View style={styles.border} />
        <View style={styles.profilecontainer}>
          <View style={styles.leftheader}>
            <TouchableOpacity onPress={() => handleUpload()} style={styles.imagecontainer}>
              <Image source={require('../../assets/icons/camera.png')} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.imagecontainer}>
              <Image source={require('../../assets/icons/image.png')} style={{ height: 16, width: 16 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.imagecontainer}>
              <Image source={require('../../assets/icons/video.png')} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.imagecontainer} onPress={() => setVisible(true)}>
              <Image source={require('../../assets/icons/Property.png')} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.rightcontainer}>
            <Image source={require('../../assets/icons/Commect-outline.png')} style={{ height: 12, width: 12 }} />
            <Text style={styles.extrasmallblacktext}>Anyone</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CreatePostModal
        visible={visible}
        setVisible={setVisible}
      />
    </View>
  )
}

export default CreatepostScreen

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  leftheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blacktext: {
    color: '#051F4E',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22
  },
  smallblacktext: {
    color: '#051F4E',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20
  },
  extrasmallblacktext: {
    color: '#051F4E',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
    paddingHorizontal: 8
  },
  bluetext: {
    color: '#0F6BBF',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20
  },
  border: {
    borderBottomWidth: 1,
    borderColor: '#D1D5DB'
  },
  profilecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16
  },
  rightcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8
  },
  maincontainer: {
    padding: 16
  },
  bottomcontainer: {
    marginTop: 32,
    width: '100%'
  },
  imagecontainer: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: '#EFF0F6',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  }
})
