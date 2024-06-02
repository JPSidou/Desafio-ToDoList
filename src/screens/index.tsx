import { Text, View, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { useState } from 'react';
import {styles} from './styles';
import { Task } from '../components/Task';

export function Home(){
    const [task, setTask] = useState<string[]>([]);
    const [taskDone, setTaskDone] = useState(0);
    const [taskTittle, setTaskTittle] = useState('');


    function handleAddTask(){ 
        if(task.includes(taskTittle)){
            return Alert.alert('Tarefa já cadastrada');
        }
        setTask(prevState => [...prevState, taskTittle]);
        setTaskTittle('');
    }
    function contConcluidas(checked: boolean) {
        if(checked) {
            setTaskDone(taskDone - 1);
        } else {
            setTaskDone(taskDone + 1);
        }
        console.log(taskDone)
      }

    function handleRemoveTask(tittle:string){
        Alert.alert('Remover tarefa', `Deseja remover ${tittle} das tarefas?`,[
            {
                text: 'Cancelar',
                onPress: () =>(
                    console.log('Cancelado')
                )
            },
            {
                text: 'Remover',
                onPress(){
                    setTask(prevState => prevState.filter(task => task !== tittle));
                }
            }
        ])
    }

    return (
        <View style={styles.conteiner}>
            <View style={styles.header}>
                <Image style={styles.imgHeader} source={require('./../../assets/Logo.png')}/>
            </View>
            <View style={styles.body}>
                <View style={styles.addWork}>
                    <TextInput 
                    style={styles.textInput}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor={'#808080'}
                    onChangeText={setTaskTittle}
                    value={taskTittle}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                        <Text style={styles.textButton}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.progressBody}>
                    <View style={styles.workCount}>
                        <Text style={styles.textCreate}>Criadas</Text>
                        <Text style={styles.countCreate}>{task.length}</Text>
                    </View>
                    <View style={styles.workDone}>
                        <Text style={styles.textDone}>Concluídas</Text>
                        <Text style={styles.countCreate}>{taskDone}</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <FlatList 
                data={task}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task 
                    key={item} 
                    tittle={item} 
                    onRemove={()=>handleRemoveTask(item)}
                    onCheck={(checked) => contConcluidas(checked)}/>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={()=> (
                    <>
                        <Image style={styles.clipBoard} source={require('./../../assets/Clipboard.png')}/>
                        <Text style={styles.tittleEmpty}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.textEmpty}>
                        Crie tarefas e organize seu itens a fazer</Text>
                    </>
                
                )}/>
                
                
            </View>
        </View>
    )
}