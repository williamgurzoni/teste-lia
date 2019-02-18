import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
  msgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 30,
    padding: 15,
    elevation: 2,
  },
  card: {
    textAlign: 'center',
  },
  qrcode: {
    width: 80,
    height: 80,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  logoLab: {
    width: 150,
    height: 50,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default styles;
