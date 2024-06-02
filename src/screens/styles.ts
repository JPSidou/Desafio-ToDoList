import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
    },
    header:{
        width: '100%',
        height: 173,
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgHeader:{
        flex: 1,
        width: '40%',
        top: 5,
        resizeMode: 'contain'
    },
    body:{
        flex: 1,
        backgroundColor: '#1E1E1E',
        alignContent: 'center',
        
    },
    addWork:{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    textInput:{
        height: 54,
        width: 271,
        top: -30,
        marginRight: 8,
        backgroundColor: '#262626',
        color:'#F2F2F2',
        borderRadius: 6,
        padding: 15,
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        elevation: 8,
    },
    button:{
        backgroundColor: '#1E6F9F',
        top: -30,
        width: 54,
        height: 54,
        borderRadius: 6,
        elevation: 8,
    },
    textButton:{
        color: '#F2F2F2',
        fontSize: 24,
        textAlign: 'center',
        margin: 'auto'
    },
    progressBody:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30
    },
    workCount:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    textCreate:{
        color: '#4EA8DE',
        fontFamily: 'Inter_700Bold',
        marginRight: 8,
        fontSize: 16
    },
    countCreate:{
        backgroundColor: '#333333',
        width: 25,
        height: 20,
        borderRadius: 999,
        color: '#D9D9D9',
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        textAlign: 'center',
        justifyContent: 'center',
    },
    workDone:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    textDone:{  
        color: '#8284FA',
        fontFamily: 'Inter_700Bold',
        fontSize: 16,
        marginRight: 8,
    },
    line:{
        width: '85%',
        height: '0.3%',
        backgroundColor: '#333333',
        marginHorizontal: 'auto',
        marginTop: 20,
        marginBottom: 5,
    },
    clipBoard:{
        width: 60,
        height: 60,
        marginHorizontal: 'auto',
        marginTop: 80,
        marginBottom:20
    },
    tittleEmpty:{
        color: '#808080',
        width: '90%',
        fontFamily: 'Inter_700Bold',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 'auto',
    
    },
    textEmpty:{
        color: '#808080',
        width: '90%',
        marginHorizontal: 'auto',
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        textAlign: 'center',
    }
});