import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Platform, Dimensions,ImageSourcePropType } from 'react-native';
import Colors from '@/constants/Colors';

const StreaksCalendar  : React.FC = () => {

  const dayNote: ImageSourcePropType = require('@/assets/images/day-note.png');
  const today = new Date();
  const sevenDaysBefore = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
  const twoDaysAfter = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);
  const screenWidth = Dimensions.get('window').width;

  const [imagesLoaded, setImagesLoaded] = useState(0);

  const days: JSX.Element[] = [];

  let currentDate = new Date(sevenDaysBefore);

  // Render each day
  while (currentDate <= twoDaysAfter) {
    const isToday = currentDate.toDateString() === today.toDateString();
    const dayName = ['D', 'L', 'M', 'Me', 'J', 'V', 'S'][currentDate.getDay()];
    const imageStyle = isToday ? { tintColor: Colors.purple } : { tintColor: Colors.C250 };
    days.push(
      <View key={currentDate.toString()} style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ borderColor: isToday ? Colors.lightPurple : 'transparent', borderWidth: 3, borderRadius: 22, alignItems: 'center', paddingHorizontal: 12,marginHorizontal:(screenWidth-32) / 25, paddingVertical: 10 }}>
          <Text style={{ marginBottom: 4, fontFamily: 'nun-bold', color: Colors.C250, fontSize:14 }}>{dayName}</Text>
          <Image
            source={dayNote}
            style={[{ width: 15, height: 20 }, imageStyle]}
            onLoad={() => setImagesLoaded(prevState => prevState + 1)}
          />
        </View>
      </View>
    );
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (imagesLoaded === days.length) {
      // Find index of today's date in the array
      const indexOfToday = days.findIndex(day =>
        new Date(day.key || '').toDateString() === today.toDateString()
      );
      if (indexOfToday !== -1) {
        // Scroll to the center of the content
        
        const scrollPosition = (indexOfToday * (today.getDay() === 0 ? 1 : 2)) * (screenWidth / 5); // Adjust this value as needed
        if (Platform.OS === 'ios') {
          // iOS requires delay for scrollTo function
          setTimeout(() => {
            scrollViewRef.current?.scrollTo({ x: scrollPosition, animated: true });
          }, 100);
        } else {
          scrollViewRef.current?.scrollTo({ x: scrollPosition, animated: true });
        }
      }
    }
  }, [imagesLoaded]);

  return (
    <ScrollView
        showsHorizontalScrollIndicator={false}
      horizontal
      ref={scrollViewRef}
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={{ flexDirection: 'row'}}>
        {days}
      </View>
    </ScrollView>
  );
};

export default StreaksCalendar;
