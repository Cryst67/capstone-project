import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';

import colors from './constants/colors';

import Layout from './components/layout/Layout';
import Header from './components/Header';
import Settings from './components/screens/Settings';

const App = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar style='light' />
        <Header openSettings={() => bottomSheetRef.current?.expand()} />
        <NavigationContainer>
          <Layout />
          <BottomSheet
            backgroundStyle={{ backgroundColor: colors.dark.backgroundColor }}
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
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.backgroundColor,
    color: colors.dark.textColor,
  },
  tabBarStyle: {
    backgroundColor: colors.dark.backgroundColor,
  },
});

export default App;
