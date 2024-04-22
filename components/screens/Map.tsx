import { View, Image, ScrollView, Text,  StyleSheet, } from 'react-native';

import { useTheme } from '../../contexts/ThemeContext';
import colors from '../../constants/colors';
import Svg, { Image as SvgImage } from 'react-native-svg';
import { useEffect, useState } from 'react';
import Planets from '../../api/mappings/planets';

type campaignData = {
  count: number;
  id: number;
  planetIndex: number;
  type: number;
};

const Map = () => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode];
  const styles = dynamicStyles(activeColors);
  const [expiryDate, setExpiryDate] = useState('');
  const [briefing, setBriefing] = useState('');
  const [task, setTask] = useState('');
  const [reward, setReward] = useState('');

  const [kills, setKills] = useState<number>();
  const [deaths, setDeaths] = useState<number>();
  const [bulletsFired, setBulletsFired] = useState<number>();

  useEffect(() => {
    const getCampaignData = async () => {
      const res = await fetch(
        'https://api.live.prod.thehelldiversgame.com/api/v2/Assignment/War/801',
      );
      const data = await res.json();
      const date = new Date((Date.now() / 1000 + data[0].expiresIn) * 1000);
      setExpiryDate(`${date.getDate()}/${date.getMonth()}`);
      setBriefing(data[0].setting.overrideBrief);
      setTask(data[0].setting.taskDescription);
      setReward(data[0].setting.reward.amount);
    };
    getCampaignData();

    const getWarStats = async () => {
      const res = await fetch(
        'https://api.live.prod.thehelldiversgame.com/api/Stats/War/801/Summary',
      );
      const data = await res.json();
      setKills(data.galaxy_stats.bugKills + data.galaxy_stats.automatonKills);
      setDeaths(data.galaxy_stats.deaths);
      setBulletsFired(data.galaxy_stats.bulletsFired);
    };

    getWarStats();
  }, []);

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
      <View style={styles.sectionContainer}>
  <Text style={styles.headerText}>Major Order</Text>
  <Text style={styles.contentText}>Ends {expiryDate}</Text>
  <Text style={styles.contentText}>{briefing}</Text>
</View>
{/* <View style={styles.rewardsContainer}>
  <Text style={styles.headerText}>Task</Text>
  <Text style={styles.contentText}>{task}</Text>
</View>
<View style={styles.rewardsContainer}>
  <Text style={styles.headerText}>Reward</Text>
  <Text style={styles.contentText}>{reward}</Text>
        </View> */}
<View style={styles.statsContainer}>
  <Text style={styles.headerText}>War Stats</Text>
  <Text style={styles.contentText}>Enemies Killed {kills}</Text>
  <Text style={styles.contentText}>Helldivers KIA {deaths}</Text>
  <Text style={styles.contentText}>Bullets Fired {bulletsFired}</Text>
</View>

    </ScrollView>
  );
};

const dynamicStyles = (activeColors: any) => StyleSheet.create({
  sectionContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15, 
    paddingHorizontal: 20, 
  },
  headerText: {
    color: activeColors.textColor,
    fontSize: 22, 
    fontWeight: 'bold',
    marginTop: 10, 
  },
  contentText: {
    color: activeColors.textColor,
    fontSize: 18,
    marginVertical: 4, 
  },
  statsContainer: {
    alignSelf: 'stretch', 
    alignItems: 'flex-start', 
    justifyContent: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 15, 
    marginVertical: 10, 
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: activeColors.textColor, 
  },
  rewardsContainer: {
    alignSelf: 'stretch', 
    alignItems: 'center', 
    padding: 20, 
  },
});

export default Map;
