import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Beranda from './screens/Beranda';
import TentangKami from './screens/TentangKami';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Beranda"
        component={Beranda}
        options={{
          title: 'My home', // change header text
          headerStyle: {
            backgroundColor: '#2b8be7', // change header background color
          },
          headerTintColor: '#fff', // change header text color
          headerTitleStyle: {
            fontWeight: 'bold', // change header text font style
          },
        }}
      />
      <Stack.Screen name={'TentangKami'} component={TentangKami}/>
    </Stack.Navigator>
  );
};

export default Navigator;
