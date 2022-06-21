import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import {resetPassword} from '../../lib/api';
import {Item, Label, Input} from 'native-base';
const NewPassword = ({navigation}) => {
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [password_confirmation, setCon_Password] = useState('');
  const [conErr, setConErr] = useState('');
  // const {email, token} = route.params;
  const [emailError, setEmailError] = useState(false);

  const onChangeEmail = (Mail) => {
    if (ValidateEmail(Mail)) {
      setEmail(Mail);
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  const ValidateEmail = (email) => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        email.replace(/\s/g, ''),
      )
    ) {
      return true;
    }
    return false;
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 56,
          backgroundColor: 'white',
          elevation: 3,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <Icon name="arrowleft" size={20} onPress={() => navigation.goBack()} />
        <Text
          style={{marginLeft: 20, fontSize: 16, fontFamily: 'Nunito-SemiBold'}}>
          Forgot Password
        </Text>
      </View>
      <View style={{paddingHorizontal: 15, marginTop: 10}}>
        <Text style={{fontSize: 16, fontFamily: 'Nunito-Regular'}}>
          Please enter your new password
        </Text>
        {/* <Text>password to update:</Text> */}
      </View>
      <View style={{alignItems: 'center'}}>
        <Item
          floatingLabel
          style={{
            width: '90%',
            marginTop: 30,
            marginBottom: 10,
            borderBottomColor: passwordErr ? 'red' : '#797979',
          }}
          // error={emailError}
        >
          <Label
            style={{
              fontSize: 14,
              fontFamily: 'Nunito-Regular',
              color: '#797979',
            }}>
            New Password
          </Label>
          <Input
            value={password}
            secureTextEntry
            onChangeText={(Mail) => {
              passwordErr ? setPasswordErr('') : null;
              setPassword(Mail);
            }}
            selectionColor={'white'}
            placeholder="FIRST NAME"
            style={{
              // fontFamily: fonts['Gotham-Book'],
              fontSize: 16,
              color: 'black',
            }}
            // selectionColor={'white'}
            // {...globalStyles.placeholderTextColor}
            autoCapitalize="none"
            returnKeyType="next"
          />
          {/* {emailError && (
              <Text style={{color: 'red', fontSize: 10}}>Invalid Email</Text>
            )} */}
        </Item>
        <Item
          floatingLabel
          style={{
            width: '90%',
            marginBottom: 10,
            borderBottomColor: conErr ? 'red' : '#797979',
          }}
          // error={emailError}
        >
          <Label
            style={{
              fontSize: 14,
              fontFamily: 'Nunito-Regular',
              color: '#797979',
            }}>
            Confirm new Password
          </Label>
          <Input
            value={password_confirmation}
            secureTextEntry
            onChangeText={(Mail) => {
              conErr ? setConErr('') : null;
              setCon_Password(Mail);
            }}
            selectionColor={'white'}
            placeholder="FIRST NAME"
            style={{
              // fontFamily: fonts['Gotham-Book'],
              fontSize: 14,
              color: 'black',
            }}
            // selectionColor={'white'}
            // {...globalStyles.placeholderTextColor}
            autoCapitalize="none"
            returnKeyType="next"
          />
          {/* {emailError && (
              <Text style={{color: 'red', fontSize: 10}}>Invalid Email</Text>
            )} */}
        </Item>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            if (password && password_confirmation) {
              if (password != password_confirmation) {
                setPasswordErr('sad');
                setConErr('sad');
              } else {
                //       resetPassword({
                //         email,
                //         token,
                //         password,
                //         password_confirmation,
                //       }).then((responce) => {
                //         if (responce.status == 'success') {
                navigation.navigate('Login');
              }
              //  else {
              //           Alert.alert('Something went wrong');
              //         }
              //       });
              //       // navigation.navigate('Login');
              //     }
            } else {
              if (!password && !password_confirmation) {
                setPasswordErr('asf');
                setConErr('arr');
              } else if (!password) {
                setPasswordErr('asf');
              } else if (!password_confirmation) {
                setPasswordErr('as');
              }
            }
          }}
          style={{
            height: hp(7),
            borderRadius: 30,
            paddingHorizontal: 30,
            marginTop: 20,
            width: wp(90),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#E97400',
          }}>
          <Text
            style={{color: 'white', fontSize: 16, fontFamily: 'Nunito-Bold'}}>
            Update
          </Text>
          <Icon name="arrowright" color="white" size={25} />
        </TouchableOpacity>
        {/* <Text>hewo</Text> */}
      </View>
    </View>
  );
};
export default NewPassword;
