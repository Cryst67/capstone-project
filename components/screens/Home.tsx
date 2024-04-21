import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';

import WikiScreen from './WikiScreen';
import GalacticWarScreen from './GalacticWarScreen';

import { useTheme } from '../../contexts/ThemeContext';
import colors from '../../constants/colors';
import { StatusBar } from 'expo-status-bar';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode as keyof typeof colors];

  return (
    <>
      <StatusBar style={theme.mode === 'dark' ? 'light' : 'dark'} />
      <Tab.Navigator
        style={{ backgroundColor: activeColors.backgroundColor }}
        screenOptions={{
          tabBarGap: 5,
          tabBarActiveTintColor: activeColors.textColor,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarStyle: { backgroundColor: activeColors.backgroundColor },
          tabBarIndicatorStyle: {
            backgroundColor: activeColors.primary,
            height: 3,
            width: 50,
            marginLeft: 75,
            borderRadius: 50,
          },
        }}
      >
        <Tab.Screen name='Galactic War' component={GalacticWarScreen} />
        <Tab.Screen name='Wiki' component={WikiScreen} />
      </Tab.Navigator>
    </>
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
