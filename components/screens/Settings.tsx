import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Button, Text } from 'react-native';
import colors from '../../constants/colors';

const Settings = ({ handleClose }: { handleClose: () => void }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        backgroundColor: colors.dark.backgroundColor,
      }}
    >
      <Button title='Close' onPress={handleClose} />
      <Text style={{ color: 'white' }}>Hello</Text>
    </View>
  );
};

export default Settings;
