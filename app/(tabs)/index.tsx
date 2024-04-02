import React, { useState, useRef } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import dayNote from '@/assets/images/top-note.png';
import Colors from '@/constants/Colors';
import StreaksCalendar from '@/components/StreaksCalendar';
import * as Progress from 'react-native-progress';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const Index = () => {
  const [progress, setProgress] = useState(1);
  const completionTextRef = useRef(null);

  const handleUpgradeProgress = () => {
    setProgress(prevProgress => Math.min(prevProgress + 1, 3));
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.progressBarContainer}>
          <Progress.Circle
            size={36}
            indeterminate={false}
            progress={progress === 3 ? 1 : progress / 3}
            color={Colors.purple}
            unfilledColor={Colors.C200}
            borderWidth={0}
            showsText={true}
            thickness={3}
            formatText={() => (
              <Ionicons name="checkmark-circle" size={20} color={progress === 3 ? Colors.green : Colors.C200} />
            )}
          />
        </View>
        <View style={styles.textContainer}>
          <Animatable.Text
            ref={completionTextRef}
            animation={progress === 3 ? 'fadeIn' : ''}
            duration={1000}
            easing="ease-out"
            style={styles.textStyle}
          >
            { `${progress === 1 ? '1 leçon complétée' : `${progress} leçons complétées`} `}
          </Animatable.Text>
          <Text style={styles.objectifText}>
  {progress === 3 ? 'Bravo objectif atteint !' : `Encore ${3 - progress} pour atteindre ton objectif ! `}
</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={dayNote} style={styles.image} />
        </View>
      </View>
      <StreaksCalendar />
      <Button title="Upgrade Progress" onPress={handleUpgradeProgress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  imageContainer: {
    marginLeft: 'auto',
  },
  textStyle:{
    fontFamily: 'nun-semibold',
    color: Colors.C300,
    fontSize: 16,
  },
  objectifText:{
    fontFamily: 'nun-semibold',
    color: Colors.C250,
    fontSize: 12,
  },
  image: {
    width: 45,
    height: 45,
  },
});

export default Index;
