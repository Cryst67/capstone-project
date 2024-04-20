import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import colors from '../../constants/colors';

const Settings = ({ handleClose }: { handleClose: () => void }) => {
  const insets = useSafeAreaInsets();
//todo fix location of close button so its not in the right 
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <Text style={styles.closeButtonText}>✕</Text>
      </TouchableOpacity>
      <Text style={styles.welcomeText}>Settings</Text>
      <Text style={styles.descriptionText}> Todo// --add dark theme toggle here .</Text>

      <TouchableOpacity style={styles.githubButton} onPress={() => Linking.openURL('https://github.com/Cryst67/capstone-project.git')}>
        <Text style={styles.githubButtonText}>Visit our GitHub Repository</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark.backgroundColor,
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#444', 
  },
  closeButtonText: {
    fontSize: 24,
    color: 'white',
  },
  welcomeText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, 
  },
  descriptionText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20, 
  },
  githubButton: {
    backgroundColor: '#ffd700', 
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    maxWidth: 300, 
  },
  githubButtonText: {
    color: '#000', 
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Settings;
