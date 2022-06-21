import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const HotDetails = ({navigation}) => {
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
          Topic Detail
        </Text>
        <View style={{width: 20}}></View>
      </View>
      <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center'}}>
        <View
          style={{
            height: hp(30),
            width: wp(90),
            marginTop: 10,
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../images/will.png')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View
          style={{
            height: hp(7),
            width: wp(90),
            marginTop: 20,
            borderRadius: 15,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            Birthday Party
          </Text>
        </View>
        <View
          style={{
            width: wp(90),
            marginTop: 20,
            paddingVertical: 10,
            borderRadius: 15,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <Text style={{color: 'white'}}>
            I am celebrating my Birthday at Home. I would like to celebrate with
            you please come join us and be the part of our party. I am
            celebrating my Birthday at Home. I would like to celebrate with you
            please come join us and be the part of our party. I am celebrating
            my Birthday at Home. I would like to celebrate with you please come
            join us and be the part of our party.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(7),
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(6),
              width: wp(25),
              paddingHorizontal: 10,
              borderRadius: 5,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon name={'like1'} size={30} />
            <Text style={{marginLeft: 10}}>(150)</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(6),
              width: wp(25),
              paddingHorizontal: 10,
              borderRadius: 5,
              marginLeft: 30,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon name={'dislike1'} size={30} />
            <Text style={{marginLeft: 10}}>(150)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HotDetails;
