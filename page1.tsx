import {View, Text, StyleSheet} from "react-native";

export default function pag1() {
    return (
    <View style={style.container}>
        <Text>pag1</Text>
    </View>
    );  
}
const style = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
