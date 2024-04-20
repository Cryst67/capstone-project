import { View, StyleSheet, Image, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({ openSettings }: { openSettings: () => void }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top }]}>
      <View style={{ width: 44 }} />
      <Image
        style={styles.logo}
        source={require('../assets/helldivers_logo_white.png')}
      />
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
