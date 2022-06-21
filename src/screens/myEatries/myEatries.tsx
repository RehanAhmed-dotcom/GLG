import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/EvilIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MyEatries = ({navigation}) => {
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
        <Icon1
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
          My Eatery
        </Text>
        <Icon1
          name="plus"
          color="#E97400"
          size={25}
          style={{bottom: 3}}
          onPress={() => navigation.navigate('EditEatries')}
        />
      </View>
      <View
        style={{
          height: hp(7),
          //   backgroundColor: 'blue',
          alignItems: 'center',
          width: wp(100),
        }}>
        <View
          style={{
            backgroundColor: '#272727',
            flexDirection: 'row',
            borderRadius: 20,
            height: hp(6),
            width: wp(90),
            paddingHorizontal: 10,
            alignItems: 'center',
          }}>
          <Icon name="search" size={25} color="white" />
          <TextInput style={{flex: 1}} />
        </View>
      </View>
      <ScrollView>
        <View style={{width: wp(100), alignItems: 'center'}}>
          {[
            {
              img: require('../../images/will.png'),
              name: 'The Burger Shop',
              Shop: 'Shop Address and Other Info',
            },
            {
              img: require('../../images/will.png'),
              name: 'The Burger Shop',
              Shop: 'Shop Address and Other Info',
            },
            {
              img: require('../../images/will.png'),
              name: 'The Burger Shop',
              Shop: 'Shop Address and Other Info',
            },
            {
              img: require('../../images/will.png'),
              name: 'The Burger Shop',
              Shop: 'Shop Address and Other Info',
            },
            {
              img: require('../../images/will.png'),
              name: 'The Burger Shop',
              Shop: 'Shop Address and Other Info',
            },
            {
              img: require('../../images/will.png'),
              name: 'The Burger Shop',
              Shop: 'Shop Address and Other Info',
            },
            {
              img: require('../../images/will.png'),
              name: 'The Burger Shop',
              Shop: 'Shop Address and Other Info',
            },
            {
              img: require('../../images/will.png'),
              name: 'The Burger Shop',
              Shop: 'Shop Address and Other Info',
            },
          ].map((item, index) => (
            <TouchableOpacity
              // onPress={() => navigation.navigate('EditEatries')}
              key={index}
              style={{
                flexDirection: 'row',
                height: hp(10),
                width: wp(90),
                marginTop: 20,
                borderWidth: 1,
                // borderColor: 'white',
                alignItems: 'center',
                paddingHorizontal: 20,
                backgroundColor: '#272727',
              }}>
              <Image
                source={item.img}
                style={{height: 50, borderRadius: 25, width: 50}}
              />
              <View style={{marginLeft: 20}}>
                <Text
                  style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                <Text style={{color: 'white', marginTop: 10}}>{item.Shop}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{height: hp(5)}}></View>
      </ScrollView>
    </View>
  );
};
export default MyEatries;
