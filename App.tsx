import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

import colors from './constants/colors';

import BottomTabLayout from './components/layout/BottomTabLayout';
import Header from './components/Header';
import Settings from './components/screens/Settings';

const App = () => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode as keyof typeof colors];
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <ThemeProvider>
      <GestureHandlerRootView
        style={{
          flex: 1,
          backgroundColor: activeColors.backgroundColor,
        }}
      >
        <SafeAreaProvider>
          <Header openSettings={() => bottomSheetRef.current?.expand()} />
          <NavigationContainer>
            <BottomTabLayout />
            <Settings
              handleClose={() => bottomSheetRef.current?.close()}
              bottomSheetRef={bottomSheetRef}
            />
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export default App;
