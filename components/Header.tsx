import { View, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={{ width: 44 }} />
      <Image style={styles.logo} source={require('../assets/helldivers_logo.jpeg')} />
      <Feather name='settings' size={24} color='white' style={{ paddingRight: 20 }} />
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
  },
});

export default Header;
