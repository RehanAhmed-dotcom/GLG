import React, {useState} from 'react';
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
const Events = ({navigation, route}) => {
  const {email} = route.params;
  const [auctionLeague, setAuctionLeague] = useState(true);
  const [snakeLeague, setSnakeLeague] = useState(false);
  // console.log('mem', email);
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
          Events
        </Text>
        {email == 'member' || email == 'partner' ? (
          <Icon1
            name="plus"
            color="#E97400"
            size={25}
            style={{bottom: 3}}
            onPress={() => navigation.navigate('NewEvent')}
          />
        ) : (
          <View style={{width: 20}}></View>
        )}
      </View>
      <View
        style={{
          height: hp(7),
          //   backgroundColor: 'blue',
          alignItems: 'center',
          width: wp(100),
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchEvent')}
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
          {/* <TextInput style={{flex: 1}} /> */}
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 15,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            setAuctionLeague(true);
            setSnakeLeague(false);
          }}
          style={{
            alignItems: 'center',
            borderBottomColor: auctionLeague ? '#E97400' : 'white',
            borderBottomWidth: 1,
            justifyContent: 'center',
            width: wp(45),
            height: hp(5),
          }}>
          <Text
            style={{
              color: auctionLeague ? '#E97400' : 'white',
              fontSize: 14,
              fontFamily: 'Nunito-SemiBold',
            }}>
            Auction League
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setAuctionLeague(false);
            setSnakeLeague(true);
          }}
          style={{
            alignItems: 'center',
            borderBottomColor: !auctionLeague ? '#E97400' : 'white',
            borderBottomWidth: 1,
            justifyContent: 'center',
            width: wp(45),
            height: hp(5),
          }}>
          <Text
            style={{
              color: !auctionLeague ? '#E97400' : 'white',
              fontSize: 14,
              fontFamily: 'Nunito-SemiBold',
            }}>
            Snake League
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {[
          {
            first: 'Event name',
            last: 'Description',
            date: '04-01-2021',
            time: '10:30 PM',
            img: require('../../images/a.png'),
          },
          {
            first: 'Event name',
            last: 'Description',
            date: '04-01-2021',
            time: '10:30 PM',
            img: require('../../images/a.png'),
          },
          {
            first: 'Event name',
            last: 'Description',
            date: '04-01-2021',
            time: '10:30 PM',
            img: require('../../images/a.png'),
            nav: '',
          },
        ].map((item, index) => (
          <View key={index} style={{alignItems: 'center', marginTop: 30}}>
            <TouchableOpacity>
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
                <View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      fontFamily: 'Nunito-SemiBold',
                    }}>
                    {item.date}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      textAlign: 'right',
                      fontFamily: 'Nunito-SemiBold',
                    }}>
                    {item.time}
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
export default Events;
