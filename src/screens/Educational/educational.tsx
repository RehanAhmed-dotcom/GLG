import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Education = ({navigation}) => {
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
          onPress={() => navigation.goBack()}
          name="arrowleft"
          size={20}
          color={'#E97400'}
        />
        <Text
          style={{
            color: '#E97400',
            fontSize: 16,
            fontFamily: 'Nunito-SemiBold',
          }}>
          Educational And Funny
        </Text>
        <Text></Text>
      </View>
      <ScrollView>
        <View>
          {[
            'Books to Read',
            'Healthy Home Cooking',
            'Free Annual Credit Reports',
            'Cutting Edge Health',
            'Learn a Word Daily',
          ].map((item, index) => (
            <View key={index} style={{width: wp(100), alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                  borderRadius: 30,
                  width: wp(80),
                  height: hp(7),
                  backgroundColor: '#E97400',
                }}>
                <Text style={{color: 'white'}}>{item}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View
          style={{
            height: hp(30),
            width: wp(100),
            paddingHorizontal: 20,
            marginTop: 30,
          }}>
          <Image
            source={require('../../images/will.png')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Education;
