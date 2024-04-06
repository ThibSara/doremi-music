import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import data from '@/assets/data.json';

interface Course {
  id: string;
  name: string;
  time: string;
  type: string;
  isCompleted: boolean;
}

interface Unit {
  id: string;
  courses: Course[];
}

interface CardCarouselProps {
  unitId: string;
}

const { width: screenWidth } = Dimensions.get('window');

const CardCarousel: React.FC<CardCarouselProps> = ({ unitId }) => {
  // Access the data of the specified unitId
  const unit: Unit | undefined = data.find(unit => unit.id === unitId);

  // Render the carousel if the unit exists
  if (!unit) {
    return (
      <View>
        <Text>Unit not found with ID: {unitId}</Text>
      </View>
    );
  }

  // Render the carousel with course information
  return (
    <Carousel
      data={unit.courses}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.cardText}>Name: {item.name}</Text>
          <Text style={styles.cardText}>Time: {item.time}</Text>
          <Text style={styles.cardText}>Type: {item.type}</Text>
          <Text style={styles.cardText}>Is Completed: {item.isCompleted ? 'Yes' : 'No'}</Text>
        </View>
      )}
      sliderWidth={screenWidth}
      itemWidth={screenWidth * 0.8}
      layout={'default'}
      loop
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default CardCarousel;
