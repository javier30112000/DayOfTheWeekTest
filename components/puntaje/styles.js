import { StyleSheet } from "react-native";

const style = StyleSheet.create ({
    titulos: {
        marginTop: '10%',
        width: '100%',
        alignItems: 'center',
      },
    
      titulo: {
        fontSize: 40,
        fontWeight: 400,
        color: 'white',
      },
    
      subtitulo: {
        fontSize: 16,
        color: 'gray'
      },
      container: {
        width: "100%",
        padding: "10px",
        alignItems: 'center',
    },
    button : {
        backgroundColor: "grey",
        borderRadius: 20,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    text: {
        fontSize: 12,
        fontWeight: 500,
        textTransform: 'uppercase',
        alignItems: 'center',
    },
    fecha: {
        fontSize: 20,
        color: "white",
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        width: "auto",
        textAlign:"center",
        marginBottom: 20,
    },
});

export default style;
