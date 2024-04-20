import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Planets from '../api/mappings/planets'; // Import the Planets mapping
import colors from '../constants/colors';

interface PlanetInfo {
  index: keyof typeof Planets;
  settingsHash: number;
  position: {
    x: number;
    y: number;
  };
  waypoints: number[];
  sector: number;
  maxHealth: number;
  disabled: boolean;
  initialOwner: number;
}

const Map = () => {
  const [warInfo, setWarInfo] = useState<any>({});
  const [planetInfo, setPlanetInfo] = useState<PlanetInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const infoResponse = await fetch('https://api.live.prod.thehelldiversgame.com/api/WarSeason/801/WarInfo');
        const infoData = await infoResponse.json();
        setWarInfo(infoData);

        if (infoData.planetInfos && infoData.planetInfos.length > 0) {
          setPlanetInfo(infoData.planetInfos);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>War ID: {warInfo.warId}</Text>

      <View style={styles.mapContainer}>
        {planetInfo.map((planet, index) => (
          <View
            key={index}
            style={[styles.planet, { left: planet.position.x * 100 + 130, top: planet.position.y * 100 + 120 }]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark.backgroundColor,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mapContainer: {
    width: '80%',
    height: '80%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: 'black',
    position: 'relative',
  },
  planet: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default Map;
