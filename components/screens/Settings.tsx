import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../contexts/ThemeContext';
import { View, Button } from 'react-native';
import colors from '../../constants/colors';

const Settings = ({ handleClose }: { handleClose: () => void }) => {
  const insets = useSafeAreaInsets();
  const { theme, updateTheme } = useTheme();
  const activeColors = colors[theme.mode as keyof typeof colors];

  return (
    <View
      style={{
        paddingTop: insets.top,
        backgroundColor: activeColors.backgroundColor,
      }}
    >
      <Button title='Close' onPress={handleClose} />
      <Button
        title='Light Mode'
        onPress={() => updateTheme({ mode: 'light' })}
      />
      <Button title='Dark Mode' onPress={() => updateTheme({ mode: 'dark' })} />
    </View>
  );
};

export default Settings;
