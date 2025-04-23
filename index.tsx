import { useRouter } from "expo-router";
import { Image,ScrollView, View,StyleSheet, Text, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
export default function Home(){
   const data = [
    {
        name: "Jhon",
        age: 30,
        city: "New York",
    },
    { 
        name: "Jhon",
        age: 30,
        city: "New York",
    },
    {
        name: "Jhon",
        age: 30,
        city: "New York",
    },
   ];
   const renderItem = ({item}) => {
    return (
        <View style={styles.container2}>
            <Text style={styles.text1}>{item.name}</Text>
            <Text style={styles.text2}>{item.age}</Text>
            <Text style={styles.text3}>{item.city}</Text>                              
        </View>
    );

   };
   const router = useRouter();
   return (
    <View style={styles.container}>
        <ScrollView>
            <View>
                <Image
                source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}
                style={styles.image}
                />
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.name}
                />
            </View>
        </ScrollView>
        <Button onPress={() =>
            router.push("/pag1")} title="Go to page 1" />
    </View>
   );
}
const styles = StyleSheet.create({
    image: {
        width: 50,                                                                                                                                                              
        height: 50,  
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',        
    },
    text1:{
        fontSize: 14,
        fontWeight:'bold',
        color: 'whitebn ',
    },
    text2:{
        fontSize:16,
        fontWeight: "bold",
        color: "red",
    },
    text3: {
        fontSize: 14,
        fontStyle: "italic",
        color: "blue",
    },
    container2: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "white",
        width:300,
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
});
