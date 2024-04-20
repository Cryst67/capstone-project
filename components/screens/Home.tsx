import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';

import Stratagems from '../Stratagems';
import Map from '../Map';

import colors from '../../constants/colors';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen name='Galactic War' component={Map} />
      <Tab.Screen name='Wiki' component={Stratagems} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: colors.dark.textColor,
    textTransform: 'capitalize',
    fontSize: 15,
    fontWeight: 'bold',
  },
  tabBarStyle: { backgroundColor: colors.dark.backgroundColor },
});

export default Home;
