import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Map from './components/Map';
import StratagemComponent from './components/Stratagems';

import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style='auto' />
        <Tab.Navigator>
          <Tab.Screen name='Map' component={Map} />
          <Tab.Screen name='Strategems' component={StratagemComponent} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
