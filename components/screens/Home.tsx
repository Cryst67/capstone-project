import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';

import Stratagems from '../Stratagems';
import Map from '../Map';
import { useTheme } from '../../contexts/ThemeContext';
import colors from '../../constants/colors';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode as keyof typeof colors];

  return (
    <Tab.Navigator
      style={{ backgroundColor: activeColors.backgroundColor }}
      screenOptions={{
        tabBarGap: 5,
        tabBarActiveTintColor: activeColors.textColor,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: { backgroundColor: activeColors.backgroundColor },
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
});

export default Home;
