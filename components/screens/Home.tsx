import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';

import Stratagems from '../Stratagems';
import Map from '../Map';

import colors from '../../constants/colors';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      style={{ backgroundColor: colors.dark.backgroundColor }}
      screenOptions={{
        tabBarGap: 5,
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.tabBarStyle,
        tabBarIndicatorStyle: {
          backgroundColor: '#fbe74e',
          height: 3,
          width: 50,
          marginLeft: 75,
          borderRadius: 50,
        },
      }}
    >
      <Tab.Screen name='Galactic War' component={Map} />
      <Tab.Screen name='Wiki' component={Stratagems} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    textTransform: 'capitalize',
    fontSize: 15,
    fontWeight: 'bold',
  },
  tabBarStyle: { backgroundColor: colors.dark.backgroundColor },
});

export default Home;
