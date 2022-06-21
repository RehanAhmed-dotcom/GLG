import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Home = ({navigation, route}) => {
  const {email} = route.params;
  console.log(email);
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {/* <ImageBackground
        resizeMode="contain"
        source={require('../../images/homeImg.png')}
        style={{
          height: hp('100%'),
          backgroundColor: 'black',
          // top: 20,
          // position: 'relative',
          width: '100%',
        }}> */}
      <View style={{height: wp(93), width: wp(100)}}>
        <Image
          resizeMode="cover"
          source={require('../../images/fuck.png')}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View
        style={{position: 'absolute', width: wp(100), alignItems: 'center'}}>
        <Text
          style={{
            color: '#E97400',
            fontSize: 18,
            marginTop: hp(15),
            fontWeight: 'bold',
          }}>
          WELCOME
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          height: hp(80),
          marginTop: hp(20),
          marginLeft: wp(5),
          // alignItems: 'center',
        }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
          <LinearGradient
            colors={['#E97400', 'black']}
            style={{
              width: wp(90),
              // position: 'absolute',
              marginVertical: 20,
              alignItems: 'center',
              // height: hp(75),
            }}>
            <Text style={{marginTop: 5, fontSize: 16}}>Your</Text>
            <Text style={{marginTop: 5, fontSize: 16}}>community</Text>
            <Text style={{marginTop: 5, fontSize: 16}}>
              is at your fingertips!
            </Text>
            <Text style={{marginTop: 5, fontSize: 16}}>
              The world is with your grasp!
            </Text>
            <Text style={{marginTop: 10, fontSize: 16}}>
              Connect in Your Hub
            </Text>
            <Text style={{marginTop: 10, fontSize: 16}}>or</Text>
            <Text style={{marginTop: 10, fontSize: 16, color: 'white'}}>
              Just order some grubs!
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 20,
                color: '#E97400',
                fontWeight: 'bold',
              }}>
              Dashboard
            </Text>

            {email == 'guest' ? (
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {[
                  {name: 'My Venues', nav: 'MyVenues'},
                  {name: 'My Eateries', nav: 'MyEatries'},
                  {name: 'My Social Media', nav: 'Construction'},
                  {name: 'Local Government', nav: 'LocalGov'},
                  {name: 'Hot Topic', nav: 'HotTopics'},
                  {name: 'Exlusive Savings', nav: 'Construction'},
                  {name: 'Educational & Funny', nav: 'Education'},
                  {name: 'Right Now Word', nav: 'Construction'},
                  {name: 'Product Launching', nav: 'ProductLauching'},
                  {name: 'Central Donation', nav: 'CentralDonation'},
                  {name: 'Merchandise', nav: 'Construction'},
                  {name: 'Cash Drawings', nav: 'Construction'},
                  {name: 'Search Events', nav: 'Events'},
                  {name: 'Spotlight', nav: 'Construction'},
                  {name: 'About Us', nav: 'AboutUs'},
                ].map((item, index) => (
                  <View
                    key={index}
                    style={
                      {
                        // width: '100%',
                        //   alignItems: 'center',
                        //   justifyContent: 'space-between',
                        // backgroundColor: 'red',
                        // flexDirection: 'row',
                        //   flexWrap: 'wrap',
                        // flex: 1,
                        //   justifyContent: 'space-between',
                      }
                    }>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(item.nav, {email: email})
                      }
                      style={{
                        height: hp(5),
                        marginTop: 20,
                        marginLeft: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        backgroundColor: '#E97400',
                        width: wp(40),
                      }}>
                      <Text style={{color: 'white'}}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ) : email == 'subscriber' ? (
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {[
                  {name: 'My Venues', nav: 'MyVenues'},
                  {name: 'My Eateries', nav: 'MyEatries'},
                  {name: 'My Social Media', nav: 'Construction'},
                  {name: 'Local Government', nav: 'LocalGov'},
                  {name: 'Hot Topic', nav: 'HotTopics'},
                  {name: 'Exlusive Savings', nav: 'Construction'},
                  {name: 'Educational & Funny', nav: 'Education'},
                  {name: 'Right Now Word', nav: 'Construction'},
                  {name: 'Product Launching', nav: 'ProductLauching'},
                  {name: 'Central Donation', nav: 'CentralDonation'},
                  {name: 'Merchandise', nav: 'Construction'},
                  {name: 'Cash Drawings', nav: 'Construction'},
                  {name: 'Search Events', nav: 'Events'},
                  {name: 'Spotlight', nav: 'Construction'},
                  {name: 'Notice Board', nav: 'Construction'},
                  {name: 'BlackOut Directory', nav: 'Construction'},
                  {name: 'GLG Hub TV', nav: 'Construction'},
                  {name: 'About Us', nav: 'AboutUs'},
                ].map((item, index) => (
                  <View
                    key={index}
                    style={
                      {
                        // width: '100%',
                        //   alignItems: 'center',
                        //   justifyContent: 'space-between',
                        // backgroundColor: 'red',
                        // flexDirection: 'row',
                        //   flexWrap: 'wrap',
                        // flex: 1,
                        //   justifyContent: 'space-between',
                      }
                    }>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(item.nav, {email: email})
                      }
                      style={{
                        height: hp(5),
                        marginTop: 20,
                        marginLeft: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        backgroundColor: '#E97400',
                        width: wp(40),
                      }}>
                      <Text style={{color: 'white'}}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ) : email == 'member' ? (
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {[
                  {name: 'My Venues', nav: 'MyVenues'},
                  {name: 'My Eateries', nav: 'MyEatries'},
                  {name: 'My Social Media', nav: 'Construction'},
                  {name: 'Local Government', nav: 'LocalGov'},
                  {name: 'Hot Topic', nav: 'HotTopics'},
                  {name: 'Exlusive Savings', nav: 'Construction'},
                  {name: 'Educational & Funny', nav: 'Education'},
                  {name: 'Right Now Word', nav: 'Construction'},
                  {name: 'Product Launching', nav: 'ProductLauching'},
                  {name: 'Central Donation', nav: 'CentralDonation'},
                  {name: 'Merchandise', nav: 'Construction'},
                  {name: 'Cash Drawings', nav: 'Construction'},
                  {name: 'Search Events', nav: 'Events'},
                  {name: 'Spotlight', nav: 'Construction'},
                  {name: 'Notice Board', nav: 'Construction'},
                  {name: 'BlackOut Directory', nav: 'Construction'},
                  {name: 'GLG Hub TV', nav: 'Construction'},
                  {name: 'List Your Event', nav: 'Construction'},
                  {name: 'Sponser Board', nav: 'Construction'},
                  {name: 'Benefits', nav: 'Construction'},
                  {name: 'Collab Board', nav: 'Construction'},
                  {name: 'About Us', nav: 'AboutUs'},
                ].map((item, index) => (
                  <View
                    key={index}
                    style={
                      {
                        // width: '100%',
                        //   alignItems: 'center',
                        //   justifyContent: 'space-between',
                        // backgroundColor: 'red',
                        // flexDirection: 'row',
                        //   flexWrap: 'wrap',
                        // flex: 1,
                        //   justifyContent: 'space-between',
                      }
                    }>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(item.nav, {email: email})
                      }
                      style={{
                        height: hp(5),
                        marginTop: 20,
                        marginLeft: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        backgroundColor: '#E97400',
                        width: wp(40),
                      }}>
                      <Text style={{color: 'white'}}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ) : (
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {[
                  {name: 'My Venues', nav: 'MyVenues'},
                  {name: 'My Eateries', nav: 'MyEatries'},
                  {name: 'My Social Media', nav: 'Construction'},
                  {name: 'Local Government', nav: 'LocalGov'},
                  {name: 'Hot Topic', nav: 'HotTopics'},
                  {name: 'Exlusive Savings', nav: 'Construction'},
                  {name: 'Educational & Funny', nav: 'Education'},
                  {name: 'Right Now Word', nav: 'Construction'},
                  {name: 'Product Launching', nav: 'ProductLauching'},
                  {name: 'Central Donation', nav: 'CentralDonation'},
                  {name: 'Merchandise', nav: 'Construction'},
                  {name: 'Cash Drawings', nav: 'Construction'},
                  {name: 'Search Events', nav: 'Events'},
                  {name: 'Spotlight', nav: 'Construction'},
                  {name: 'Notice Board', nav: 'Construction'},
                  {name: 'BlackOut Directory', nav: 'Construction'},
                  {name: 'GLG Hub TV', nav: 'Construction'},
                  {name: 'List Your Event', nav: 'Construction'},
                  {name: 'Sponser Board', nav: 'Construction'},
                  {name: 'About Us', nav: 'AboutUs'},
                ].map((item, index) => (
                  <View
                    key={index}
                    style={
                      {
                        // width: '100%',
                        //   alignItems: 'center',
                        //   justifyContent: 'space-between',
                        // backgroundColor: 'red',
                        // flexDirection: 'row',
                        //   flexWrap: 'wrap',
                        // flex: 1,
                        //   justifyContent: 'space-between',
                      }
                    }>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(item.nav, {email: email})
                      }
                      style={{
                        height: hp(5),
                        marginTop: 20,
                        marginLeft: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        backgroundColor: '#E97400',
                        width: wp(40),
                      }}>
                      <Text style={{color: 'white'}}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
          </LinearGradient>
        </ScrollView>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};
export default Home;
