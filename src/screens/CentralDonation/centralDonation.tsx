import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const CentralDonation = ({navigation}) => {
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
          Central Donations
        </Text>
        <View style={{width: 20}}></View>
      </View>

      <View style={{height: hp(30), width: wp(100)}}>
        <Image
          source={require('../../images/pillar.png')}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center'}}>
          <LinearGradient
            colors={['#E97400', 'black']}
            style={{
              flex: 1,
              width: wp(90),
              paddingHorizontal: 10,
              paddingTop: 20,
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              No need to spend a lot of time searching for your organization or
              going to multiple sites. This is a central location to donate No
              need to spend a lot of time searching for your organization or
              going to multiple sites. This is a central location to donate
            </Text>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text
                style={{
                  marginTop: hp(10),
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                You can also donate to the{' '}
              </Text>
              <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                Great Life Group Below
              </Text>
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  height: hp(8),
                  backgroundColor: '#E97400',
                  width: '90%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                  borderRadius: 30,
                  marginTop: 20,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                  Donate
                </Text>
                <Icon name={'arrowright'} color="white" size={30} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: wp(100),
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
                alignItems: 'center',
                paddingRight: 30,
              }}>
              <Image
                source={require('../../images/Visa.png')}
                style={{height: 30, width: 60, resizeMode: 'contain'}}
              />
              <Image
                source={require('../../images/master.png')}
                style={{height: 30, width: 50, marginLeft: 10}}
              />
              <Image
                source={require('../../images/AE.png')}
                style={{
                  height: 30,
                  resizeMode: 'contain',
                  width: 50,
                  marginLeft: 10,
                }}
              />
              <Image
                source={require('../../images/Disco.png')}
                style={{
                  height: 30,
                  width: 40,
                  resizeMode: 'contain',
                  marginLeft: 10,
                }}
              />
            </View>
            <View
              style={{
                width: wp(100),
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
                // paddingRight: 20,
              }}>
              <View style={{height: 50, width: 100}}>
                <Image
                  source={require('../../images/PayPal.png')}
                  style={{height: '100%', resizeMode: 'contain', width: '100%'}}
                />
              </View>
              <Image
                source={require('../../images/Group.png')}
                style={{
                  height: 30,
                  width: 100,
                  marginRight: 50,
                  marginLeft: 10,
                }}
              />
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};
export default CentralDonation;
