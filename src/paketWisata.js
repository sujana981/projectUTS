import React from 'react';

const paket = require('./img/paket.png');


import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';


class pesanPW extends React.Component {
  static navigationOptions = {

    drawerLabel: 'Pendaftaran ',
    title: 'Form Pendaftaran ',
    drawerIcon: () => (
    <Image
      source={paket}
      style={styles.icon}
    />
  ),
  };

  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      alamat: '',
      email: '',
      no_hp:'',

      activityIndicatorLoading: false,
    };
  }

insertDataIntoMySQL = () => {
  this.setState({ activityIndicatorLoading: true }, () => {
    fetch('https://sujana0398.000webhostapp.com/insertPesanan.php',
        {
          method: 'POST',
          headers:
          {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              nama: this.state.nama,
              alamat: this.state.alamat,
              email: this.state.email,
              no_hp: this.state.no_hp,
            }
          )
          }).then((response) => response.json()).then((responseJsonFromServer) => {
            alert(responseJsonFromServer);
            this.setState({ activityIndicatorLoading: false });
          }).catch((error) => {
            console.error(error);
            this.setState({ activityIndicatorLoading: false });
            });
  });
}


  render() {

    return (


      <View style={styles.MainContainer}>

        <View style={{ padding: 10, backgroundColor: 'white', width: 280 }}>
          <TextInput
              style={styles.TextInputStyleClass}
              placeholder="Masukan nama"
              underlineColorAndroid="transparent"
              onChangeText={(namaInput) => this.setState({ nama: namaInput })}
            />
            <TextInput
              style={styles.TextInputStyleClass2}
              placeholder="Masukkan alamat"
              underlineColorAndroid="transparent"
              onChangeText={(alamatInput) => this.setState({ alamat: alamatInput })}
            />
            <TextInput
              style={styles.TextInputStyleClass2}
              placeholder="Masukkan email"
              underlineColorAndroid="transparent"
              onChangeText={(emailInput) => this.setState({ email: emailInput })}
            />
            <TextInput
              style={styles.TextInputStyleClass2}
              placeholder="Masukkan no_hp"
              underlineColorAndroid="transparent"
              onChangeText={(no_hpInput) => this.setState({ no_hp: no_hpInput })}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.TouchableOpacityStyle}
              onPress={this.insertDataIntoMySQL}
            >
              <Text style={styles.TextStyle}>Daftar</Text>
            </TouchableOpacity>
            {
              this.state.activityIndicatorLoading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
            }
       </View>
      </View>
    );
  }
};



export default StackNavigator({

  Home: {
    screen: pesanPW,
  },
});

const styles = StyleSheet.create(
{
  icon: {
    height: 24,
    width: 24
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 30,
  },
  TextInputStyleClass: {
    // textAlign: '',
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#009688',
    borderRadius: 7,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    },
    TextInputStyleClass2: {
    // textAlign: '',
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#009688',
    borderRadius: 7,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign:'left',
    // justifyContent:'flex-start',
     alignItems: 'flex-start'
    },
  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#009688',
    marginBottom: 20,
    width: '100%',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }

});
