import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../contexts/ThemeContext';
import { View, Button } from 'react-native';
import colors from '../../constants/colors';
import BottomSheet from '@gorhom/bottom-sheet';
import { Ref } from 'react';

const Settings = ({
  handleClose,
  bottomSheetRef,
}: {
  handleClose: () => void;
  bottomSheetRef: Ref<BottomSheet>;
}) => {
  const insets = useSafeAreaInsets();
  const { theme, updateTheme } = useTheme();
  const activeColors = colors[theme.mode];

  return (
    <BottomSheet
      backgroundStyle={{
        backgroundColor: activeColors.backgroundColor,
      }}
      enableOverDrag={false}
      handleIndicatorStyle={{ height: 0 }}
      ref={bottomSheetRef}
      index={-1}
      snapPoints={['100%']}
    >
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
        <Button
          title='Dark Mode'
          onPress={() => updateTheme({ mode: 'dark' })}
        />
      </View>
    </BottomSheet>
  );
};

export default Settings;
