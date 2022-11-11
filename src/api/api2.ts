import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

let API = 'https://userapi.yliway.com/user/api/v1'
// let API  =  'https://postsapi.yliway.com/posts/api/v1'

export const getNewPosts = async (page, postType, pagesize, groupId) => {
    console.log('getNewPosts');
    try {
        let response = await axios.post(API + '/newsFeed/list', {

            "page": page ?? 1,
            "pagesize": pagesize ?? 10,
            "groupId": groupId ?? "",
            "postType": postType ?? "article"
        });
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}

export const likePost = async ( id ,reaction) => {
    console.log('likePost');
    try { 

        let response = await axios.post(API + '/newsFeed/reaction',{
            "id": id,
            "reaction": reaction 
          });
        console.log('likePost', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}

export const getComments = async ( page, pagesize, postId) => {
    console.log('getComments');
    try { 
 
        let response = await axios.post(API + '/comments/list',{
           "page": page ?? 1,
            "pagesize": pagesize ?? 10,
            "postId": postId  
          });
        console.log('getComments', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
export const addComments = async ( title,postId) => {
    console.log('addComments');
    try { 
 
        let response = await axios.post(API + 'newsFeed/addUpdate',{
            title:title, 
            postId:postId
        });
        console.log('addComments', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}

export const addGm = async ( activityId,instituteId,postId,status) => {
    console.log('addGm');
    try { 
 
        let response = await axios.post(API + 'newsFeed/gm-action',{
            activityId:activityId,
            instituteId:instituteId,
            postId:postId,
            status:status,
        });
        console.log('addGm', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
export const addPost = async ( description,imageURL,postType,privacy,status,tags,whoCanComment) => {
    console.log('addPost ');
    try { 
 
        let response = await axios.post(API + 'Posts/addUpdate',{
            description:description,
            imageURL:imageURL,
            postType:postType,
            privacy:privacy,
            status:status,            
 	    tags:tags,
            whoCanComment:whoCanComment,
        });
        console.log('addGm', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
export const getNotificationsList = async (page, pagesize, searchText) => {
    console.log('getNotificationsList');
    try {
        let response = await axios.post(API + '/userNotificaton/list', {
            "page": page ?? 1,
            "pagesize": pagesize ?? 10,
            "searchText": searchText ?? ""
        });
        console.log('response', response)
        return response.data.data;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
export const getRecentSearch = async () => {
    console.log('Recent Search ');
    try {
        let response = await axios.get(API + '/recentSearch');
        console.log('response Recent Search', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
export const getSearchUserList = async (page, role, pagesize, searchText) => {
    try {
        let response = await axios.post(API + '/userList', {

            "page": page ?? 1,
            "pagesize": pagesize ?? 10,
            "searchText": searchText ?? "",
            "role": role ?? "Teacher/Trainer/Coach/Host"
        });
        console.log('response userSearch', response)
        return response.data.data;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
export const getSearch = async (page, role, pagesize, searchText) => {
    console.log('Get Search' , searchText)
    try {
        let response = await axios.post(API + '/globalSearch', {
            "page": page ?? 1,
            "pagesize": pagesize ?? 10,
            "searchText": searchText ?? "",
            "role": role ?? "Teacher/Trainer/Coach/Host"
        });
        console.log(' getSearch Response', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
export const clearRecentSearch = async () => {
    console.log('Clear Recent');
    try {
        let response = await axios.get(API + '/clearRecentSearch');
        console.log('Clear Recent  response', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}

export const postGmAction = async (id, postId, searchText, activityId, instituteId) => {
    console.log('Post GM Action');
    try {
        let response = await axios.post(API + '/newsFeed/gm-action', {
            "id": "b5165c93-7748-447f-8328-cec520164123",
            "postId": "38c1d835-ec23-4afd-8873-e49a3fcde364",
            "status": true,
            "activityId": "",
            "instituteId": null
        });
        console.log(' GM Modal response', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}

export const getConnectionList = async (text) => {
    console.log('Get Connection List ')
    console.log(text);
    try {
        let response = await axios.post(API + '/connections/myConnections', {
            "searchText": text
        });
        console.log('Connection List  Response', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}

export const checkPendingRequest = async (userId) => {
    console.log('checkPendingRequest');
    try {
        let response = await axios.get(API + '/connections/checkPendingRequest/' + userId);
        console.log('checkPendingRequest', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
export const removeSuggestedUser = async (id) => {
    console.log('removeSuggestedUser');
    try {
        let response = await axios.get(API + '/connections/removeSuggestedUser/' + id);
        console.log('removeSuggestedUser', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
export const getFollowersList = async (userId, pagesize, type,  searchText) => {
    console.log('getFollowersList');
    try {
        let response = await axios.post(API + '/followers/list',{
            "userId": userId, 
            "pagesize": pagesize ?? 10,
            "page": 1,
            "type": type,
            "search": searchText ,
          });
        console.log('getFollowersList', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
export const getFollowingList = async (userId, pagesize, type,  searchText) => {
    console.log('getFollowingList');
    try {
        let response = await axios.post(API + '/following/list',{
            "userId": userId, 
            "pagesize": pagesize ?? 10,
            "page": 1,
            "type": type,
            "search": searchText ,
          });
        console.log('getFollowingList', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
export const getSkillsList = async () => {
    console.log('getSkillsList');
    try {
        let response = await axios.get(API + '/skills');
        console.log('getSkillsList', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}

export const getAllGroups = async ( pageNo ,  pagesize,  searchText) => {
    console.log('getting All Groups');
    try {
        let response = await axios.post(API + '/Groups/all',{
            "page":pageNo ?? 1,
            "pagesize": 10 ?? pagesize,
            "searchText": searchText ?? ''
          });
        console.log('getting All Groups', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
export const getInvitationRecievedList = async ( pageNo ,  pagesize,  searchText) => {
    console.log('getInvitationRecievedList');
    try {
        let response = await axios.post(API + '/Groups/invite/received',{
            "page":pageNo ?? 1,
            "pagesize": 10 ?? pagesize,
            "searchText": searchText ?? ''
          });
        console.log('getInvitationRecievedList', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
export const groupJoinedList = async ( pageNo ,  pagesize,  searchText) => {
    console.log('groupJoinedList');
    try {
        let response = await axios.post(API + '/Groups/joined',{
            "page":pageNo ?? 1,
            "pagesize": 10 ?? pagesize,
            "searchText": searchText ?? ''
          });
        console.log('groupJoinedList', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
export const getMyGroupsList = async ( pageNo ,  pagesize,  searchText) => {
    console.log('getMyGroupsList');
    try {
        let response = await axios.post(API + '/Groups/myGroups/list',{
            "page":pageNo ?? 1,
            "pagesize": 10 ?? pagesize,
            "searchText": searchText ?? ''
          });
        console.log('getMyGroupsList', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
export const getGroupRequestSentList = async ( pageNo ,  pagesize,  searchText) => {
    console.log('getGroupRequestSentList');
    try {
        let response = await axios.post(API + '/Groups/invite/send/list',{
            "page":pageNo ?? 1,
            "pagesize": 10 ?? pagesize,
            "searchText": searchText ?? ''
          });
        console.log('getGroupRequestSentList', response)
        return response;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
