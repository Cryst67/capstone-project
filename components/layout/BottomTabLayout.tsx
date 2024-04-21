import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stratagems from '../screens/WikiScreen';
import Home from '../screens/Home';
import colors from '../../constants/colors';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CustomBottomTab from './CustomBottomTab';
import { useTheme } from '../../contexts/ThemeContext';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const BottomTabLayout = () => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'transparent', // Set background to transparent
          position: 'absolute',
          elevation: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: activeColors.textColor,
      }}
      tabBar={(props) => <CustomBottomTab {...props} />}
    >
      <Tab.Screen
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Entypo name='home' size={size} color={color} />
          ),
        }}
        name='Home'
        component={Home}
      />
      <Tab.Screen
        options={{
          title: 'Search',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name='search1' size={size} color={color} />
          ),
        }}
        name='Search'
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabLayout;
