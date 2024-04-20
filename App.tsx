import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import colors from './constants/colors';

import Stratagems from './components/Stratagems';
import Home from './components/screens/Home';
import Header from './components/Header';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StatusBar style='light' />
        <Header />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{ headerShown: false, tabBarStyle: styles.tabBarStyle, tabBarShowLabel: false }}
          >
            <Tab.Screen
              options={{ tabBarIcon: () => <Entypo name='home' size={30} color={colors.dark.textColor} /> }}
              name='Home'
              component={Home}
            />
            <Tab.Screen
              options={{ tabBarIcon: () => <AntDesign name='search1' size={30} color={colors.dark.textColor} /> }}
              name='Settings'
              component={Stratagems}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
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
  tabBarStyle: { backgroundColor: colors.dark.backgroundColor },
});

export default App;
