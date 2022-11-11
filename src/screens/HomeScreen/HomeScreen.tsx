import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextInputWithLabels from '../../components/TextInputWithLabels'
import { WINDOW_WIDTH } from '../../utils/style'
import { useSelector, useDispatch } from 'react-redux';
import HomeCard from '../../components/HomeCard';
import { getNewPosts } from '../../api/api2';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveAuthProfile, saveUserToken } from '../../redux/features/AuthSlice';
import SearchScreen from '../SearchScreen/SearchScreen';
import { Value } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {
    const { userInfo } = useSelector(state => state.userLogin);
    const [textSearch, setTextSearch] = useState("");
    const [filteredValues, setFilteredValues] = useState(textSearch)
    const [postData, setPostdata] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const response = await getNewPosts(null, null, null, null)
            if (response.status === 200) {
                setPostdata(response.data.data)
            } else {
                AsyncStorage.removeItem('LoginData');
                axios.defaults.headers.common['Authorization'] = null
                dispatch(saveUserToken(null))
                dispatch(saveAuthProfile(null))
            }
        })();

    }, [])
    const handleSearch = (value) => {
        if (value) {
            setTextSearch(value)
        }
        else {
            setTextSearch("")
        }
    }
    const filterValues = (valueToFilter: string) => {
        setTextSearch(valueToFilter);
        setFilteredValues(
            textSearch.filter(
                item => {
                    return item?.name?.toUpperCase().includes(valueToFilter.toUpperCase());
                }
            )
        );
    };


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <TextInputWithLabels
                    styleContainer={styles.searchInput}
                    onSearch={() => { }}
                    onChange={(value: string) => { handleSearch(value) }}
                    // onFocus={() => handleSearchFocus()}
                    value={textSearch}
                    showCrossDeleteValue={true}
                    width={WINDOW_WIDTH - 90}
                    styleInputContainer={styles.styleInputContainer}
                    placeholder={'Search course, student or instructor'}
                />
                <TouchableOpacity onPress={() => navigation.openDrawer()} >
                    {userInfo && userInfo.profilePicURL ? <Image style={styles.profile} source={{ uri: userInfo &&  userInfo.profilePicURL }} /> :
                        <Image style={styles.profile} source={require('../../assets/icons/avatar.png')} />
                    }
                </TouchableOpacity>
            </View>
            <ScrollView>
                {!textSearch && postData && postData.rows && postData.rows.map((post, index) => (
                    <HomeCard key={index} postDetails={post} />
                ))}
                {textSearch && <SearchScreen handleSearch={handleSearch} testSearch={textSearch} />}
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    searchInput: {
        marginBottom: -48,
    },
    profile: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    styleInputContainer: {
        height: 36,

    }
})
