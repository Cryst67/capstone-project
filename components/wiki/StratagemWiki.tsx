import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Stratagem } from '../../api/data/stratagems';
import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import colors from '../../constants/colors';

const StratagemWiki = () => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode as keyof typeof colors];

  const [activeStratagem, setActiveStratagem] = useState<string | null>(null);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: activeColors.backgroundColor,
        }}
      >
        {Object.entries(Stratagem).map(([key, stratagem]) => (
          <View
            key={key}
            style={[
              styles.stratagemContainer,
              activeStratagem === key && {
                borderColor: activeColors.primary,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() =>
                setActiveStratagem(activeStratagem === key ? null : key)
              }
            >
              <Text
                style={[
                  styles.stratagemName,
                  { color: activeColors.textColor },
                  activeStratagem === key && {
                    color: activeColors.primary,
                  },
                  ,
                ]}
              >
                {stratagem.name}
              </Text>
              {activeStratagem === key && (
                <>
                  <Text style={{ color: activeColors.textColor }}>
                    Cost: {stratagem.cost}
                  </Text>
                  <Text style={{ color: activeColors.textColor }}>
                    Sequence: {stratagem.sequence.join(', ')}
                  </Text>
                  <Text style={{ color: activeColors.textColor }}>
                    {stratagem.content.replace(/<\/?p>/g, '')}
                  </Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  stratagemContainer: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderColor: 'gray', // Default border color
  },
  stratagemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StratagemWiki;
