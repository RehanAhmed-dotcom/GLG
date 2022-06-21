import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const BooksToRead = ({navigation}) => {
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
          Books to Read
        </Text>
        <Text style={{fontSize: 20}}></Text>
      </View>
      <View style={{width: wp(100), alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
          The Myth of Race
        </Text>
        <Text style={{color: 'white', marginTop: 15}}>
          By Robert Wald Sussman
        </Text>
      </View>
      <View style={{height: hp(60), width: wp(100)}}>
        <Image
          source={require('../../images/monky.png')}
          style={{height: '100%', resizeMode: 'contain', width: '100%'}}
        />
      </View>
      <View style={{width: wp(100), alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: wp(90),
            height: hp(8),
            borderRadius: 30,
            backgroundColor: '#E97400',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
            Pay Now - $19.34
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BooksToRead;
