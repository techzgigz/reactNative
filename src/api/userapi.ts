import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

let API  =  'https://postsapi.yliway.com/posts/api/v1'

export const getNewPosts = async (page,postType,pagesize,groupId) => {
    //console.log('getNewPosts',axios.defaults, API + '/newsFeed/list');
    // axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5YjcxZTNlLWE4YzktNDA3MC05MzRhLTRhNDA4NDJhNWJjOCIsImFsZ29yaXRobSI6IkhTMjU2IiwiZXhwIjoxNjY2OTgxNjg5LCJpYXQiOjE2NjY5NDkyODl9.rfw5IRpqBu1aIn1eePt3d1f28ffay2GP-QOm2jViv5s'
    try {
        let response = await axios.post(API + '/newsFeed/list', {
             
            "page": page ?? 1,
            "pagesize": pagesize ?? 10,
            "groupId": groupId ?? "",
            "postType": postType ?? "article"
        }); 
        // console.log('response',response.data.data)
        return response.data.data;
    }
    catch (error) {
        console.log(error)
        return null
    }
}
 
