import {Text, View, StyleSheet, Pressable} from "react-native";

function GoalItem(props) {
    return (
        // bind is a js function that allows to preconfigure a function for future exe -> props has to be deteled as a parameter value
            <View style={styles.goalItem}>
                <Pressable
                    android_ripple={{color: '#210644'}}
                    onPress={props.onDeleteItem.bind(this, props.id)}
                    style={({isPressed}) => isPressed && styles.pressedItem }
                >
                <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
            </View>

    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {margin: 8, borderRadius: 6, backgroundColor: '#5e0acc'},
    pressedItem: {opacity:0.5},
    goalText: {color: 'white', padding: 8}
});