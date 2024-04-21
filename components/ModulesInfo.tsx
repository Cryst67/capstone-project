import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import colors from '../constants/colors';
import { modules } from '../api/data/modules';
import { useTheme } from '../contexts/ThemeContext';

const ModulesInfo = () => {
    const { theme } = useTheme(); // Use the theme from the context
    const activeColors = colors[theme.mode as keyof typeof colors];

    const [activeModule, setActiveModule] = useState(null);

    const handlePress = (key: any) => {
      setActiveModule(activeModule === key ? null : key);
    };

    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: activeColors.backgroundColor }}>
          {Object.entries(modules).map(([key, module]) => (
            <View key={key} style={[styles.moduleContainer, { borderColor: activeColors.textColor }]}>
              <TouchableOpacity onPress={() => handlePress(key)}>
                <Text style={[
                  styles.moduleName,
                  { color: activeColors.textColor },
                  activeModule === key && styles.activeModuleName,
                ]}>
                  {module.name}
                </Text>
              </TouchableOpacity>
              {activeModule === key && (
                <>
                  <Text style={{ color: activeColors.textColor }}>Common: {module.common}</Text>
                  <Text style={{ color: activeColors.textColor }}>Rare: {module.rare}</Text>
                  <Text style={{ color: activeColors.textColor }}>Super: {module.super}</Text>
                  <Text style={{ color: activeColors.textColor }}>Requisition: {module.requisition}</Text>
                  <Text style={{ color: activeColors.textColor }}>Effect: {module.effect}</Text>
                </>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  moduleContainer: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  moduleName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeModuleName: {
    color: 'yellow', // Highlight color for active module
  },
});

export default ModulesInfo;