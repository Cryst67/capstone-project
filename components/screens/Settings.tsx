import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Button } from 'react-native';

const Settings = ({ handleClose }: { handleClose: () => void }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }}>
      <Button title='Close' onPress={handleClose} />
    </View>
  );
};

export default Settings;
