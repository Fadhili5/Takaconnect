import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './app/tabs/home';
import RedeemPointsScreen from './app/tabs/redeemPoints';
import TrackTrashScreen from './app/tabs/trackTrash';
import SettingsScreen from './app/tabs/settings';
import DrawerContent from './app/tabs/drawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="RedeemPoints" component={RedeemPointsScreen} />
        <Drawer.Screen name="TrackTrash" component={TrackTrashScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;