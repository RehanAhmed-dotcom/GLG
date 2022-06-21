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
import Icon from 'react-native-vector-icons/EvilIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ProductDetails = ({navigation}) => {
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
          Product Details
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
        <View
          style={{
            height: hp(25),
            width: wp(90),
            marginTop: 10,
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../images/a.png')}
            style={{height: '100%', resizeMode: 'contain', width: '100%'}}
          />
        </View>

        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>
            4 in 1 Amazing Selfie Pen!
          </Text>
          <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              marginTop: 10,
            }}></View>
        </View>
        <View style={{paddingHorizontal: 20, marginVertical: 30}}>
          <Text style={{color: 'white'}}>--- Charging Cable</Text>
          <Text style={{color: 'white'}}>--- Remote Selfie Stick</Text>
          <Text style={{color: 'white'}}>--- Ballpoint Pen</Text>
          <Text style={{color: 'white'}}>--- Stylus</Text>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text style={{color: 'white'}}>
            Pair with your phone, set your phone , anywhere position yourself
            anywheree
          </Text>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 30}}>
          <Text style={{color: 'white'}}>
            Instantly have the freedom and power to take the best selfie
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default ProductDetails;
