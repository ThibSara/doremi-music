import React from 'react';
import { View,StyleSheet,Dimensions, Text } from 'react-native';
import StreaksCalendar from '@/components/StreaksCalendar';
import Header from '@/components/Header';
import Colors from '@/constants/Colors';
import CardCarousel from '@/components/CardCarousel';
import data from '@/assets/data.json';
import {Octicons } from '@expo/vector-icons';


const Index = () => {

  return (
    <View>
    <View style={styles.container}>
      <Header />
    <View style = {styles.paddingCalendar}>
      <StreaksCalendar />
    </View>
      <Text style = {styles.Title}>Reprend la où tu en étais</Text>
      <View style ={styles.subtitleContainer}>
      <Text style = {styles.subTitle}>Chapitre 1</Text>
      <Octicons name="dot-fill" size={12} color={Colors.C200} style = {{marginHorizontal:8}}/>

      <Text style = {styles.subTitle} >Les Bases</Text>
      </View>
      </View>
      <View style={styles.Carousel}>
      <CardCarousel  unitId='1'  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: Dimensions.get('window').height * 0.05,
  },
  paddingCalendar :{
    paddingTop: Dimensions.get('window').height * 0.03,
  },
  subtitleContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  Title:{
    marginTop: 40,
    fontSize: 20,
    fontFamily: 'nun-bold',
    color: Colors.C300,
    marginBottom: 10
  },
  subTitle:{
    fontSize: 16,
    fontFamily: 'nun-bold',
    color: Colors.C250,
  },
  Carousel:{
    marginTop: 30,
  }
});

export default Index;
