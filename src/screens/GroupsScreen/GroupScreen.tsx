import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import TextInputWithLabels from "../../components/TextInputWithLabels";
import { WINDOW_WIDTH } from "../../utils/style";
import GroupMorePopUp from "./GroupMorePopup";
import { getAllGroups, getInvitationRecievedList, getGroupRequestSentList, groupJoinedList, getMyGroupsList } from "../../api/api2";
// import GroupJoinedMorePopUp from "./groupsJoinedMorePopup";
import GroupJoinedMorePopUp from "./groupsJoinedMorePopup";

const GroupScreen = ({ navigation }) => {
    const GROUP_TYPE = ['Groups', 'Invitations', 'Joined', 'My Groups', 'Requested'];
    const [activeType, setActiveType] = useState('Groups');
    const [textSearch, setTextSearch] = useState('');
    const [groupMorePop, setGroupMorePop] = useState(false);
    const [groupJoinedMorePop, setGroupJoinedMorePop] = useState(false);
    const [pageNo, setPageNo] = useState('1');
    const [pageSize, setPageSize] = useState('10');
    const [searchText, setSearhText] = useState('');
    const [data, setData] = useState([]);

    const handleAPIs = () => {
        if (activeType == 'Groups') {
            (async () => {
                const GroupAllList = await getAllGroups(null, null, textSearch)
                console.log('GroupAllList  Result', GroupAllList)
                if (GroupAllList && GroupAllList.data &&  GroupAllList?.data?.data) {
                    setData(GroupAllList.data.data)
                }

            })();
        }
        else if (activeType == 'Invitations') {
            (async () => {
                const GroupInvitationsList = await getInvitationRecievedList(null, null, textSearch)
                console.log('GroupInvitationsList  Result', GroupInvitationsList)
                setData(GroupInvitationsList?.data.data)

            })();
        }
        else if (activeType === 'Joined') {
            (async () => {
                const GroupJoinedList = await groupJoinedList(null, null, textSearch)
                console.log('GroupJoinedList  Result', GroupJoinedList)
                setData(GroupJoinedList?.data.data)


            })();
        }
        else if (activeType === 'My Groups') {
            (async () => {
                const myGroupList = await getMyGroupsList(null, null, textSearch)
                console.log('myGroupList  Result', myGroupList)
                setData(myGroupList?.data.data)
            })();
        }
        else if (activeType === 'Requested') {
            (async () => {
                const RequestedList = await getGroupRequestSentList(null, null, textSearch)
                console.log('Requested  Result', RequestedList)
                setData(RequestedList?.data.data)
            })();
        }
    }
    useEffect(() => {
        handleAPIs();
    }, [activeType]);

    const getJoinnedCard = (item) => {
        return (
            <View style={{ paddingHorizontal: 30 }}>
                <View style={{ borderBottomColor: '#D1D5DB', borderBottomWidth: 1, flexDirection: 'row', paddingVertical: 20 }}>
                    <View style={{ flex: 2 }}><Image style={{ width: 54, height: 54 }} source={{ uri: item.imageURL }} /></View>
                    <View style={{ flex: 7, paddingHorizontal: 5 }}><Text style={{ color: '#051F4E', fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                        <Text>{item.isGroupMember ? item.isGroupMember : '20,000 members'}</Text>
                    </View>
                    {activeType == 'Groups' &&
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => setGroupMorePop(true)}>
                                <Image style={styles.dotimage} source={require('../../assets/icons/Property.png')} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    }
                    {activeType === 'Joined' &&
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => setGroupJoinedMorePop(true)}>
                                <Image style={styles.dotimage} source={require('../../assets/icons/Property.png')} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </View>
        )
    };
    const getInvitationCard = () => {
        return (
            <View style={{ paddingHorizontal: 30 }}>
                <View style={{ borderBottomColor: '#D1D5DB', borderBottomWidth: 1, flexDirection: 'row', paddingVertical: 20 }}>
                    <View style={{ flex: 2 }}><Image style={{ width: 54, height: 54 }} source={require('../../assets/icons/group-sample.png')} /></View>
                    <View style={{ flex: 6, paddingHorizontal: 5 }}><Text style={{ color: '#051F4E', fontSize: 16, fontWeight: 'bold' }}>UI Designer and UI Developer</Text>
                        <Text>20,000 members</Text>
                    </View>
                    <View style={{ flex: 3, flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image style={{ width: 40, height: 40, margin: 5 }} source={require('../../assets/icons/accept.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ width: 40, height: 40, margin: 5 }} source={require('../../assets/icons/reject.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    };

    const renderItem = ({ item }) => (
        <>

            {item === activeType ?
                <TouchableOpacity onPress={() => setActiveType(item)} >
                    <View style={styles.activeTypeBox}>
                        <Text style={styles.typeBoxlabel}>{item}</Text>
                    </View></TouchableOpacity> :
                <TouchableOpacity onPress={() => setActiveType(item)} >
                    <View style={styles.typeBox}>
                        <Text style={styles.typeBoxlabel}>{item}</Text>
                    </View>
                </TouchableOpacity>
            }

        </>
    );
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <Image style={styles.backBtn} source={require('../../assets/icons/backBtn.png')} />
                </TouchableOpacity>
                <View><Text style={styles.heading}>Groups</Text></View>
                {/* <View><Text style={styles.heading}>Create</Text></View> */}
            </View>
            <View style={styles.divider}></View>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={GROUP_TYPE}
                renderItem={renderItem}
            />
            <View style={styles.divider}></View>
            <View style={styles.header}>
                <TextInputWithLabels
                    styleContainer={styles.searchInput}
                    onSearch={() => { }}
                    onChange={(value: string) => setTextSearch(value)}
                    value={textSearch}
                    showCrossDeleteValue={true}
                    width={WINDOW_WIDTH - 30}
                    styleInputContainer={styles.styleInputContainer}
                    placeholder={'Search By group name...'}
                />
            </View>
            {data && data.length > 0  && data.map((item) => (
                <>
                    {/* {getJoinnedCard(item)} */}
                </>
            ))}
            {/* {getInvitationCard()} */}
            {/* {getInvitationCard()} */}
            <GroupMorePopUp
                visible={groupMorePop}
                setVisible={setGroupMorePop}
            />
            {/* <GroupJoinedMorePopUp
                visible={groupJoinedMorePop}
                setVisible={setGroupJoinedMorePop}
            /> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backBtn: {
        width: 20,
        height: 20,
        marginRight: 20
    },
    heading: {
        color: '#051F4E',
        fontSize: 20,
        fontFamily: 'Inter-Bold',
    },
    headingType: {
        fontSize: 18,
        fontFamily: 'Inter-Bold',
        color: '#051F4E',
        paddingHorizontal: 20
    },
    divider: {
        backgroundColor: '#D1D5DB',
        height: 1,
    },
    typeBox: {
        padding: 10,
        minWidth: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeTypeBox: {
        padding: 10,
        minWidth: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2edf7'
    },
    typeBoxlabel: {
        color: '#051F4E',
        fontWeight: 'bold',
        fontSize: 15
    },
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
    },
    dotimage: {
        height: 20,
        width: 20,
    },

})
export default GroupScreen; 
