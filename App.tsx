import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Map from './components/Map';
import StratagemComponent from './components/Stratagems';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Map' component={Map} />
        <Tab.Screen name='Strategems' component={StratagemComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
