import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, RefreshControl, FlatList } from "react-native";

const ListItems = () => {
    const [Items, setItems] = useState([
        { value: 'Item 1' },
        { value: 'Item 2' },
        { value: 'Item 3' },
        { value: 'Item 4' },
        { value: 'Item 5' },
        { value: 'Item 6' },
        { value: 'Item 7' },
        { value: 'Item 4' },
        { value: 'Item 5' },
        { value: 'Item 6' },
        { value: 'Item 7' },
    ])
    

    const [refresh, setRefresh] = useState(false)

    const onRefreshing = () => {
        setRefresh(true);
        setItems([...Items, { key: 12, value: 'Item !00 is here after refresh' }]);
        setRefresh(false);
    }

    return (
        // <ScrollView style={styles.body}
        // horizontal={false} 
        // refreshControl={<RefreshControl refreshing={ refresh } onRefresh={ onRefreshing }/>}
        // >
        // {
        //     Items.map((item)=> {
        //         return (
        //             <View style={styles.item} key={item.key}>
        //                 <Text style={styles.text}>{item.value}</Text>
        //             </View>
        //         )
        //     })
        // }
        // </ScrollView>
        <FlatList  
            keyExtractor={(item, index) => index.toString()}     
            data={Items}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.text}>{item.value}</Text>
                </View>
            )}
            refreshControl={
                <RefreshControl
                 refreshing={refresh}
                 onRefresh={onRefreshing}
                 colors={['#f55442']}
                 />
            } 
        />
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column'
    },
    text: {
        fontSize: 40,
        fontWeight: '300',
        color: '#000000',
        textAlign: 'center'
    },
    item: {
        backgroundColor: '#e9f542',
        margin: 15
    }
})

export default ListItems;