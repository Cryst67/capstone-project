import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import colors from '../../constants/colors';
import { useTheme } from '../../contexts/ThemeContext';

const CustomTopTab = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode as keyof typeof colors];

  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BlurView
        tint={theme.mode}
        intensity={40}
        style={StyleSheet.absoluteFill}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const Icon = options.tabBarIcon;

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: 80,
              borderTopWidth: 1,
              borderTopColor: '#343536',
              paddingBottom: 10,
            }}
          >
            {Icon ? (
              <Icon
                color={isFocused ? activeColors.textColor : '#87888a'}
                size={24}
                focused={isFocused}
              />
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTopTab;
