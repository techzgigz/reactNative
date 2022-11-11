import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ConnectionScreen from '../screens/ConnectionScreen/ConnectionScreen';
import CreatepostScreen from '../screens/CreatepostScreen/CreatepostScreen';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import PersonalDetails from '../screens/SignupScreen/PersonalDetails';
import { useSelector } from 'react-redux';
import MyProfile from '../screens/myProfile/myProfile';
import GroupScreen from '../screens/GroupsScreen/GroupScreen';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const home = require('../assets/icons/Home.png');
const home_outline = require('../assets/icons/Home-outline.png');
const connection = require('../assets/icons/Connection.png');
const connection_outline = require('../assets/icons/Connection-outline.png');
const bell = require('../assets/icons/Bell.png');
const bell_outline = require('../assets/icons/Bell-outline.png');
const chat = require('../assets/icons/Chat.png');
const chat_outline = require('../assets/icons/Chat-outline.png');
const addpost = require('../assets/icons/btn-fab.png');

const CustomDrawer = (props) => {
    const { userInfo } = useSelector(state => state.userLogin);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={{ borderBottomColor : '#77838F' , marginBottom  :10 ,  borderBottomWidth : 1 , backgroundColor: '#FFFFFF', padding: 16 }}>
                    <View style={{}}>

                         { userInfo && userInfo.profilePicURL ? <Image style={{ height: 50, width: 50, borderRadius: 25 }} source={{ uri: userInfo && userInfo.profilePicURL }} /> :
                            <Image style={{ height: 50, width: 50, borderRadius: 25 }} source={require('../assets/icons/avatar.png')} />
                        }
                        <View style={{ marginTop: 16 }}>
                            <Text style={{ color: '#051F4E', fontSize: 16, fontWeight: '700', }}>{ userInfo && userInfo.firstName ? userInfo.firstName : '*****'} {userInfo &&  userInfo.lastName}</Text>
                            <Text style={{ color: '#77838F', fontSize: 12, fontWeight: '400', marginTop: 4 }}>View profile</Text>
                        </View>
                    </View>
                </View>
                <View >
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        </View>
    );
};

const DrawerStack = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
                screenOptions={{
                    headerShown: false,
                    drawerActiveBackgroundColor: '#0F6BBF0A',
                    drawerActiveTintColor: '#0F6BBF0A',
                    drawerLabelStyle: { fontSize: 16, fontWeight: '500', color: '#051F4E' }
                }}>
                <Drawer.Screen name="People viewed my profile" component={DashboardStack} />
                <Drawer.Screen name="Groups" component={GroupScreen} />
                <Drawer.Screen name="Account" component={CreatepostScreen} />
                <Drawer.Screen name="Business" component={CreatepostScreen} />
                <Drawer.Screen name="Growth Tool" component={CreatepostScreen} />
                <Drawer.Screen name="My Learning" component={CreatepostScreen} />
                {/* <Drawer.Screen name="SearchScreen" component={SearchScreen} /> */}
                <Drawer.Screen name="Profile" component={ProfileStack} />
                {/* <Drawer.Screen name="Demo Signup " component={PersonalDetails} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    )
}


const hideTabBar = (route: any): 'none' | 'flex' => {
    const focusedRoute = getFocusedRouteNameFromRoute(route);

    return focusedRoute && [
        'CreatepostScreen',
    ].includes(focusedRoute)
        ? 'none'
        : 'flex';
}

const DashboardStack = () => {
    return (

        <Tab.Navigator
            initialRouteName={'HomeScreen'}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    display: hideTabBar(route),
                },
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? '#0F6BBF' : '#051F4E'
                    if (route.name === 'HomeScreen') {
                        return focused ? (
                            <Image style={styles.icon} source={home} tintColor={tintColor} resizeMode='contain' />
                        ) : (
                            <Image style={styles.icon} source={home_outline} tintColor={tintColor} resizeMode='contain' />
                        );
                    } else if (route.name === 'ConnectionScreen') {
                        return focused ? (
                            <Image style={styles.icon} source={connection} tintColor={tintColor} resizeMode='contain' />
                        ) : (
                            <Image style={styles.icon} source={connection_outline} tintColor={tintColor} resizeMode='contain' />
                        );
                    } else if (route.name === 'CreatepostScreen') {
                        return focused ? (
                            <Image style={{ height: 36, width: 36 }} source={addpost} resizeMode='contain' />
                        ) : (
                            <Image style={{ height: 36, width: 36 }} source={addpost} resizeMode='contain' />
                        );
                    }
                    else if (route.name === 'NotificationScreen') {
                        return focused ? (
                            <Image style={styles.icon} source={bell} tintColor={tintColor} resizeMode='contain' />
                        ) : (
                            <Image style={styles.icon} source={bell_outline} tintColor={tintColor} resizeMode='contain' />
                        );
                    }
                    else if (route.name === 'ChatScreen') {
                        return focused ? (
                            <Image style={styles.icon} source={chat} tintColor={tintColor} resizeMode='contain' />
                        ) : (
                            <Image style={styles.icon} source={chat_outline} tintColor={tintColor} resizeMode='contain' />
                        );
                    }
                },
                tabBarLabel: ({ color }) => {
                    if (route.name === 'HomeScreen') {
                        return (
                            <Text
                                style={[
                                    styles.fontsInTabs,
                                    { color: color },
                                ]}
                            >
                                {'Home'}
                            </Text>
                        );
                    }
                    else if (route.name === 'ConnectionScreen') {
                        return (
                            <Text
                                style={[
                                    styles.fontsInTabs,
                                    { color: color },
                                ]}
                            >
                                {'Connections'}
                            </Text>
                        );
                    }
                    else if (route.name === 'NotificationScreen') {
                        return (
                            <Text
                                style={[
                                    styles.fontsInTabs,
                                    { color: color },
                                ]}
                            >
                                {'Notifications'}
                            </Text>
                        );
                    }
                    else if (route.name === 'ChatScreen') {
                        return (
                            <Text
                                style={[
                                    styles.fontsInTabs,
                                    { color: color },
                                ]}
                            >
                                {'Chat'}
                            </Text>
                        );
                    }
                },
                tabBarActiveTintColor: '#0F6BBF',
                tabBarInactiveTintColor: '#051F4E',
                tabBarActiveBackgroundColor: '#0F6BBF25',
            })}>
            <Tab.Screen name='HomeScreen' component={HomeScreen} />
            <Tab.Screen name='ConnectionScreen' component={ConnectionScreen} />
            <Tab.Screen name='CreatepostScreen' component={CreatepostScreen} options={{ tabBarItemStyle: { backgroundColor: 'white' } }} />
            <Tab.Screen name='NotificationScreen' component={NotificationScreen} />
            <Tab.Screen name='ChatScreen' component={ChatScreen} />
        </Tab.Navigator>
    )
}

export default DrawerStack

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20,
        marginTop: 5,
    },
    fontsInTabs: {
        fontSize: 12,
        letterSpacing: 0.2,
    },
})
