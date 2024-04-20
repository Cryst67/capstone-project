import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar';

import colors from './constants/colors';

import Stratagems from './components/Stratagems';
import Home from './components/screens/Home';
import Header from './components/Header';
import Settings from './components/screens/Settings';

const Tab = createBottomTabNavigator();

const App = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <SafeAreaProvider>
          <StatusBar style='light' />
          <Header openSettings={() => bottomSheetRef.current?.expand()} />
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
            <BottomSheet
              enableOverDrag={false}
              handleIndicatorStyle={{ height: 0 }}
              ref={bottomSheetRef}
              index={-1}
              snapPoints={['100%']}
            >
              <Settings handleClose={() => bottomSheetRef.current?.close()} />
            </BottomSheet>
          </NavigationContainer>
        </SafeAreaProvider>
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
