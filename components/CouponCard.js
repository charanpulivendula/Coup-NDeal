import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';

// Default image URL
const defaultLogo = '../assets/icon.png';

const CouponCard = ({ couponData }) => {
  const logo = couponData.icon || defaultLogo;
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: logo }} style={styles.logo} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{couponData.title}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.description}>{couponData.description}</Text>
          <Text style={styles.couponCode}>Code: {couponData.code}</Text>
          <Text style={styles.validity}>Valid until: {couponData.end_time}</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL(couponData.url);
            }}
            underlayColor="#fff">
            <Text style={styles.buttonText}>Get Discount</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CouponInfo', { couponData:couponData })}
          >
            <Text style={styles.buttonText}>Coupon Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  logoContainer: {
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    shadowColor:'black',
    shadowOffset:{
      width:0,
      height:2
    }
  },
  content: {
    flex: 1,
  },
  header: {
    padding: 10,
    backgroundColor: '#344955',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  body: {
    padding: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  couponCode: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  validity: {
    fontSize: 16,
    color: '#333',
  },
  footer: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#246EE9',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CouponCard;
