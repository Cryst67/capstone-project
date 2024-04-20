import { View, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import colors from '../constants/colors';

const Header = ({ openSettings }: { openSettings: () => void }) => {
  const theme = { mode: 'dark' };
  const activeColors = colors[theme.mode as keyof typeof colors];

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top }]}>
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
          color='white'
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
  header: {
    justifyContent: 'space-between',
    opacity: 90,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
});

export default Header;
