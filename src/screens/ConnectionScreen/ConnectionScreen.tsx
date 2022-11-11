import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import TextInputWithLabels from '../../components/TextInputWithLabels';
import { WINDOW_WIDTH } from '../../utils/style';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import ConnectionCard from '../../components/connectionCard';
import ConnectionFilterModal from '../../components/connectionFilterModal';
import { getConnectionList } from '../../api/api2';


const ConnectionScreen = ({navigation}) => {
  const [textSearch, setTextSearch] = useState('');
  const [connectionFilterModal, setConnectionFilterModal] = useState(false);
  
  useEffect(() => {
    (async () => {
        const userSearch = await getConnectionList(textSearch)
        console.log('Connection List  Result', userSearch) 
    })();

}, [textSearch]);

  
  return (
    <ScrollView style={{ backgroundColor : 'white'}}> 
      <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')}>
        <Image style={styles.backBtn} source={require('../../assets/icons/backBtn.png')} />
        </TouchableOpacity>
      <View><Text style={styles.heading}>Connections</Text></View>
      </View>
      <View>
        <Text style={styles.headingType}>Pending Requests (6)</Text> 
        <View style={styles.header}>
                  <TextInputWithLabels
                    styleContainer={styles.searchInput}
                    onSearch={() => { }}
                    onChange={(value: string) => setTextSearch(value)}
                    value={textSearch}
                    showCrossDeleteValue={true}
                    width={WINDOW_WIDTH - 90}
                    styleInputContainer={styles.styleInputContainer}
                    placeholder={'Search course, student'}
                   />
                    <TouchableOpacity >
                    <Image style={styles.profile} source={require('../../assets/icons/filter.png')} />
                  </TouchableOpacity>
        </View>
        <View style={{ flexDirection : 'row'}}>
        <ConnectionCard  Cardtype = {'Requests'} />
        <ConnectionCard  Cardtype = {'Requests'} />
        </View>
        <View style={{ flexDirection : 'row'}}>
        <ConnectionCard  Cardtype = {'Requests'} />
        <ConnectionCard  Cardtype = {'Requests'} />
        </View><View style={{ flexDirection : 'row'}}>
        <ConnectionCard  Cardtype = {'Requests'} />
        <ConnectionCard  Cardtype = {'Requests'} />
        </View>
        <View style={{ flexDirection : 'row' , padding : 20 , alignItems : 'center' ,  justifyContent : 'space-between'}}>
          <Text style={{ fontSize : 18 ,  color : '#051F4E' , fontFamily : 'Inter-Bold' }}>People You May Know</Text> 
          <TouchableOpacity onPress={()=> setConnectionFilterModal(true)} >
            <Image style={styles.profile} source={require('../../assets/icons/filter.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection : 'row'}}>
        <ConnectionCard Cardtype = {'connections'} />
        <ConnectionCard  Cardtype = {'connections'}  />
        </View>
        <View style={{ flexDirection : 'row'}}>
        <ConnectionCard  Cardtype = {'connections'} />
        <ConnectionCard  Cardtype = {'connections'} />
        </View><View style={{ flexDirection : 'row'}}>
        <ConnectionCard  Cardtype = {'connections'} />
        <ConnectionCard  Cardtype = {'connections'} />
        </View>    
      </View>
      <ConnectionFilterModal
        visible={connectionFilterModal}
        setVisible={setConnectionFilterModal}
      />
      </ScrollView>

  )
}

export default ConnectionScreen

const styles = StyleSheet.create({
  headerWrapper : {
  padding : 20 ,
  flex : 1 , 
  flexDirection : 'row' , 
  alignItems : 'center'
  }, 
  backBtn : {
    width : 20 , 
    height: 20 ,
    marginRight : 20 
  },
  heading: {
    color : '#051F4E' , 
    fontSize : 24 ,
    fontFamily : 'Inter-Bold',
  },
  headingType: {
    fontSize : 18 ,
    fontFamily : 'Inter-Bold',
    color : '#051F4E' ,
    paddingHorizontal : 20
  } , 
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