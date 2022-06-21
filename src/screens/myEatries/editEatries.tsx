import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/EvilIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {launchImageLibrary} from 'react-native-image-picker';
const EditEatries = ({navigation}) => {
  const [pic, setPic] = useState('');
  const choosePic = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response.uri);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        setPic(source);
      }
    });
  };
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
          New Eatery
        </Text>
        <View style={{width: 20}}></View>
      </View>
      <View style={{width: wp(100), top: 25, alignItems: 'center'}}>
        <View style={{height: 100, width: 100}}>
          <TouchableOpacity onPress={choosePic}>
            {pic ? (
              <Image
                style={{
                  height: 100,
                  //   borderWidth: 1,
                  // borderColor: 'black',
                  borderRadius: 50,
                  width: 100,
                  // marginBottom: hp('5%'),
                }}
                source={pic}
              />
            ) : (
              <Image
                source={require('../../images/placeholder.png')}
                style={{height: 100, width: 100}}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <ScrollView>
          <View
            style={{
              width: wp(90),
              borderRadius: 10,
              marginTop: hp(10),
              backgroundColor: '#272727',
              paddingTop: 20,
              paddingHorizontal: 20,
            }}>
            <TextInput
              placeholder="Enter Eatery Name"
              placeholderTextColor="white"
              style={{
                //   flex: 1,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'white',
                height: 40,
                color: 'white',
                paddingHorizontal: 20,
              }}
            />
            <TextInput
              style={{
                //   flex: 1,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'white',
                marginTop: 15,
                height: 40,
                color: 'white',
                paddingHorizontal: 20,
              }}
              placeholder="Enter Eatery Email"
              placeholderTextColor="white"
            />
            <TextInput
              style={{
                //   flex: 1,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'white',
                marginTop: 15,
                height: 40,
                color: 'white',
                paddingHorizontal: 20,
              }}
              placeholder="Enter Eatery Address"
              placeholderTextColor="white"
            />
            <TextInput
              style={{
                //   flex: 1,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'white',
                marginTop: 15,
                height: 40,
                color: 'white',
                paddingHorizontal: 20,
              }}
              placeholder="Enter Eatery Phone No"
              placeholderTextColor="white"
            />
            <TextInput
              style={{
                //   flex: 1,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'white',
                marginTop: 15,
                height: 40,
                color: 'white',
                paddingHorizontal: 20,
              }}
              placeholder="Enter New Note"
              placeholderTextColor="white"
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('MyEatries')}
              style={{
                height: hp(8),
                width: wp(80),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#E97400',
                marginVertical: 30,
                borderRadius: 30,
              }}>
              <Text style={{fontSize: 16, color: 'white'}}>Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default EditEatries;
