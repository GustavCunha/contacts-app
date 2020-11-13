import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffafa'
  },

  button:{
    width: 50,
    height: 50,
    borderRadius: 32,
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: '#7D3F53',
    justifyContent: "center",
    alignItems: "center"
  },

  containerItem:{
    flexDirection: "row",
    alignItems: 'center',
    marginHorizontal: '1%',
    marginVertical: '0.5%',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#b48090'
  },
  image:{
    width: 58,
    height: 58,
    borderRadius: 32,
    backgroundColor: '#eee',
    marginHorizontal: 20
  },

  text: {
    marginLeft: 10,
    fontFamily: 'Ubuntu_400Regular',
    fontSize: 20,
    color: '#FAFAFA',
    paddingBottom: '2%',
  },
  number: {
    marginLeft: 10,
    fontFamily: 'Ubuntu_300Light_Italic',
    fontSize: 14,
    color: '#FAFAFC',
  }
});

export default styles;
