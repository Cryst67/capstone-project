import { ScrollView } from 'react-native';
import Stratagems from '../Stratagems';
import { Stratagem } from '../../api/data/stratagems';
import colors from '../../constants/colors';
import { useTheme } from '../../contexts/ThemeContext';
const StratagemScreen = () => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode as keyof typeof colors];

  return (
    <ScrollView style={{ backgroundColor: activeColors.backgroundColor }}>
      {Object.values(Stratagem).map((stratagem, index) => (
        <Stratagems key={index} {...stratagem} />
      ))}
    </ScrollView>
  );
};
//this is unreferenced, do we need it?
