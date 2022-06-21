import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const SearchEvent = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
  const [title, setTitle] = useState('');
  const [disc, setDisc] = useState('');
  const [location, setLocation] = useState('');

  const [date, setDate] = useState(Date.now());
  const [date1, setDate1] = useState(Date.now());
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showDatePicker1 = () => {
    setDatePickerVisibility1(true);
  };
  const [formatedDate, setFormatedDate] = useState('');
  const [formatedDate1, setFormatedDate1] = useState('');
  const handleConfirm = (date) => {
    const currentDate = date;
    const mom = moment(currentDate).format('DD/MM/YYYY');
    setFormatedDate(mom);
    setDate(date);
    hideDatePicker();
  };
  const handleConfirm1 = (date) => {
    const currentDate = date;
    const mom = moment(currentDate).format('DD/MM/YYYY');
    setFormatedDate1(mom);
    setDate1(date);
    hideDatePicker1();
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideDatePicker1 = () => {
    setDatePickerVisibility1(false);
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
          Search For Calender Event
        </Text>
        <Text style={{fontSize: 20}}></Text>
      </View>
      <View
        style={{width: wp(100), alignItems: 'center', paddingHorizontal: 10}}>
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
          <Text style={{color: 'white'}}>Event Type</Text>
          <Text style={{color: 'red'}}> {disc == '' ? '*' : null}</Text>
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
            onChangeText={(text) => setDisc(text)}
            value={disc}
            style={{flex: 1, color: 'white'}}
          />
        </View>

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
              Start Date
            </Text>
            <Text style={{color: 'red'}}>
              {formatedDate1 == '' ? ' *' : null}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: 'white',
              fontFamily: 'Raleway-Regular',
            }}>
            {formatedDate1}
          </Text>
          <DateTimePickerModal
            isVisible={isDatePickerVisible1}
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
              Last Date
            </Text>
            <Text style={{color: 'red'}}>
              {formatedDate == '' ? ' *' : null}{' '}
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
            onConfirm={handleConfirm1}
            onCancel={hideDatePicker1}
          />
        </TouchableOpacity>
        <TouchableOpacity
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
          <Text style={{color: 'white', fontSize: 16}}>Submit Search</Text>
          <Icon name="arrowright" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SearchEvent;
