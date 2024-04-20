import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stratagems from '../Stratagems';
import Home from '../screens/Home';
import colors from '../../constants/colors';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CustomTab from './CustomTab';

const Tab = createBottomTabNavigator();

const Layout = () => {
  const theme = { mode: 'dark' };
  const activeColors = colors[theme.mode as keyof typeof colors];

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
      tabBar={(props) => <CustomTab {...props} />}
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
        name='Settings'
        component={Stratagems}
      />
    </Tab.Navigator>
  );
};

export default Layout;
