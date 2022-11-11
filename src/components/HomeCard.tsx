import { TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetScrollView, BottomSheetSectionList } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef, useMemo, useState } from 'react';
// import userImg from '../assets/images/user-face.png';
import SearchImg from '../assets/icons/search.png';
import peopleImg from '../assets/icons/people.png';
import refreshImg from '../assets/icons/refresh.png';
import EditImg from '../assets/icons/edit.png';
import saveImg from '../assets/icons/save.png';
import repostImg from '../assets/icons/repost.png';
import shareImg from '../assets/icons/share.png';
import muteImg from '../assets/icons/mute.png';


import CommentModal from './CommentModal'
import PostSendModal from './PostSendModal'
import PostShareModal from './PostShareModal'
import AddToGMModal from './AddToGMModal'
import PostMoreModal from './PostMoreModal'
import moment from 'moment';
import { getComments, likePost } from '../api/api2';

const HomeCard = ({ postDetails }) => {
  console.log('postDetails', postDetails);
  const [commentModal, setCommentModal] = useState(false)
  const [postsendModal, setPostsendModal] = useState(false)
  const [postsharemodal, setPostshareModal] = useState(false)
  const [addtogmModal, setAddtoGMModal] = useState(false)
  const [postmoreModal, setPostmoreModal] = useState(false)
  const [commentsList, setCommentsList] = useState(null);

  const handleLikes = async (like, postDetails) => {
    const likeStatus = !like ? 'Like' : null
    postDetails.reation = likeStatus
    const likeRes = await likePost(postDetails.postDetails.id, likeStatus)
    console.log('Likes Result', likeRes)
  }
  const getsComments = async () => {
    setCommentModal(true)
    const commentsList = await getComments(null, null, postDetails.postDetails.postId)
    console.log('Comments List  Result', commentsList)
    setCommentsList(commentsList?.data.data)
  }
  const addComments =  async(text , postDetails) => {
    const addComment = await addComments(text, postDetails.postDetails.postId)
    console.log('addComment List  Result', addComment)
    // setCommentModal(false)
  }
  return (
    <View style={{ backgroundColor: 'white', paddingTop: 16, marginTop: 8 }}>
      <View style={styles.header}>
        <View style={styles.leftheader}>
          <View>
            {postDetails.postDetails.userDetails.profilePicURL ? <Image style={styles.profile} source={{ uri: postDetails.postDetails.userDetails.profilePicURL }} /> :
              <Image style={styles.profile} source={require('../assets/icons/avatar.png')} />
            }
          </View>
          <View style={{ flexDirection: 'column', justifyContent: 'space-between', }}>
            <Text style={styles.textbold}>{postDetails.postDetails.userDetails.firstName}<Text>{" " + postDetails.postDetails.userDetails.lastName}</Text></Text>
            <Text style={styles.lighttext}>{moment(postDetails.postDetails.updatedAt).format('h')} h ago</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setPostmoreModal(true)}>
          <Image style={styles.dotimage} source={require('../assets/icons/Property.png')} resizeMode='contain' />
        </TouchableOpacity>
      </View>
      <View style={{ margin: 16 }}>
        <View><Text style={styles.text}> {postDetails.postDetails.description}</Text></View>
        {/* <View>
          <Text style={styles.text}>Celebrating 15 fantastic years of organization!</Text>
        </View>
        <View style={{ marginTop: 16 }}>
          <Text style={styles.text}>From starting off small to building an army of awesome team and... read more</Text>
        </View> */}
      </View>
      <View>
        {postDetails.postDetails.imageURL && <Image style={styles.mainimage} source={{ uri: postDetails.postDetails.imageURL }} />}
        <View style={styles.likecontainer}>
          <TouchableOpacity>
            <View style={styles.leftheader}>
              <Image style={styles.dotimage} source={require('../assets/icons/like_selected.png')} resizeMode='contain' />
              <Text style={styles.textboldgrey}>{" " + postDetails.postDetails.likeCount + ` . ` + postDetails.postDetails.commentCount + `  Comments`}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => handleLikes(postDetails.reaction, postDetails)} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image style={styles.dotimage} source={require('../assets/icons/like-outline.png')} tintColor={'#303439'} resizeMode='contain' />
          {postDetails.reaction ? <Text style={styles.bottomtext1}>{postDetails.reaction}Like</Text> :
            <Text style={styles.bottomtext}>{postDetails.reaction} Like</Text>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => getsComments()} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image style={styles.dotimage} source={require('../assets/icons/Commect-outline.png')} tintColor={'#303439'} resizeMode='contain' />
          <Text style={styles.bottomtext}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setAddtoGMModal(true)}>
          <Image style={styles.dotimage} source={require('../assets/icons/Gm-outline.png')} tintColor={'#303439'} resizeMode='contain' />
          <Text style={styles.bottomtext}>Add to GM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => setPostshareModal(true)}>
          <Image style={styles.dotimage} source={require('../assets/icons/share-outline.png')} tintColor={'#303439'} resizeMode='contain' />
          <Text style={styles.bottomtext}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPostsendModal(true)} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image style={styles.dotimage} source={require('../assets/icons/send-outline.png')} tintColor={'#303439'} resizeMode='contain' />
          <Text style={styles.bottomtext}>Send</Text>
        </TouchableOpacity>
      </View>
      <CommentModal
        sentPost={addComments}
        postDetails={postDetails}
        comments={commentsList}
        visible={commentModal}
        setVisible={setCommentModal}
      />
      <PostSendModal
        visible={postsendModal}
        setVisible={setPostsendModal}
      />
      <PostShareModal
        visible={postsharemodal}
        setVisible={setPostshareModal}
      />
      <AddToGMModal
        post={postDetails}
        visible={addtogmModal}
        setVisible={setAddtoGMModal}
      />
      <PostMoreModal
        visible={postmoreModal}
        setVisible={setPostmoreModal}
      />
    </View>
  )
}

export default HomeCard

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  leftheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 8
  },
  dotimage: {
    height: 20,
    width: 20,
  },
  textbold: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    color: '#051F4E'
  },
  textboldgrey: {
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15,
    color: '#77838F'
  },
  text: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 15,
    color: '#303439'
  },
  bottomtext: {
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 15,
    color: '#303439',
    marginTop: 4
  },
  bottomtext1: {
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 15,
    color: 'red',
    marginTop: 4
  },
  lighttext: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#77838F'
  },
  mainimage: {
    height: 300,
    width: '100%',
  },
  likecontainer: {
    backgroundColor: '#A400FF14',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  }
})
