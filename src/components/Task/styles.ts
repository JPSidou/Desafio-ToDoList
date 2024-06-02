import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    conteinerTask:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#262626',
        borderColor: '#808080',
        borderWidth: 1,
        width: '90%',
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 'auto',
        marginTop: 10,
        borderRadius: 8,
        
    },
    textTask:{
        width: '80%',
        color: '#F2F2F2',
        fontFamily: 'Inter_400Regular',
        fontSize: 16,	
        textAlign: 'center',
    },
    textTaskFalse:{
        width: '80%',
        color: '#808080',
        textDecorationLine: 'line-through',
        fontFamily: 'Inter_400Regular',
        fontSize: 16,	
        textAlign: 'center',
    },
    trashIcon:{
        right: 10,
    },
    checkIcon:{
        left: 10,
    }
})