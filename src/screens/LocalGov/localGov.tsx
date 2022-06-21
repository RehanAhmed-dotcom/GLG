import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const LocalGov = ({navigation}) => {
  const [extraData, setExtraData] = useState('');
  const [extra, setExtra] = useState({});
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          height: 56,
          backgroundColor: 'black',
          elevation: 3,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <Icon
          name="arrowleft"
          size={20}
          color="#E97400"
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            marginLeft: 20,
            fontSize: 16,
            color: '#E97400',
            fontFamily: 'Nunito-SemiBold',
          }}>
          LOCAL GOVERNMENT
        </Text>
        <View style={{width: 20}}></View>
      </View>
      <ScrollView>
        <View style={{flex: 1}}>
          <ImageBackground
            resizeMode="cover"
            source={require('../../images/Gov.png')}
            style={{height: '100%', width: '100%', bottom: hp(5)}}>
            <View
              style={{
                marginLeft: 15,
                //   backgroundColor: 'red',
                marginRight: wp(35),
                marginTop: hp(25),
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#E97400',
                }}>
                Florida
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginTop: 10,
                  // fontWeight: 'bold',
                  color: '#E97400',
                }}>
                There are 67 countries in the state of Florida. There are 282
                cities, 109 towns and 20 villages, a total of 411 incoporated
                municipalities distributed across the 67 countries. Each country
                having it's on governing body and each city within the country
                having its own leaders.
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 15,
                backgroundColor: 'grey',
                height: hp(7),
                alignItems: 'center',
                marginTop: 10,
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Top Five Countries in Florida by population
              </Text>
            </View>
            {!extraData ? (
              <View style={{marginHorizontal: 15, marginTop: 10}}>
                {[
                  {id: '1', name: 'Miami Dade', num: '2716,960'},
                  {id: '2', name: 'Broward', num: '1943,432'},
                  {id: '3', name: 'Palm Beach', num: '1423,321'},
                  {id: '4', name: 'Hillsborough', num: '1411,312'},
                  {id: '5', name: 'Orange', num: '1302,111'},
                ].map((item, index) => (
                  <View key={index}>
                    <TouchableOpacity
                      onPress={() => {
                        setExtraData('abc');
                        setExtra({name: item.name, id: item.id, num: item.num});
                      }}
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                        height: hp(7),
                        borderWidth: 1,
                        borderColor: 'white',
                      }}>
                      <Text style={{fontWeight: 'bold', color: 'white'}}>
                        {item.id}
                      </Text>
                      <Text style={{fontWeight: 'bold', color: 'white'}}>
                        {item.name}
                      </Text>
                      <Text style={{fontWeight: 'bold', color: 'white'}}>
                        {item.num}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ) : (
              <View
                style={{
                  borderColor: 'white',
                  borderWidth: 1,
                  marginHorizontal: 15,
                  marginTop: 10,
                  height: hp(35),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setExtraData('');
                    // setExtra({name: item.name, id: item.id, num: item.num});
                  }}
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    height: hp(7),
                    // borderWidth: 1,
                    // borderColor: 'white',
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>
                    {extra.id}
                  </Text>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>
                    {extra.name}
                  </Text>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>
                    {extra.num}
                  </Text>
                </TouchableOpacity>
                <View style={{paddingHorizontal: 10}}>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>
                    First largest country by population of the 67 countries in
                    Florida
                  </Text>
                </View>
              </View>
            )}
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};
export default LocalGov;
