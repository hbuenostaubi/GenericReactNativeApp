import {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
import {StatusBar} from 'expo-status-bar'

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoal] = useState([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function endAddGoalHandler() {
    setModalIsVisible(false);
    }

    function addGoalHandler(enteredGoalText) {
        // arrow function is best practice for updating / reusing arrays
        setCourseGoal((currentCourseGoals) => [
            ...currentCourseGoals,
            {text: enteredGoalText, id: Math.random().toString()},
        ]);
        endAddGoalHandler();
    }

    function deleteGoalHandler(id) {
        setCourseGoal(currentCourseGoals => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    }

    // the <> is used b/c of the status bar and the modals had to be wrapped around something
    return (
        <>
            <StatusBar style='light' />
            <View style={styles.appContainer}>
                <Button title="Add New Goal"
                        color="#a065ec"
                        onPress={startAddGoalHandler}
                />
                <GoalInput
                    visible={modalIsVisible}
                    onAddGoal={addGoalHandler}
                    onCancel={endAddGoalHandler}
                />
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={courseGoals}
                        renderItem={(itemData) => {
                            return (
                                <GoalItem
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                    onDeleteItem={deleteGoalHandler}
                                />
                            );
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                        alwaysBounceVertical={false}
                    />
                </View>
            </View>
        </>);
}

const styles = StyleSheet.create({
    appContainer: {flex: 1, paddingTop: 50, paddingHorizontal: 16},
    goalsContainer: {flex: 5},
});
