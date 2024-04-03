import React, { useState, useRef } from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native';
import dayNote from '@/assets/images/top-note.png';
import Colors from '@/constants/Colors';
import * as Progress from 'react-native-progress';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const objective = 5;

const Header = () => {
  const [progress, setProgress] = useState(1);
  const completionTextRef = useRef(null);

  const handleUpgradeProgress = () => {
    setProgress(prevProgress => Math.min(prevProgress + 1, objective));
  };
  const { width: windowWidth } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={{ marginRight: windowWidth * 0.03 }}>
          <Progress.Circle
            size={windowWidth * 0.12}
            indeterminate={false}
            progress={progress === objective ? 1 : progress / objective}
            color={Colors.purple}
            unfilledColor={Colors.C200}
            borderWidth={0}
            showsText={true}
            thickness={3}
            formatText={() => (
              <Ionicons
                name="checkmark-circle"
                size={windowWidth * 0.05}
                color={progress === objective ? Colors.green : Colors.C200}
              />
            )}
          />
        </View>
        <View style={styles.textContainer}>
          <Animatable.Text
            ref={completionTextRef}
            animation={progress === objective ? 'pulse' : ''}
            duration={1000}
            easing="ease-out"
            style={styles.textStyle}
          >
            {`${progress === 1 ? '1 leçon complétée' : `${progress} leçons complétées`}`}
          </Animatable.Text>
          <Text style={styles.objectifText}>
            {progress === objective
              ? 'Bravo objectif atteint !'
              : `Encore ${objective - progress} pour atteindre ton objectif ! `}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={dayNote} style={styles.image} />
        </View>
      </View>
      {/* <Button title="Upgrade Progress" onPress={handleUpgradeProgress} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: Dimensions.get('window').height * 0.03,
    borderBottomColor: Colors.C200,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarContainer: {
    marginRight: Dimensions.get('window').width * 0.03,
  },
  textContainer: {
    flex: 1,
  },
  imageContainer: {
    marginLeft: 'auto',
  },
  textStyle: {
    fontFamily: 'nun-semibold',
    color: Colors.C300,
    fontSize: 16,
  },
  objectifText: {
    fontFamily: 'nun-semibold',
    color: Colors.C250,
    fontSize: 12,
  },
  image: {
    width: Dimensions.get('window').width * 0.12,
    height: Dimensions.get('window').width * 0.12,
  },
});

export default Header;
