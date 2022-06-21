import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import UsersSelect from '../screens/Auth/usersselect';
import Login from '../screens/Auth/login';
import Login1 from '../screens/Auth/login1';
import SubmitEmail from '../screens/ForgotPassword/submitEmail';
import EnterCode from '../screens/ForgotPassword/enterCode';
import NewPassword from '../screens/ForgotPassword/newPassword';
import Home from '../screens/Home/home';
import Education from '../screens/Educational/educational';
import HotTopics from '../screens/HotTopics/hotTopics';
import HotDetails from '../screens/HotTopics/hotDetails';
import ProductLauching from '../screens/ProductLauching/productLauching';
import ProductDetails from '../screens/ProductLauching/productDetails';
import MyEatries from '../screens/myEatries/myEatries';
import EditEatries from '../screens/myEatries/editEatries';
import MyVenues from '../screens/myVenues/myVenues';
import EditVenues from '../screens/myVenues/editVenues';
import AboutUs from '../screens/AboutUs/aboutUs';
import CentralDonation from '../screens/CentralDonation/centralDonation';
import BooksToRead from '../screens/BooksToRead/booksToRead';
import LocalGov from '../screens/LocalGov/localGov';
import Events from '../screens/Events/events';
import NewEvent from '../screens/Events/newEvent';
import SearchEvent from '../screens/Events/searchEvent';
import Construction from '../screens/construction/construction';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="UsersSelect" component={UsersSelect} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Login1" component={Login1} />
        <Stack.Screen name="SubmitEmail" component={SubmitEmail} />
        <Stack.Screen name="EnterCode" component={EnterCode} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HotTopics" component={HotTopics} />
        <Stack.Screen name="LocalGov" component={LocalGov} />
        <Stack.Screen name="HotDetails" component={HotDetails} />
        <Stack.Screen name="ProductLauching" component={ProductLauching} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="MyEatries" component={MyEatries} />
        <Stack.Screen name="EditEatries" component={EditEatries} />
        <Stack.Screen name="MyVenues" component={MyVenues} />
        <Stack.Screen name="EditVenues" component={EditVenues} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="CentralDonation" component={CentralDonation} />
        <Stack.Screen name="BooksToRead" component={BooksToRead} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Construction" component={Construction} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="NewEvent" component={NewEvent} />
        <Stack.Screen name="SearchEvent" component={SearchEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // <Education />;
};
export default Root;
