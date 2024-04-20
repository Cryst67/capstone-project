import { View, StyleSheet, Image, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({ openSettings }: { openSettings: () => void }) => {
  return (
    <View style={styles.header}>
      <View style={{ width: 44 }} />
      <Image style={styles.logo} source={require('../assets/helldivers_logo.jpeg')} />
      <TouchableOpacity onPress={openSettings}>
        <Feather name='settings' size={24} color='white' style={{ paddingRight: 20 }} />
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
});

export default Header;
