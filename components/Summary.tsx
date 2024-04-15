import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '@/constants/Colors';
import courseData from '@/assets/courseData';
import { MaterialIcons, Octicons, Ionicons } from '@expo/vector-icons';

interface Course {
  id: string;
  name: string;
  time: string;
  type: string;
  isCompleted: boolean;
  image: any;
  color: string;
}

interface Unit {
  id: string;
  name: string;
  courses: Course[];
}

const Summary = () => {
  const [filterType, setFilterType] = useState('');

    const handleFilter = (type: string) => {
      setFilterType(type === filterType ? '' : type);
    };

  return (
    <View>

      <View style={styles.heading}>
        <Text style={styles.title}>Révisions</Text>
        <View style={styles.buttonsContainer}>
        
        <TouchableOpacity onPress={() => handleFilter('leçon')} style={[styles.button, filterType === 'leçon' && styles.activeButton]}>
          <Text style={[styles.buttonText, filterType === 'leçon' && styles.activeButtonText]}>leçon</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilter('mini jeu')} style={[styles.button, filterType === 'mini jeu' && styles.activeButton]}>
          <Text style={[styles.buttonText, filterType === 'mini jeu' && styles.activeButtonText]}>mini jeu</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilter('quizz')} style={[styles.button, filterType === 'quizz' && styles.activeButton]}>
          <Text style={[styles.buttonText, filterType === 'quizz' && styles.activeButtonText]}>quizz</Text>
        </TouchableOpacity>
        
      </View>
      </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      {courseData.map((unit: Unit) => (
        <View key={unit.id}>
          <View style = {styles.unitContainer}>
          <Text style = {styles.unit}>{unit.name}</Text>
          <Ionicons
                      name="checkmark-circle"
                      size={20} 
                      style={styles.smallInfosItem}
                      color={unit.isCompleted ? Colors.purple : Colors.C200}
                    />
          </View>
          {(filterType ? unit.courses.filter(course => course.type === filterType) : unit.courses).map((item: Course) => (
            <View key={item.id} style={styles.arrowContainer}>
              <View style={styles.containerItem}>
                <View style={[styles.card, { backgroundColor: item.color }]}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.TextTitle}>{item.name}</Text>
                    <Ionicons
                      name="checkmark-circle"
                      size={16}
                      color={item.isCompleted ? Colors.green : Colors.C200}
                    />
                  </View>
                  <View style={styles.smallInfosContainer}>
                    <Text style={styles.TextSubTitle}>{item.time}</Text>
                    <Octicons name="dot-fill" size={12} color={Colors.C200} style={styles.smallInfosItem} />
                    <Text style={styles.TextSubTitle}>{item.type}</Text>
                  </View>
                </View>
              </View>
              <MaterialIcons name="arrow-forward-ios" size={20} color={Colors.C250} />
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    fontFamily: 'nun-bold',
    color: Colors.C300,
    marginBottom: 10,

  },
  heading: {
    paddingBottom: Dimensions.get('window').height * 0.02,
    borderBottomColor: Colors.C200,
    borderBottomWidth: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    },
  button: {
    marginHorizontal: 10,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.C200,
  },
  activeButton: {
    borderColor: Colors.purple ,
  },
  buttonText: {
    color: Colors.C250,
    fontSize: 16,
    fontFamily: 'nun-semibold',
  },
  activeButtonText: {
    color: Colors.purple ,
  },
  unitContainer: {
    marginVertical: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  unit:{
    fontSize: 20,
    fontFamily: 'nun-semibold',
    color: Colors.C250,
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    marginHorizontal: 10,
    flexDirection: 'column',
  },
  containerItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallInfosContainer: {
    alignItems: 'center',
    marginTop: 5,
    flexDirection: 'row',
  },
  smallInfosItem: {
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
    borderRadius: 9,
    height: 95,
    width: 140,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 30 },
    shadowOpacity: 0.1,
  },
  TextTitle: {
    fontSize: 16,
    fontFamily: 'nun-bold',
    color: Colors.C250,
    marginRight: 10,
  },
  TextSubTitle: {
    fontSize: 16,
    fontFamily: 'nun-semibold',
    color: Colors.C200,
  },
});

export default Summary;
