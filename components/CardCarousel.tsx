import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LottieView from 'lottie-react-native';
import confetti from '@/assets/lotties/confetti.json';
import courseData from '@/assets/courseData';
import Colors from '@/constants/Colors';
import { Feather, Octicons } from '@expo/vector-icons';
import { Pagination } from 'react-native-snap-carousel';
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';


interface Course {
  id: string;
  name: string;
  time: string;
  type: string;
  isCompleted: boolean;
  image: any;
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
  const translateYImage = useRef(new Animated.Value(0)).current;

  const animateImage = () => {
    Animated.sequence([
      Animated.timing(translateYImage, {
        toValue: -10,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.spring(translateYImage, {
        toValue: 0,
        damping: 10,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const carouselRef = useRef<Carousel<Course>>(null);
  const [playedOnce, setPlayedOnce] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onSnapToItem = (index: number) => {
    impactAsync(ImpactFeedbackStyle.Light);
    setActiveIndex(index);
    animateImage();
    setPlayedOnce(false); // Reset playedOnce state
  };

  // Access the data of the specified unitId
  const unit: Unit | undefined = courseData.find((unit) => unit.id === unitId);

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
            <View style={[styles.card, { backgroundColor: item.color }]}>
              <Animated.Image source={item.image} style={[styles.image, { transform: [{ translateY: translateYImage }] }]} />
              <View style = {styles.informationContainer}>
              <Text style={styles.TextTitle}>{item.name}</Text>
              <View style = {styles.smallInfosContainer}>
              <Feather name="clock" size={24} color={Colors.C200} />
              <Text style={[styles.TextSubTitle, styles.smallInfosItem]} >{item.time}</Text>
              <Octicons name="dot-fill" size={12} color={Colors.C200}/>
              <Text style={[styles.TextSubTitle, styles.smallInfosItem]}>{item.type}</Text>
              </View>
              </View>
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
        onSnapToItem={onSnapToItem}
        snapToInterval={screenWidth * 0.8 + 20}
        decelerationRate="fast"
        pagination={true}
      />
      <Pagination
        dotsLength={unit.courses.length} // Number of dots to render
        activeDotIndex={activeIndex} // Active dot index
        containerStyle={styles.paginationContainer} // Style for the pagination container
        dotStyle={styles.paginationDot} // Style for each pagination dot
        inactiveDotOpacity={0.6} // Opacity of inactive dots
        inactiveDotScale={0.6} // Scale of inactive dots
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    paddingTop : 30,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
    backgroundColor: Colors.purple, 
  },
  informationContainer:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 5 ,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
  },
  smallInfosContainer:{
    alignItems: 'center',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  smallInfosItem:{
    marginHorizontal: 8,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    zIndex: -1,
  },
  card: {
    alignItems: 'center',
    elevation: 5,
    zIndex: 1,
    overflow: 'hidden',
    borderRadius: 10,
    height: 240,
    width: 320,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 30 },
    shadowOpacity: 0.1,
  },
  TextTitle:{
    fontSize: 20,
    fontFamily: 'nun-bold',
    color : Colors.white,
  },
  TextSubTitle:{
    fontSize: 16,
    fontFamily: 'nun-semibold',
    color : Colors.C200,
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
    width: '150%',
    height: '150%',
  },
});

export default CardCarousel;
