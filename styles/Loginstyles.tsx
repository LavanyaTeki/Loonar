import {StyleSheet, Dimensions} from 'react-native';

// Get the dimensions of the screen
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12208A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  heading: {
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4D4D4D',
  },
  username: {
    fontWeight: '600',
    fontSize: 11,
    color: '#434954',
    width: 273,
    height: 12,
    textAlign: 'justify',
    marginLeft: 15,
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#030D29',
    flexDirection: 'row',
    padding: 10,
    height: 55,
    paddingHorizontal: 15,
    width: 273,
    marginLeft: 10,
  },

  button: {
    width: 273,
    height: 52,
    padding: 4,
    paddingHorizontal: 16,
    borderRadius: 32,
    margin: 10,
    gap: 10,
    backgroundColor: '#56A4EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFBFB',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 273,
  },
  password: {
    fontWeight: '600',
    fontSize: 11,
    color: '#434954',
    height: 12,
    textAlign: 'justify',
    marginLeft: 15,
  },
  smallpassword: {
    fontWeight: '400',
    fontSize: 10,
    color: '#798294',
  },
  primarycontainer: {
    // Add any necessary styles for your container
    justifyContent: 'center', // Center vertically if needed
    alignItems: 'center', // Center horizontally
  },
  primarytext: {
    width: 209,
    height: 28,
    fontWeight: '400',
    fontSize: 10,
    textAlign: 'center',
    color: '#798294',
  },
  Nonhai: {
    height: 16,
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
    color: '#F3F7FF',
    margin: 10,
  },
  register: {
    width: 59,
    height: 16,
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
    color: '#F3F7FF',
  },
  errorText: {
    color: '#E8070F',
    fontSize: 10,
    fontWeight: '400',
    marginLeft: 15,
    justifyContent: 'center',
  },
  errorInput: {
    borderColor: '#E8070F',
    borderWidth: 1,
  },
});
