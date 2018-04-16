import React from 'react';
import { SectionList, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const beranda = require('./img/beranda.png');
const kotaIcon = require('./img/mobile.png');
//const kotaIcon1 = require('./img/mobile1.png');
export default class Beranda extends React.Component {
  static navigationOptions = {
    title: 'Beranda ',
    drawerLabel: 'Beranda ',
    drawerIcon: () => (
    <Image
      source={beranda}
      style={styles.icon}
    />
  )
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
              <Image source={kotaIcon} style={styles.icon1}/>
          </View>
          <View style={styles.box2}>
            <Text style={styles.textCap}>Daftar Calon Pegawai </Text>
            <Text style={styles.textCap1}>Silakan geser ke kanan untuk melihat menu </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#DCDCDC',
    //borderRadius: 15,
    //borderWidth: 1,
    justifyContent: 'center',
    flex:1,
    //height: 40,
    //width: 30,
    paddingTop :30,
    paddingBottom : 30,
  },
/*iconContainer1: {
  alignItems: 'left',
  backgroundColor: 'white',
  borderColor: '#DCDCDC',
  //borderRadius: 15,
  //borderWidth: 1,
  justifyContent: 'left',
  flex:1,
  //height: 40,
  //width: 30,
  paddingTop :30,
  paddingBottom : 30,
},*/
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 14,
    // height: 100
  },
  icon: {
    height: 24,
    width: 24
  },
  icon1: {
    height: 100,
    width: 200,
  },
  box1: {
    height: 80,
    width: '100%',
    backgroundColor: '#9E9E9E',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0.5
  },
  textCap: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 3,
    justifyContent: 'center',
    textAlign: 'center'
  },
  textCap1: {
    fontSize: 15,
  //  fontWeight: 'bold',
    marginBottom: 3,
    justifyContent: 'center',
    textAlign: 'center'
  }
});
