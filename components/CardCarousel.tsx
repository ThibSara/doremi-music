import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LottieView from 'lottie-react-native'; // Import LottieView
import confetti from '@/assets/lotties/confetti.json';
import image1 from  '@/assets/images/course-card/1.png';
import image2 from '../assets/images//course-card/2.png';
import courseData from '@/assets/courseData';

interface Course {
  id: string;
  name: string;
  time: string;
  type: string;
  isCompleted: boolean;
  image: any; }

interface Unit {
  id: string;
  courses: Course[];
}

interface CardCarouselProps {
  unitId: string;
}

const { width: screenWidth } = Dimensions.get('window');

const CardCarousel: React.FC<CardCarouselProps> = ({ unitId }) => {
  const carouselRef = useRef<Carousel<Course>>(null);
  const [playedOnce, setPlayedOnce] = useState<boolean>(false);

  // Access the data of the specified unitId
  const unit: Unit | undefined = courseData.find(unit => unit.id === unitId);

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
    <View>
      <Carousel
        ref={carouselRef}
        data={unit.courses}
        renderItem={({ item }) => (
          <View>
            <View style={styles.card}>
              <Image source={item.image} style={styles.image}/> 
              <Text style={styles.cardText}>Name: {item.name}</Text>
              <Text style={styles.cardText}>Time: {item.time}</Text>
              <Text style={styles.cardText}>Type: {item.type}</Text>
              <Text style={styles.cardText}>Is Completed: {item.isCompleted ? 'Yes' : 'No'}</Text>
              </View>
              <View style={styles.animationContainer}>
                <LottieView
                  source={confetti}
                  autoPlay={!playedOnce}
                  loop={false}
                  onAnimationFinish={() => setPlayedOnce(true)}
                  style={styles.confetti}
                />
              </View>
          </View>
        )}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.8}
        layout={'default'}
        loop={false}
        onSnapToItem={() => setPlayedOnce(false)} // Reset playedOnce state when snapping to a new item
        snapToInterval={screenWidth * 0.8 + 20} // Adjust this value to control the snapping behavior
        decelerationRate="fast" // Adjust the deceleration rate for smoother snapping
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: '100%',
    height: 240,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, // Place the image behind other content
    borderRadius: 10,
  },
  card: {
    marginTop: 40,
    elevation: 5,
    zIndex: 1,
    overflow: 'hidden', // Ensure content inside the card doesn't overflow
    borderRadius: 10,
    backgroundColor: 'blue',
    height: 240,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 30 },
    shadowOpacity: 0.10,
  },
  cardText: {
    fontSize: 12,
    marginBottom: 10,
    fontFamily: 'nun-bold',
  },
  animationContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  confetti: {
    width: '150%', // Adjust size of animation as needed
    height: '150%', // Adjust size of animation as needed
  },
});

export default CardCarousel;
