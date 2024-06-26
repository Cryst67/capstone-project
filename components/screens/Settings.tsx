import React, { Ref } from 'react';
import { View, Text, Switch, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../contexts/ThemeContext';
import colors from '../../constants/colors';
import BottomSheet from '@gorhom/bottom-sheet';

const Settings = ({
  handleClose,
  bottomSheetRef,
}: {
  handleClose: () => void;
  bottomSheetRef: React.RefObject<BottomSheet>;
}) => {
  const insets = useSafeAreaInsets();
  const { theme, updateTheme } = useTheme();
  const isDarkMode = theme.mode === 'dark';

  const toggleTheme = () => updateTheme({ mode: isDarkMode ? 'light' : 'dark' });


  const dynamicStyles = StyleSheet.create({
    text: {
      color: isDarkMode ? 'white' : 'black', 
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDarkMode ? 'white' : 'black', 
      marginBottom: 20,
    },
    themeSwitchLabel: {
      fontSize: 16,
      color: isDarkMode ? 'white' : 'black', 
      marginRight: 10,
    },
    githubButtonText: {
      color: isDarkMode ? 'black' : 'black', 
      fontWeight: 'bold',
      textAlign: 'center',
    },
    closeButton: {
      backgroundColor: isDarkMode ? 'gray' : 'lightgray', 
      padding: 15,
      borderRadius: 5,
      marginVertical: 10,
    },
    closeButtonText: {
      color: isDarkMode ? 'white' : 'black', 
      fontWeight: 'bold',
      textAlign: 'center',
    },
    developersText: {
      color: isDarkMode ? 'white' : 'black', 
      fontStyle: 'italic',
      marginTop: 20,
    },
  });

  return (
    <BottomSheet
      backgroundStyle={{ backgroundColor: colors[theme.mode].backgroundColor }}
      enableOverDrag={false}
      handleIndicatorStyle={{ height: 0 }}
      ref={bottomSheetRef}
      index={-1}
      snapPoints={['100%']}
    >
      <View style={{ paddingTop: insets.top, backgroundColor: colors[theme.mode].backgroundColor, alignItems: 'center', padding: 20 }}>
        <Text style={dynamicStyles.sectionTitle}>Settings</Text>
        <View style={styles.themeSwitchContainer}>
          <Text style={dynamicStyles.themeSwitchLabel}>{isDarkMode ? 'Change to light theme' : 'Change to Dark Mode'}</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleTheme}
            value={isDarkMode}
          />
        </View>
        <TouchableOpacity style={styles.githubButton} onPress={() => Linking.openURL('https://github.com/Cryst67/capstone-project.git')}>
          <Text style={dynamicStyles.githubButtonText}>Visit our GitHub Repository</Text>
        </TouchableOpacity>
        <TouchableOpacity style={dynamicStyles.closeButton} onPress={handleClose}>
          <Text style={dynamicStyles.closeButtonText}>Close</Text>
        </TouchableOpacity>
        <Text style={dynamicStyles.developersText}>Developed by Aryan, Grant, Casey</Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({

  
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  themeSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  themeSwitchLabel: {
    fontSize: 16,
    color: 'white',
    marginRight: 10,
  },
  githubButton: {
    backgroundColor: '#f5dd4b',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  githubButtonText: {
    color: 'black', 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'gray', 
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  closeButtonText: {
    color: 'white', 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  developersText: {
    color: 'white',
    fontStyle: 'italic',
    marginTop: 20,
  },
});

export default Settings;
