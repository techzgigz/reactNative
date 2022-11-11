import { TouchableOpacity } from "@gorhom/bottom-sheet";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableHighlight, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TextInputWithLabels from "../../components/TextInputWithLabels";
import { WINDOW_WIDTH } from "../../utils/style";
import AddSection from "./addSectionModal";
import AvailableDropUp from "./AvailableDropuoModal";
import EditOverViewModal from "./editOverViewModal";
import MyGoalsModal from "./MyGoalsModal";
import { getProfileData } from "../../api/api";
import { saveProfile } from "../../redux/features/myProfile";
import EditDescriptionModal from "./editDescpreptionModal";
import { WHITE } from "../../assets/colors";
import { NavigationContainer } from "@react-navigation/native";
import { getSkillsList } from "../../api/api2";
const MyProfile = ({ navigation }) => {
    const { profile } = useSelector(state => state.profile);
    const [overView, setOverView] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    console.log('Profile', profile);
    const [textSearch, setTextSearch] = useState('');
    const [availblePopUp, setAvailblePopUp] = useState(false);
    const [myGoalsPopUp, setMyGoalsPopUp] = useState(false);
    const [addSectionPopUp, setAddSectionPopUp] = useState(false);
    const [editOveView, setEditOverView] = useState(false);
    const [editDescription, setEditDescription] = useState(false);
    const [experience, setExperience] = useState(null);
    const [educationDetails, setEducationDetails] = useState(null);
    const [languageSkills, setLanguageSkills] = useState(null);
    const [certificate, setCertificate] = useState(null);
    useEffect(() => {
        (async () => {
            const profileData = await getProfileData(null)
            console.log('Get Profile Result', profileData)
            dispatch(saveProfile(profileData?.data.data))
            setOverView(profileData?.data.data.shortDescription);
            setDescription(profileData?.data.data.briefDescription);
            setExperience(profileData?.data.data.experience);
            setEducationDetails(profileData?.data.data.educationDetails);
            setLanguageSkills(profileData?.data.data.languageSkills);
            setCertificate(profileData?.data.data.certificate)
        })();
        (async () => {
            const skills = await getSkillsList()
            console.log('Get skills Result', skills)
        })();
    }, [editOveView, editDescription])
    useEffect(() => {
        setOverView(profile?.shortDescription);
        setDescription(profile?.briefDescription);
        setExperience(profile?.experience);
        setEducationDetails(profile?.educationDetails);
        setLanguageSkills(profile?.languageSkills);
        setCertificate(profile?.certificate)
    }, [profile])
    // We can Convert to it In Component 
    const handleOverView = (heading, OverView) => {
        return (
            <View style={{ backgroundColor: 'white', padding: 20, borderTopColor: '#D1D5DB', borderTopWidth: 1, borderBottomColor: '#D1D5DB', borderBottomWidth: 1, marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: 'space-between' }}>
                    <Text style={{ color: '#051F4E', fontSize: 18, fontWeight: 'bold' }}>{heading}</Text>
                    {heading === 'OverView' &&
                        <TouchableOpacity onPress={() => setEditOverView(true)}>
                            <Image style={{ width: 20, height: 20 }} source={require('../../assets/icons/edit-pencil.png')} />
                        </TouchableOpacity>
                    }
                    {heading === 'Description' &&
                        <TouchableOpacity onPress={() => setEditDescription(true)}>
                            <Image style={{ width: 20, height: 20 }} source={require('../../assets/icons/edit-pencil.png')} />
                        </TouchableOpacity>
                    }
                </View>
                <Text style={{ color: '#051F4E', fontSize: 14, fontWeight: 'bold', lineHeight: 20 }}>{OverView}</Text>
            </View>
        )
    }
    return (
        <ScrollView style={{ backgroundColor: '#eff0f6' }}>
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableHighlight onPress={() => navigation.navigate('HomeScreen')}>
                        <Image style={styles.profile} source={require('../../assets/icons/backBtn.png')} />
                    </TouchableHighlight>
                    <TextInputWithLabels
                        styleContainer={styles.searchInput}
                        onSearch={() => { }}
                        onChange={(value: string) => setTextSearch(value)}
                        value={textSearch}
                        showCrossDeleteValue={true}
                        width={WINDOW_WIDTH - 70}
                        styleInputContainer={styles.styleInputContainer}
                        placeholder={'Search Profile here...'}
                    />
                </View>
                <View style={{ backgroundColor: 'white' }}>
                    <Image style={styles.bannerImage} source={require('../../assets/icons/profileBanner.png')} />
                    <View style={{ marginHorizontal: 20, marginTop: -40 }}>

                        {profile && profile.profilePicURL ?
                            <Image style={styles.profileImg} source={{ uri: profile.profilePicURL }} />
                            :
                            <Image style={styles.profileImg} source={require('../../assets/icons/avatar.png')} />
                        }
                    </View>
                </View>
                <View style={styles.profileDetailsWrapper}>
                    <Text style={styles.name}> {profile && profile.firstName + ' '} {profile && profile.lastName}</Text>
                    <View style={{ flexDirection: 'row', paddingVertical: 2 }}>
                        <Text style={styles.concetionsLabel}> Project Manager at Avio {profile && profile.country + ' '} {profile && profile.city}</Text>
                        <Text style={styles.contactLabel}> Contact Info</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 2 }}>
                        <Text style={styles.concetionsLabel}><Text style={styles.concetions}>{profile && profile.connectionsCount}</Text> Connections *</Text>
                        <Text style={styles.concetionsLabel}><Text style={styles.concetions}>{profile && profile.totalViews}</Text> Profile Views *</Text>
                        <Text style={styles.concetionsLabel}><Text style={styles.concetions}>{profile && profile.growthConnectionsCount}</Text> Growth Connections</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.connectionInfo}><Text style={styles.InfoLabel}>Post Published</Text>
                            <Text style={styles.labelInfo}>{profile && profile.publishedPostsCount}</Text>
                        </View>
                        <View style={styles.connectionInfo}><Text style={styles.InfoLabel}>Total Likes</Text>
                            <Text style={styles.labelInfo}>256+</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}><Text style={styles.InfoLabel}>Total Shares</Text>
                            <Text style={styles.labelInfo}>{profile && profile.totalShares}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.divider}></View>
                <View style={{ flexDirection: "row", paddingVertical: 8, backgroundColor: 'white' }}>
                    <View style={styles.connectionInfo}>
                        <TouchableOpacity onPress={() => setAvailblePopUp(true)} >
                            <Text style={{
                                color: '#051F4E',
                                fontFamily: 'Inter',
                                fontSize: 16,
                                fontWeight: 'bold',
                                padding: 5
                            }}>Available for <Image style={{ width: 18, height: 13 }} source={require('../../assets/icons/drop.png')} /> </Text></TouchableOpacity>
                    </View>
                    <View style={styles.connectionInfo}>
                        <TouchableOpacity onPress={() => setMyGoalsPopUp(true)}>
                            <Text style={{
                                color: '#051F4E',
                                fontFamily: 'Inter',
                                fontSize: 16,
                                fontWeight: 'bold',
                                padding: 5
                            }}>My Goals <Image style={{ width: 18, height: 13 }} source={require('../../assets/icons/drop.png')} /> </Text></TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center' }}><TouchableOpacity onPress={() => setAddSectionPopUp(true)}><Text style={styles.contactLabel}> + Add Secction</Text></TouchableOpacity></View>

                </View>
                <View style={styles.divider}></View>
                {handleOverView('OverView', profile && profile.shortDescription)}
                {handleOverView('Description', profile && profile.briefDescription)}
                {/* Activity starts from here  */}
                <View style={{ marginVertical: 10, padding: 20, backgroundColor: WHITE }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#051F4E', fontSize: 18, fontWeight: 'bold' }}> Activity</Text>
                        <Image style={{ width: 18, height: 18 }} source={require('../../assets/icons/GM.png')} />
                    </View>
                    <Text style={styles.contactLabel}>1,095 Followers</Text>

                    {/* Card Start here  */}
                    <View style={{ borderRadius: 8, marginTop: 10, padding: 10, flexDirection: 'row', backgroundColor: '#f8f9fa' }}>
                        <Image style={{ width: 54, height: 54 }} source={require('../../assets/icons/user-avatar.png')} />
                        <View style={{ paddingHorizontal: 10 }}>
                            <Text style={{
                                color: '#051F4E',
                                fontFamily: 'Inter',
                                fontSize: 16,
                                fontWeight: 'bold',
                            }}>Congrats Bro!</Text>
                            <Text>Phillip Korsgaard Commented</Text>
                        </View>
                    </View>
                    <View style={{ borderRadius: 8, marginTop: 10, padding: 10, flexDirection: 'row', backgroundColor: '#f8f9fa' }}>
                        <Image style={{ width: 54, height: 54 }} source={require('../../assets/icons/user-avatar.png')} />
                        <View style={{ paddingHorizontal: 10 }}>
                            <Text style={{
                                color: '#051F4E',
                                fontFamily: 'Inter',
                                fontSize: 16,
                                fontWeight: 'bold',
                            }}>#helpinghands</Text>
                            <Text>Phillip Korsgaard Commented</Text>
                        </View>
                    </View>
                    <View style={{ borderRadius: 8, marginTop: 10, padding: 10, flexDirection: 'row', backgroundColor: '#f8f9fa' }}>
                        <Image style={{ width: 54, height: 54 }} source={require('../../assets/icons/user-avatar.png')} />
                        <View style={{ paddingHorizontal: 10 }}>
                            <Text style={{
                                color: '#051F4E',
                                fontFamily: 'Inter',
                                fontSize: 16,
                                fontWeight: 'bold',
                            }}>Congrats Bro!</Text>
                            <Text>Phillip Korsgaard Commented</Text>
                        </View>
                    </View>
                    {/* ends here */}
                </View>

                <View style={{ marginVertical: 4, padding: 20, backgroundColor: WHITE }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#051F4E', fontSize: 18, fontWeight: 'bold' }}> Experience</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('addExperinace', {type: 'add', })}>
                        <Image style={{ width: 18, height: 18 }} source={require('../../assets/icons/GM.png')} />
                        </TouchableOpacity>
                    </View>
                    {/* Card Start here  */}
                    {experience && experience.map((item, index) => (
                        <View key={index} style={{ borderRadius: 8, marginTop: 10, padding: 10, flexDirection: 'row' }}>
                            <Image style={{ width: 54, height: 54 }} source={require('../../assets/icons/user-avatar.png')} />
                            <View style={{ width: '90%', paddingHorizontal: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{
                                        color: '#051F4E',
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                    }}>{item.companyName}</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('addExperinace', {
                                        type: 'update',
                                        education: item
                                    })}>
                                        <Image style={{ width: 15, height: 15 }} source={require('../../assets/icons/edit-pencil.png')} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.fontDesp}>{item.industry ? item.industry : 'No industry'}</Text>
                                <Text style={styles.fontDesp}>{item.startDate} - {item.endDate}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <View style={{ marginVertical: 4, padding: 20, backgroundColor: WHITE }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#051F4E', fontSize: 18, fontWeight: 'bold' }}>Education</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('addEduation', {
                            type: 'add',
                        })}>
                            <Image style={{ width: 18, height: 18 }} source={require('../../assets/icons/GM.png')} />
                        </TouchableOpacity>
                    </View>
                    {/* Card Start here  */}
                    {educationDetails && educationDetails.map((item, index) => (
                        <View key={index} style={{ flexDirection: 'row', paddingVertical: 10, flex: 1 }}>
                            <View style={{ flex: 2 }}>
                                <Image style={{ width: 65, height: 65 }} source={require('../../assets/icons/profile.jpg')} />
                            </View>
                            <View style={{ flex: 6 }}>
                                <View style={{ marginTop: -25 }}>
                                    <View>
                                        <Text style={{
                                            color: '#051F4E',
                                            fontFamily: 'Inter',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                        }}>{item.fieldOfStudy}</Text>
                                    </View>
                                    <Text style={styles.fontDesp}>{item.education}</Text>
                                    <Text style={styles.fontDesp}>{item.institute ? item.institute : 'No institute'}</Text>
                                    <Text style={styles.fontDesp}>{item.startDate} - {item.endDate}</Text>
                                </View>

                            </View>
                            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('addEduation', {
                                    type: 'update',
                                    education: item
                                })}>
                                    <Image style={{ width: 15, height: 15 }} source={require('../../assets/icons/edit-pencil.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
                <View style={{ marginVertical: 4, padding: 20, backgroundColor: WHITE }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#051F4E', fontSize: 18, fontWeight: 'bold' }}>Certifications</Text>
                        <Image style={{ width: 18, height: 18 }} source={require('../../assets/icons/GM.png')} />
                    </View>
                    {certificate && certificate.map((item, index) => (
                        <View key={index} style={{ flexDirection: 'row', paddingVertical: 10, flex: 1 }}>
                            <View style={{ flex: 3 }}>
                                <Image style={{ width: 150, height: 100 }} source={require('../../assets/icons/profile.jpg')} />
                            </View>
                            <View style={{ flex: 3 }}>
                                <View style={{ marginTop: -25 }}>
                                    <View>
                                        <Text style={{
                                            color: '#051F4E',
                                            fontFamily: 'Inter',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                        }}>{item.fieldOfStudy}</Text>
                                    </View>
                                    <Text style={styles.fontDesp}>{item.title}</Text>
                                    <Text style={styles.fontDesp}>{item.description ? item.description : 'No description'}</Text>
                                    <Text style={styles.fontDesp}>{item.startDate} - {item.endDate}</Text>
                                </View>

                            </View>
                            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                                <Image style={{ width: 15, height: 15 }} source={require('../../assets/icons/edit-pencil.png')} />
                            </View>
                        </View>
                    ))}
                </View>

                <View style={{ marginVertical: 2, padding: 20, backgroundColor: WHITE }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#051F4E', fontSize: 18, fontWeight: 'bold' }}>Language</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('addLanguage', {
                                    type: 'add',
                                })}>
                        <Image style={{ width: 18, height: 18 }} source={require('../../assets/icons/GM.png')} />
                        </TouchableOpacity>
                    </View>
                    {/* Card Start here  */}
                    {languageSkills && languageSkills.map((item, index) => (
                        <View key={index} style={{ borderRadius: 8, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <View>
                                <Text style={{ color: '#051F4E', fontWeight: 'bold', fontSize: 15 }}>{item.name}</Text>
                                <Text>{item.selected_proficiency ? item.selected_proficiency.value : 'No selected_proficiency'}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('addLanguage', {
                                    type: 'update',
                                    list: languageSkills, 
                                    index : index
                                })}>
                            <View>
                                <Image style={{ width: 15, height: 15 }} source={require('../../assets/icons/edit-pencil.png')} />
                            </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                <AvailableDropUp
                    visible={availblePopUp}
                    setVisible={setAvailblePopUp} />
                <MyGoalsModal
                    visible={myGoalsPopUp}
                    setVisible={setMyGoalsPopUp}
                />
                <AddSection
                    visible={addSectionPopUp}
                    setVisible={setAddSectionPopUp}
                />
                <EditOverViewModal
                    data={overView}
                    visible={editOveView}
                    setVisible={setEditOverView}
                />
                <EditDescriptionModal
                    value={description}
                    visible={editDescription}
                    setVisible={setEditDescription}
                />
            </View>
        </ScrollView >

    )
}
const styles = StyleSheet.create({
    bannerImage: {
        resizeMode: 'cover',
        width: WINDOW_WIDTH,
        height: 100
    },
    profileImg: {
        width: 80,
        height: 80,
        borderRadius: 60,
    },
    profileDetailsWrapper: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'white'
    },
    name: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 22,
        color: '#051F4E'
    },
    concetionsLabel: {
        color: '#77838F',
        fontFamily: 'Inter',
        marginRight: 10,
        fontSize: 12

    },
    concetions: {
        color: '#051F4E',
        fontFamily: 'Inter',
        fontWeight: 'bold',
    },
    contactLabel: {
        color: '#0F6BBF',
        fontFamily: 'Inter',
        fontWeight: 'bold',
    },
    divider: {
        backgroundColor: '#D1D5DB',
        height: 1,
    },
    InfoLabel: {
        color: '#051F4E',
        fontFamily: 'Inter',
        fontSize: 14
    },
    labelInfo: {
        color: '#051F4E',
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 5
    },
    connectionInfo: { flex: 1, justifyContent: 'center', borderRightColor: '#D1D5DB', marginHorizontal: 5, borderRightWidth: 1 },
    header: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 8,
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
    fontDesp: {
        color: '#77838F',
        lineHeight: 17,
        fontSize: 14,
        fontStyle: 'normal',
        fontFamily: 'Inter'
    }
});
export default MyProfile;