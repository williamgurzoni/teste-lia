import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
  btnWrapper: {
    alignItems: 'flex-end',
    marginTop: 40,
  },
  item: {
    borderRadius: 20,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  selectedItem: {
    backgroundColor: '#EB4B66',
    color: '#FFF',
    borderRadius: 20,
  },
  itemCircle: {
    backgroundColor: '#2799fa',
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
