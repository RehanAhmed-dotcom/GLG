import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
const NewEvent = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [disc, setDisc] = useState('');
  const [location, setLocation] = useState('');
  const [site, setSite] = useState('');
  const [date, setDate] = useState(Date.now());

  const [time, setTime] = useState(Date.now());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showDatePicker1 = () => {
    setTimePickerVisibility(true);
  };
  const [formatedDate, setFormatedDate] = useState('');
  const [formatedTime, setFormatedTime] = useState('');
  const handleConfirm1 = (time) => {
    const currentTime = time;
    const mom1 = moment(currentTime).format('hh:mm');
    setFormatedTime(mom1);
    setTime(time);
  };
  const handleConfirm = (date) => {
    const currentDate = date;
    const mom = moment(currentDate).format('DD/MM/YYYY');
    setFormatedDate(mom);
    setDate(date);
    hideDatePicker();
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideDatePicker1 = () => {
    setTimePickerVisibility(false);
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
          New Event
        </Text>
        <Text style={{fontSize: 20}}></Text>
      </View>
      <ScrollView>
        <View
          style={{width: wp(100), alignItems: 'center', paddingHorizontal: 10}}>
          <Image
            style={{height: hp(25), width: '100%'}}
            source={require('../../images/will.png')}
          />

          <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
            <Text style={{color: 'white'}}>Event Title</Text>
            <Text style={{color: 'red'}}> {title == '' ? '*' : null}</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'grey',
              marginTop: 10,
              width: '100%',
              borderRadius: 10,
              height: hp(6),
            }}>
            <TextInput
              onChangeText={(text) => setTitle(text)}
              value={title}
              style={{flex: 1, color: 'white'}}
            />
          </View>
          <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
            <Text style={{color: 'white'}}>Discription</Text>
            <Text style={{color: 'red'}}> {disc == '' ? '*' : null}</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'grey',
              marginTop: 10,
              width: '100%',
              borderRadius: 10,
              //   height: hp(6),
            }}>
            <TextInput
              onChangeText={(text) => setDisc(text)}
              value={disc}
              multiline
              textAlignVertical="top"
              numberOfLines={4}
              style={{flex: 1, color: 'white'}}
            />
          </View>

          <TouchableOpacity
            onPress={showDatePicker}
            style={{
              height: hp(6),
              backgroundColor: 'black',
              elevation: 5,
              borderRadius: 10,
              width: '100%',
              margin: 5,
              paddingHorizontal: 10,
              marginTop: 10,
              borderColor: 'grey',
              borderWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontFamily: 'Raleway-SemiBold', color: 'white'}}>
                Date
              </Text>
              <Text style={{color: 'red'}}>
                {formatedDate == '' ? ' *' : null}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                fontFamily: 'Raleway-Regular',
              }}>
              {formatedDate}
            </Text>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              // minimumDate={new Date(currentY, currentM, currentD)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={showDatePicker1}
            style={{
              height: hp(6),
              width: '100%',
              backgroundColor: 'black',
              elevation: 5,
              borderRadius: 10,
              margin: 5,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: 'grey',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontFamily: 'Raleway-SemiBold', color: 'white'}}>
                Hour
              </Text>
              <Text style={{color: 'red'}}>
                {formatedTime == '' ? ' *' : null}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                fontFamily: 'Raleway-Regular',
              }}>
              {formatedTime}
            </Text>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleConfirm1}
              onCancel={hideDatePicker1}
            />
          </TouchableOpacity>
          <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
            <Text style={{color: 'white'}}>Event Location</Text>
            <Text style={{color: 'red'}}> {location == '' ? '*' : null}</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'grey',
              marginTop: 10,
              width: '100%',
              borderRadius: 10,
              height: hp(6),
            }}>
            <TextInput
              onChangeText={(text) => setLocation(text)}
              value={location}
              style={{flex: 1, color: 'white'}}
            />
          </View>
          <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
            <Text style={{color: 'white'}}>
              Web Site Link For More Information:
            </Text>
            <Text style={{color: 'red'}}> {site == '' ? '*' : null}</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'grey',
              marginTop: 10,
              width: '100%',
              borderRadius: 10,
              height: hp(6),
            }}>
            <TextInput
              placeholder="http://"
              placeholderTextColor="white"
              onChangeText={(text) => setSite(text)}
              value={site}
              style={{flex: 1, color: 'white'}}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Events')}
            style={{
              width: '100%',
              backgroundColor: '#E97400',
              borderRadius: 30,
              height: hp(7),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginVertical: 20,
            }}>
            <Text style={{color: 'white', fontSize: 16}}>Create</Text>
            <Icon name="arrowright" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default NewEvent;
