import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    main:{
        flex: 1
    },
    mainBox1:{
        maxHeight: 250,
        borderBottomWidth: 1,
        borderBottomColor: '#7D3F53'
    },

    image:{
        width: 150,
        height: 150,
        resizeMode: "contain",
        borderRadius: 20,
        alignSelf:"center",
        marginBottom: 5
    },

    textBox1:{
        fontSize: 24,
        fontFamily: 'Ubuntu_400Regular',
        marginBottom: 10,
        marginHorizontal: 10,
        textAlign: "center"
    },

    mainBox2:{
        borderBottomWidth: 1,
        borderBottomColor: '#7D3F53',
        flexDirection: "row"
    },

    mainBox3:{
        borderBottomWidth: 1,
        borderBottomColor: '#7D3F53',
    },
    button:{
        height: 50,
        borderRadius: 32,
        position: "absolute",
        bottom: 15,
        right: 15,
        backgroundColor: '#7D3F53',
        justifyContent: "center", 
        alignItems: "center",
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    textButton:{
        marginLeft: 10,
        color: '#FFF',
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 14
    }
});

export default styles;