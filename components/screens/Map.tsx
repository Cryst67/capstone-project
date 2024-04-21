import { View, Image, ScrollView } from 'react-native';

import { useTheme } from '../../contexts/ThemeContext';
import colors from '../../constants/colors';
import Svg, { Image as SvgImage } from 'react-native-svg';

const Map = () => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode];

  const imageWidth = 350;
  const imageHeight = 350;

  // Calculate the center of the image
  const centerX = imageWidth / 2;
  const centerY = imageHeight / 2;

  // Adjust these values based on your data's coordinate system
  const pointSize = 40;
  const pointX = centerX - pointSize / 2; // Subtract half the size of the point image for centering
  const pointY = centerY - pointSize / 2;

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: activeColors.backgroundColor,
        paddingTop: 10,
      }}
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <View>
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
        <Svg
          height='350'
          width='350'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <SvgImage
            width={40}
            height={40}
            href={require('../../assets/superearth.png')}
            x={pointX}
            y={pointY}
          />
        </Svg>
      </View>
    </ScrollView>
  );
};

export default Map;
