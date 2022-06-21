import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/EvilIcons';
const ProductLauching = ({navigation}) => {
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
          Product Launching
        </Text>
        <Text style={{fontSize: 20}}></Text>
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
        {[
          {
            first: 'Product name',
            last: 'Product Description',
            date: '04-01-2021',
            img: require('../../images/a.png'),
          },
          {
            first: 'Product name',
            last: 'Product Description',
            date: '04-01-2021',
            img: require('../../images/a.png'),
          },
          {
            first: 'Product name',
            last: 'Product Description',
            date: '04-01-2021',
            img: require('../../images/a.png'),
            nav: '',
          },
        ].map((item, index) => (
          <View key={index} style={{alignItems: 'center', marginTop: 30}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductDetails')}>
              <Image
                source={item.img}
                style={{width: wp('90%'), height: hp('25%')}}
              />
              <View
                style={{
                  height: 50,
                  backgroundColor: '#E97400',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  alignItems: 'center',
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  bottom: 20,
                }}>
                <View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      fontFamily: 'Nunito-SemiBold',
                    }}>
                    {item.first}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      fontFamily: 'Nunito-SemiBold',
                    }}>
                    {item.last}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default ProductLauching;
