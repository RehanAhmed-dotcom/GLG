import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, Image, Modal, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SplashScreen from 'react-native-splash-screen';
import {Item, Label, Input, Icon} from 'native-base';
import Icon1 from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
const UsersSelect = ({navigation}) => {
  const [vis, setVis] = useState(false);
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordErr, setPasswordErr] = useState('');
  const [password, setPassword] = useState('');
  const [vis1, setVis1] = useState(false);
  const onChangeEmail = (Mail) => {
    if (validateEmail(Mail)) {
      setEmail(Mail);
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  const validateEmail = (emailC: String) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      emailC.replace(/\s/g, ''),
    );
  };
  const myModal = () => {
    return (
      <Modal
        animationType="slide"
        visible={vis}
        transparent={true}
        onRequestClose={() => {
          setVis(false);
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00000088',
          }}>
          <View
            style={{
              height: hp(50),
              backgroundColor: 'white',
              borderRadius: 10,
              width: wp(90),
            }}>
            <View
              style={{
                width: wp(100),
                flexDirection: 'row',
                marginTop: 10,
                paddingHorizontal: 10,
                justifyContent: 'space-between',
              }}>
              <Icon1 name="arrowleft" size={20} onPress={() => setVis(false)} />
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Guest Login
              </Text>
              <View style={{width: 20}}></View>
            </View>
            <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
              <Item
                floatingLabel
                style={{
                  width: '90%',
                  marginTop: 50,
                  marginBottom: 20,
                  borderBottomColor: validateEmail(email)
                    ? emailErr
                      ? 'red'
                      : '#E97400'
                    : email == ''
                    ? emailErr
                      ? 'red'
                      : '#797979'
                    : 'red',
                }}
                success={validateEmail(email) === true}
                error={emailError}>
                <Label
                  style={{
                    fontSize: 14,
                    // fontFamily: 'Nunito-Regular',
                    color: '#797979',
                  }}>
                  Email
                </Label>
                <Input
                  value={email}
                  onChangeText={(Mail) => {
                    emailErr ? setEmailErr('') : null;
                    setEmail(Mail.toLowerCase());
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
                {email !== '' && validateEmail(email) === true && (
                  <Icon name="checkmark-circle" style={{color: '#E97400'}} />
                )}
                {/* {emailError && (
              <Text style={{color: 'red', fontSize: 10}}>Invalid Email</Text>
            )} */}
              </Item>
              {/* <Text>Hello bitch</Text> */}
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (validateEmail(email)) {
                    // login({email, password}).then((responce) => {
                    // if (responce) {
                    // console.log(responce);
                    // logged(responce)(dispatch);
                    // navigation.navigate('Home');
                    // } else {
                    // Alert.alert('Wrong Email or Password');
                    // }
                    // });
                    setVis(false);
                    navigation.navigate('Home', {email: 'guest'});
                  } else {
                    if (!validateEmail(email)) {
                      setEmailErr('asf');
                    }
                  }
                  // navigation.navigate('Home');
                }}
                style={{
                  height: hp(7),
                  borderRadius: 30,
                  paddingHorizontal: 30,
                  width: wp(80),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  alignItems: 'center',
                  backgroundColor: '#E97400',
                  elevation: 4,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontFamily: 'Nunito-Bold',
                  }}>
                  Login
                </Text>
                <Icon1 name="arrowright" color="white" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const myModal1 = () => {
    return (
      <Modal
        animationType="slide"
        visible={vis1}
        transparent={true}
        onRequestClose={() => {
          setVis1(false);
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            // paddingHorizontal: 20,
            justifyContent: 'center',
            backgroundColor: '#00000088',
          }}>
          <View
            style={{
              height: hp(50),
              borderRadius: 10,
              backgroundColor: 'white',
              width: wp(90),
            }}>
            <View
              style={{
                width: wp(100),
                flexDirection: 'row',
                marginTop: 10,
                paddingHorizontal: 10,
                justifyContent: 'space-between',
              }}>
              <Icon1
                name="arrowleft"
                size={20}
                onPress={() => setVis1(false)}
              />
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Subscriber Login
              </Text>
              <View style={{width: 20}}></View>
            </View>
            <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
              <Item
                floatingLabel
                style={{
                  width: '90%',
                  marginTop: 50,
                  marginBottom: 20,
                  borderBottomColor: validateEmail(email)
                    ? emailErr
                      ? 'red'
                      : '#E97400'
                    : email == ''
                    ? emailErr
                      ? 'red'
                      : '#797979'
                    : 'red',
                }}
                success={validateEmail(email) === true}
                error={emailError}>
                <Label
                  style={{
                    fontSize: 14,
                    // fontFamily: 'Nunito-Regular',
                    color: '#797979',
                  }}>
                  Email
                </Label>
                <Input
                  value={email}
                  onChangeText={(Mail) => {
                    emailErr ? setEmailErr('') : null;
                    setEmail(Mail.toLowerCase());
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
                {email !== '' && validateEmail(email) === true && (
                  <Icon name="checkmark-circle" style={{color: '#E97400'}} />
                )}
                {/* {emailError && (
            <Text style={{color: 'red', fontSize: 10}}>Invalid Email</Text>
          )} */}
              </Item>
              <Item
                floatingLabel
                style={{
                  width: '90%',
                  // height: hp(7),
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
                  Phone no
                </Label>
                <Input
                  value={password}
                  secureTextEntry
                  keyboardType="numeric"
                  onChangeText={(Pass) => {
                    passwordErr ? setPasswordErr('') : null;
                    setPassword(Pass);
                  }}
                  selectionColor={'white'}
                  placeholder="FIRST NAME"
                  style={{
                    // height: hp(7),
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
              {/* <Text>Hello bitch</Text> */}
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (validateEmail(email)) {
                    // login({email, password}).then((responce) => {
                    // if (responce) {
                    // console.log(responce);
                    // logged(responce)(dispatch);
                    // navigation.navigate('Home');
                    // } else {
                    // Alert.alert('Wrong Email or Password');
                    // }
                    // });
                    setVis1(false);
                    navigation.navigate('Home', {email: 'subscriber'});
                  } else {
                    if (!validateEmail(email)) {
                      setEmailErr('asf');
                    }
                  }
                  // navigation.navigate('Home');
                }}
                style={{
                  height: hp(7),
                  borderRadius: 30,
                  paddingHorizontal: 30,
                  width: wp(80),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  alignItems: 'center',
                  backgroundColor: '#E97400',
                  elevation: 4,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontFamily: 'Nunito-Bold',
                  }}>
                  Login
                </Text>
                <Icon1 name="arrowright" color="white" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['black', 'black', '#E97400', '#E97400']}
        style={{flex: 1, alignItems: 'center'}}>
        <View>
          <Image
            source={require('../../images/MainText.png')}
            style={{
              height: 200,
              width: 200,
              resizeMode: 'contain',
              marginTop: hp(5),
            }}
          />
        </View>
        <View style={{}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
            To Access App
          </Text>
        </View>
        <View>
          <Text style={{color: '#E97400', marginTop: 20}}>
            Create Account or Login
          </Text>
        </View>
        <View style={{marginTop: hp(8)}}>
          {[
            {name: 'Login as Guest', func: 'guest'},
            {name: 'Login as Subscriber', func: 'subscriber'},
            {name: 'Login as Partner', func: 'log'},
            {name: 'Login as Member', func: 'log1'},
          ].map((item, index) => (
            <View style={{width: wp(100), alignItems: 'center'}} key={index}>
              {/* <TouchableOpacity
                style={{backgroundColor: 'red'}}
                onPress={navigation.navigate('Login')}> */}
              <TouchableOpacity
                onPress={() => {
                  // navigation.navigate('Login')
                  if (item.func == 'guest') {
                    setVis(true);
                  } else if (item.func == 'subscriber') {
                    setVis1(true);
                  } else if (item.func == 'log1') {
                    navigation.navigate('Login1');
                  } else {
                    navigation.navigate('Login');
                  }
                }}
                style={{
                  height: hp(7),
                  // flexDirection: 'row',
                  alignItems: 'center',
                  elevation: 4,
                  justifyContent: 'center',
                  width: wp(80),
                  // paddingHorizontal: 20,
                  borderRadius: 30,
                  marginTop: 20,
                  // justifyContent: 'space-between',
                  backgroundColor: '#E97400',
                }}>
                <Text style={{fontSize: 16, color: 'white'}}>{item.name}</Text>
              </TouchableOpacity>
              {/* </TouchableOpacity> */}
            </View>
          ))}
        </View>
      </LinearGradient>
      {myModal()}
      {myModal1()}
    </View>
  );
};
export default UsersSelect;
