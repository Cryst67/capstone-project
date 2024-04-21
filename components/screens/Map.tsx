import { View, Text, Image, ScrollView } from 'react-native';

import { useTheme } from '../../contexts/ThemeContext';
import colors from '../../constants/colors';

const Map = () => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode];

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: activeColors.backgroundColor,
        paddingTop: 10,
      }}
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
    >
      {theme.mode === 'dark' ? (
        <Image
          source={require('../../assets/warmap_dark.png')}
          style={{ width: 350, height: 350 }}
        />
      ) : (
        <Image
          source={require('../../assets/warmap_light.png')}
          style={{ width: 350, height: 350 }}
        />
      )}
    </ScrollView>
  );
};

export default Map;
