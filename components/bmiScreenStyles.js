import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  centerBox: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#ffffff',
    height: 400,
    width: '90%',
    borderRadius: 30,
    top: 70,
    elevation: 9,
  },
  textInput: {
    width: '80%',
    marginTop: 50,
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 0.1,
    borderRadius: 30,
    elevation: 5,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    backgroundColor: '#ffffff',
  },
  range: {
    marginTop: 20,
    fontSize: 17,
    opacity:0.5,
  },
  results: {
    fontFamily:'Roboto-Bold',
    color:'#6F1BE1',
    fontSize: 50,
    marginTop: 20,
    textAlign: 'center',
    textShadowColor: '#8E2DE2',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
    marginBottom:10
  },
  bmiButton: {
    width: 200,
    height: 60,
    backgroundColor: '#fff',
    position: 'absolute',
    left: -100,
    top: 550,
    borderRadius: 30,
    elevation: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculate: {
    fontSize: 30,
    color: '#6F1BE1',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 3,
    marginHorizontal: 20,
  },
});
