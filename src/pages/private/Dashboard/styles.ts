import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#F0F0F5',
  },

  post: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginVertical: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  logo: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 10,
  },

  name: {
    fontSize: 15,
  },

  content: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },

  icons: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 5,
  },

  likes: {
    color: 'black',
  },

  icon: {
    marginLeft: 5,
    borderRadius: 50,
  },

  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },

  button: {
    alignItems: 'center',
    width: '49%',
    padding: 10,
    backgroundColor: `red`,
    borderRadius: 8,
    marginVertical: 10,
  },
});
