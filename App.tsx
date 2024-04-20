import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import colors from './constants/colors';
import Map from './components/Map';
import StratagemComponent from './components/Stratagems';

import { View, SafeAreaView, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <NavigationContainer>
        <StatusBar style='light' />
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: styles.tabBarLabel,
            tabBarStyle: styles.tabBarStyle,
          }}
        >
          <Tab.Screen name='Galactic War' component={Map} />
          <Tab.Screen name='Wiki' component={StratagemComponent} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.backgroundColor,
    color: colors.dark.textColor,
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabBarLabel: {
    color: colors.dark.textColor,
    textTransform: 'capitalize',
    fontSize: 15,
    fontWeight: 'bold',
  },
  tabBarStyle: { backgroundColor: colors.dark.backgroundColor },
});

export default App;
