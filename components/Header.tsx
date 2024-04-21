import { View, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../contexts/ThemeContext';
import colors from '../constants/colors';

const Header = ({ openSettings }: { openSettings: () => void }) => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode];

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: activeColors.backgroundColor,
          justifyContent: 'space-between',
          opacity: 90,
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 5,
          paddingTop: insets.top,
        },
        { paddingTop: insets.top },
      ]}
    >
      <View style={{ width: 44 }} />
      {theme.mode === 'dark' ? (
        <Image
          style={styles.logo}
          source={require('../assets/helldivers_logo_dark.png')}
        />
      ) : (
        <Image
          style={styles.logo}
          source={require('../assets/helldivers_logo_light.png')}
        />
      )}
      <TouchableOpacity onPress={openSettings}>
        <Feather
          name='settings'
          size={24}
          color={activeColors.textColor}
          style={{ paddingRight: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

export default Header;
