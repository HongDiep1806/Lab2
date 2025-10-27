import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', 
    justifyContent: 'flex-end', 
    padding: 16,
  },
  display: {
    backgroundColor: '#ffffff',
    color: '#000',
    fontSize: 48,
    textAlign: 'right',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#ffffff',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    fontSize: 28,
    color: '#000',
    fontWeight: '500',
  },
  operatorButton: {
    backgroundColor: '#FFA500', 
  },
  clearButton: {
    backgroundColor: '#E91E63', 
  },
     clearWideButton: {
        backgroundColor: '#e6e6e6ff',
        borderRadius: 35,
        width: 350,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
      },
    clearButtonText: {
        fontSize: 28,
        color: '#000000ff',
        fontWeight: '500',
      },
      
});

export default styles;
