import React, { useEffect, useState } from "react";
import TextInputWithLabels from '../../components/TextInputWithLabels';
import ProfileImg from '../../assets/icons/backBtn.png';
import {
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    Pressable,
} from 'react-native';
import { WINDOW_WIDTH } from '../../utils/style'
import RecentProfileCard from "../../components/RecentProfileCard/RecentProfileCard";
import profileImg from '../../assets/icons/profile.jpg';
import SearchPeople from '../../assets/icons/user-avatar.png';
import { TouchableOpacity } from "react-native-gesture-handler";
import { clearRecentSearch, getRecentSearch, getSearch, getSearchUserList } from "../../api/api2";

const SearchScreen = ({ navigation, testSearch , handleSearch }) => {
    const [searchBy, setSerachBy] = useState(null);
    const [recentSearchData, setRecentSearchData] = useState(null);
    const [userSearchData, setUserSearchData] = useState();
    const [people, setPeople] = useState(null);
    const [groups, setGroups] = useState(null);
    const [institute, setInstitute] = useState(null);
    const [teacher, setTeacher] = useState(null);
    useEffect(() => {
        (async () => {
            if (testSearch && testSearch.length >= 2 ) {
                const userSearch = await getSearch(null, null, null, "")
                if (userSearch?.data) {
                    console.log('UserType  Result', userSearch)
                    userSearch?.data?.data && setSerachBy(Object.keys(userSearch?.data.data));
                    userSearch?.data?.data.user && setPeople(userSearch?.data.data.users);
                    userSearch?.data?.data.groups && setGroups(userSearch?.data.data.groups);
                    userSearch?.data?.data.institute && setInstitute(userSearch?.data.data.institute);
                    userSearch?.data?.data.teacher && setTeacher(userSearch?.data.data.teacher);
                }
                else {
                    setPeople(null);
                    setGroups(null);
                    setInstitute(null);
                    setTeacher(null);
                    setSerachBy(null);
                }
            }
            else
            {    
            console.log('Recent Search' , testSearch.length)
                setPeople(null);
                setGroups(null);
                setInstitute(null);
                setTeacher(null);
                setSerachBy(null)
                const searchList = await getRecentSearch()
                setRecentSearchData(searchList?.data.data)
                const userSearch = await getSearchUserList(null, null, null, null)
                setUserSearchData(userSearch.rows)   
            }
        })();
    }, [testSearch]);
    const clearRecentSearchList = async () => {
        const clearRecentResult = await clearRecentSearch()
        console.log('RecentClear Result', clearRecentResult)
        setRecentSearchData([]);
    };
    const Item = ({ name }) => {
        return (
            <View style={styles.item}>
                <Text style={{ color: 'black', width: 250 }}>{name}</Text>
            </View>
        );
    }
    const renderItem = ({ item }) => (
        // <TouchableOpacity onPress={handleSearch(item.firstName)}>
            <View style={styles.cardBox}>
                {item.profilePicURL ? <Image style={styles.profileImg} source={{ uri: item.profilePicURL }} /> :
                    <Image style={styles.profileImg} source={require('../../assets/icons/avatar.png')} />
                }
                <Text style={styles.label}>{item.firstName ? item.firstName : 'XXX'}</Text>
            </View>
        // </TouchableOpacity>
    );
    const SearchByItem = ({ item }) => (
        <TouchableOpacity>
            <View style={{ borderRadius: 50, backgroundColor: '#EFF0F6', minWidth: 90, justifyContent: 'center', alignItems: 'center', padding: 8, marginHorizontal: 5 }}>
                <Text style={{ fontSize: 14 }}>{item ? item : 'XXXX'}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{ backgroundColor: 'white' }}>
                {/* <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Image style={styles.profile} source={ProfileImg} />
                    </TouchableOpacity>
                    <TextInputWithLabels
                        styleContainer={styles.searchInput}
                        onSearch={() => { }}
                        onChange={(value: string) => handleGetSearch(value)}
                        value={textSearch}
                        showCrossDeleteValue={true}
                        width={WINDOW_WIDTH - 70}
                        styleInputContainer={styles.styleInputContainer}
                        placeholder={'Search course, student or instructor'}
                    />
                </View> */}
                <View style={{ height: 1, borderColor: '#D1D5DB', borderWidth: 0.5 }}></View>
                {testSearch && testSearch.length <= 2  &&
                    <View>
                        <View style={styles.recentWrap}>
                            <View><Text style={styles.headingLabel}>Recent Searches</Text></View>
                            <TouchableOpacity onPress={() => clearRecentSearchList()}><View><Text>Clear All</Text></View></TouchableOpacity>

                        </View>

                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={userSearchData}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                        />

                        {recentSearchData && recentSearchData.map((item) => (
                            <TouchableOpacity onPress={() => handleSearch(item.searchText)}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image style={{ width: 20, height: 20, marginHorizontal: 10 }} source={require('../../assets/icons/clock.png')} />
                                    <View style={styles.NameWrapper}>
                                        <Text style={styles.recentName}>{item.searchText}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}

                    </View>
                }
                <FlatList
                    style={{ marginVertical: 10 }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={searchBy}
                    renderItem={SearchByItem}
                    keyExtractor={(item) => item.id}
                />

                {people && people.rows && people.rows.length > 0 && <View><Text style={{ fontWeight: 'bold', fontSize: 15, padding: 10 }}>People</Text></View>}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {people && people.rows && people.rows.map((people, index) => (
                        <>
                            {index < peopleViewCount &&
                                <View key={index} style={{ alignItems: 'center', padding: 10, margin: 8, width: WINDOW_WIDTH / 2 - 20, borderWidth: 1, borderRadius: 8, borderColor: '#D1D5DB' }}>
                                    {people.profilePicURL ? <Image style={{ width: 72, height: 72, borderRadius: 50, marginBottom: 10 }} source={{ uri: people.profilePicURL }} /> :
                                        <Image style={{ width: 72, height: 72, borderRadius: 50, marginBottom: 10 }} source={require('../../assets/icons/avatar.png')} />
                                    }
                                    <Text style={{ color: '#051F4E', fontSize: 14, fontWeight: 'bold' }} >{people.firstName} {" " + people.lastName} Korsgaard</Text>
                                    <Text style={{ color: '#051F4E', fontSize: 12 }} >Business Analyst at Indianic Infotech</Text>
                                    <Text style={{ color: '#77838F' }}>10 mutual contacts</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity>
                                            <Image style={{ width: 40, height: 40, margin: 5 }} source={require('../../assets/icons/AddIcon.png')} />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image style={{ width: 40, height: 40, margin: 5 }} source={require('../../assets/icons/Approved.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }
                        </>
                    ))}
                    {/* <Pressable><View style={styles.viewAllLabel}><Text style={{ color: '#051F4E', fontSize: 15, fontWeight: 'bold' }}>View All </Text></View></Pressable> */}
                </View>
                {groups && groups.rows && groups.rows.length > 0 && <View><Text style={{ fontWeight: 'bold', fontSize: 15, padding: 10 }}>Groups</Text></View>}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {groups && groups.rows && groups.rows.map((people, index) => (
                        <View key={index} style={{ alignItems: 'center', padding: 10, margin: 8, width: WINDOW_WIDTH / 2 - 20, borderWidth: 1, borderRadius: 8, borderColor: '#D1D5DB' }}>
                            {people.profilePicURL ? <Image style={{ width: 72, height: 72, borderRadius: 50, marginBottom: 10 }} source={{ uri: people.profilePicURL }} /> :
                                <Image style={{ width: 72, height: 72, borderRadius: 50, marginBottom: 10 }} source={require('../../assets/icons/avatar.png')} />
                            }
                            <Text style={{ color: '#051F4E', fontSize: 14, fontWeight: 'bold' }} >{people.firstName} {" " + people.lastName} </Text>
                            <Text style={{ color: '#051F4E', fontSize: 12 }} >Business Analyst at Indianic Infotech</Text>
                            <Text style={{ color: '#77838F' }}>10 mutual contacts</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image style={{ width: 40, height: 40, margin: 5 }} source={require('../../assets/icons/AddIcon.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={{ width: 40, height: 40, margin: 5 }} source={require('../../assets/icons/Approved.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
                {institute && institute.rows && institute.rows.length > 0 && <View><Text style={{ fontWeight: 'bold', fontSize: 15, padding: 10 }}>Company</Text></View>}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {institute && institute.rows && institute.rows.map((people, index) => (
                        <View key={index} style={{ alignItems: 'center', padding: 10, margin: 8, width: WINDOW_WIDTH / 2 - 20, borderWidth: 1, borderRadius: 8, borderColor: '#D1D5DB' }}>
                            {people.profilePicURL ? <Image style={{ width: 72, height: 72, borderRadius: 50, marginBottom: 10 }} source={{ uri: people.profilePicURL }} /> :
                                <Image style={{ width: 72, height: 72, borderRadius: 50, marginBottom: 10 }} source={require('../../assets/icons/avatar.png')} />
                            }
                            <Text style={{ color: '#051F4E', fontSize: 14, fontWeight: 'bold' }} >{people.firstName} {" " + people.lastName} Korsgaard</Text>
                            <Text style={{ color: '#051F4E', fontSize: 12 }} >Business Analyst at Indianic Infotech</Text>
                            <Text style={{ color: '#77838F' }}>10 mutual contacts</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image style={{ width: 40, height: 40, margin: 5 }} source={require('../../assets/icons/AddIcon.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={{ width: 40, height: 40, margin: 5 }} source={require('../../assets/icons/Approved.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
                {teacher && teacher.rows && teacher.rows.length > 0 && <View><Text style={{ fontWeight: 'bold', fontSize: 15, padding: 10 }}>Teacher</Text></View>}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {teacher && teacher.rows && teacher.rows.map((people, index) => (
                        <View key={index} style={{ alignItems: 'center', padding: 10, margin: 8, width: WINDOW_WIDTH / 2 - 18, borderWidth: 1, borderRadius: 8, borderColor: '#D1D5DB' }}>
                            {people.profilePicURL ? <Image style={{ width: 72, height: 72, borderRadius: 50, marginBottom: 10 }} source={{ uri: people.profilePicURL }} /> :
                                <Image style={{ width: 72, height: 72, borderRadius: 50, marginBottom: 10 }} source={require('../../assets/icons/avatar.png')} />
                            }
                            <Text style={{ color: '#051F4E', fontSize: 14, fontWeight: 'bold' }} >{people.firstName} {" " + people.lastName} Korsgaard</Text>
                            <Text style={{ color: '#051F4E', fontSize: 12 }} >Business Analyst at Indianic Infotech</Text>
                            <Text style={{ color: '#77838F' }}>10 mutual contacts</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image style={{ width: 40, height: 40, margin: 5 }} source={require('../../assets/icons/AddIcon.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={{ width: 40, height: 40, margin: 5 }} source={require('../../assets/icons/Approved.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>

            </View>
        </View>
    )
}
export default SearchScreen;
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
        height: 20,
        width: 20,
        borderRadius: 20
    },
    styleInputContainer: {
        height: 36,

    },
    recentWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: '#D1D5DB',
        marginHorizontal: 15,
        marginBottom: 15

    },
    headingLabel: {
        color: '#051F4E',
        fontSize: 18,
        fontWeight: 'bold',
    },
    NameWrapper: {
        paddingVertical: 12,
        paddingHorizontal: 1,
    },
    recentName: {
        color: '#051F4E',
        fontWeight: 'bold',
    },
    cardBox: {
        // flexDirection : 'row',
        marginVertical: 15,
        width: 70,
        height: 100,
        borderWidth: 1,
        marginHorizontal: 6,
        borderRadius: 6,
        borderColor: '#D1D5DB',
        // justifyContent : 'center',
        alignItems: 'center',
        padding: 6,
    },
    profileImg: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginBottom: 5,
    },
    label: {
        color: '#051F4E',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpaceing: 1
    },
    viewAllLabel: { width: WINDOW_WIDTH, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8ebff', padding: 10 }
})
