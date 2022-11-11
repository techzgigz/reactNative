import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextInputWithLabels from '../../components/TextInputWithLabels'
import { WINDOW_WIDTH } from '../../utils/style'
import { useSelector } from 'react-redux'
import { getNotificationsList } from '../../api/api2'

const NotificationScreen = ({ navigation }) => {
  const { userInfo } = useSelector(state => state.userLogin);
  const [textSearch, setTextSearch] = useState('');
  const [ notificationsData , setNotificationsData ] = useState();
  const [filteredValues, setFilteredValues] = useState(textSearch)

    useEffect(()=>{
      (async () => {
        const notificationsList =await getNotificationsList(null,null,null)
        console.log('notifications List',notificationsList)
        setNotificationsData(notificationsList)
      })();

  })
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

  const Card = () => {
    return (
      <View>
        <View style={styles.cardheader}>
          <View style={styles.leftheader}>
            <View>
              <Image style={styles.cardprofile} source={require('../../assets/icons/profile.jpg')} />
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', }}>
              <Text style={styles.textbold}>Miranda Ross</Text>
              <Text style={styles.lighttext}>3h ago</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image style={styles.dotimage} source={require('../../assets/icons/Property.png')} resizeMode='contain' />
          </TouchableOpacity>
        </View>
        <View style={styles.border} />
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.header}>
        <TextInputWithLabels
          styleContainer={styles.searchInput}
          onSearch={() => { }}
          onChange={(value: string) => setTextSearch(value)}
          value={textSearch}
          showCrossDeleteValue={true}
          width={WINDOW_WIDTH - 90}
          styleInputContainer={styles.styleInputContainer}
          placeholder={'Search course, student or instructor'}
        />
        <TouchableOpacity onPress={() => navigation.openDrawer()} >
          {userInfo.profilePicURL ? <Image style={{ height: 40, width: 40, borderRadius: 25 }} source={{ uri: userInfo.profilePicURL }} /> :
            <Image style={{ height: 40, width: 40, borderRadius: 25 }} source={require('../../assets/icons/avatar.png')} />
          }

        </TouchableOpacity>
      </View>
      <View style={styles.border} />
      <Card />
      <Card />
    </View>
  )
}

export default NotificationScreen

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
  },
  cardheader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  leftheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardprofile: {
    height: 32,
    width: 32,
    borderRadius: 16,
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
  lighttext: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#77838F'
  },
  border: {
    borderBottomWidth: 1,
    borderColor: '#D1D5DB'
  }
})
