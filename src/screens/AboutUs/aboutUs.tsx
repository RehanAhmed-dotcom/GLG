import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const AboutUs = ({navigation}) => {
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
          color="#E97400"
          size={20}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Nunito-SemiBold',
            color: '#E97400',
          }}>
          About Us
        </Text>
        <View style={{width: 20}}></View>
      </View>
      <ScrollView>
        <View style={{height: hp(25), width: wp(100)}}>
          <Image
            source={require('../../images/a.png')}
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
          />
        </View>
        <View style={{paddingHorizontal: 30, marginTop: 20}}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            {' '}
            Who we are: The Great Life Group
          </Text>
        </View>
        <View style={{width: wp(100), alignItems: 'center'}}>
          <View style={{paddingHorizontal: 30, marginTop: 10}}>
            <Text style={{color: 'white'}}>
              A nationwide group of professionals jointly striving to improve
              the economic climate for the urban community
            </Text>
          </View>
        </View>
        <View style={{width: wp(100), alignItems: 'center'}}>
          <View style={{paddingHorizontal: 30, marginTop: 10}}>
            <Text style={{color: 'white'}}>
              A nationwide group of professionals jointly striving to improve
              the economic climate for the urban community
            </Text>
          </View>
        </View>
        <View style={{width: wp(100), alignItems: 'center'}}>
          <View style={{paddingHorizontal: 30, marginTop: 10}}>
            <Text style={{color: 'white'}}>
              A nationwide group of professionals jointly striving to improve
              the economic climate for the urban community
            </Text>
          </View>
        </View>
        {/* <View style={{width: wp(100), alignItems: 'center'}}> */}
        <View style={{paddingHorizontal: 30, marginTop: 10}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Our key products are:
          </Text>
          <Text style={{color: 'white', fontSize: 16}}>- The GLG Hub</Text>
          <Text style={{color: 'white', fontSize: 16}}>- GLG TV</Text>
          <Text style={{color: 'white', fontSize: 16}}>
            - The Official National Blackout Directly
          </Text>
        </View>
        <View
          style={{
            width: wp(100),
            marginTop: 20,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{height: 40, width: 40}}
            source={require('../../images/fb.png')}
          />
          <Image
            style={{height: 40, width: 40, marginLeft: 20}}
            source={require('../../images/twitter.png')}
          />
          <Image
            style={{height: 40, width: 40, marginLeft: 20}}
            source={require('../../images/In.png')}
          />
          <Image
            style={{height: 40, width: 40, marginLeft: 20}}
            source={require('../../images/google.png')}
          />
        </View>
        <View
          style={{
            width: wp(100),
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Image
            style={{height: 40, width: 40, resizeMode: 'contain'}}
            source={require('../../images/youtube.png')}
          />
          <Image
            style={{height: 40, width: 40, marginLeft: 20}}
            source={require('../../images/insta.png')}
          />
          <Image
            style={{height: 40, width: 40, marginLeft: 20}}
            source={require('../../images/gay.png')}
          />
          <Image
            style={{height: 40, width: 40, marginLeft: 20}}
            source={require('../../images/snap.png')}
          />
        </View>
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

export default AboutUs;
