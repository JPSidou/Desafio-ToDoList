import {View, Text} from 'react-native';
import {styles} from './styles';
import { useState } from 'react';

import {Ionicons} from '@expo/vector-icons';

type Props = {
    tittle: string;
    onRemove:()=>void;
    onCheck:(checked: boolean)=>void;
}

export function Task({tittle, onRemove, onCheck}: Props){

    const [isChecked, setChecked] = useState(true);

    function contConcluidas() {
        setChecked(!isChecked)
        onCheck(!isChecked)
        console.log(isChecked)
    }
    
    return (
        <>
            <View style={styles.conteinerTask}>
            <Ionicons name={isChecked ? "checkmark-circle-outline": "checkmark-circle"} size={26} style ={styles.checkIcon} color={isChecked ? '#4EA8DE' : "#8284FA"} onPress={contConcluidas}/>
            
                <Text style={[styles.textTask, isChecked ? styles.textTask : styles.textTaskFalse]}>{tittle}</Text>
                
                
                <Ionicons name="trash-outline" size={24} color="#808080" style={styles.trashIcon} onPress={onRemove}/>
            </View>
        </>
    )
}
