import React, {useState} from "react";
import { Text, View, StyleSheet, SectionList, RefreshControl } from "react-native";

const SectionLists = () => {

    const [Items, setItems] = useState([
        {
            title: 'Title 1',
            data: ['Item 1-1', 'Item 1-2']
        },
        {
            title: 'Title 2',
            data: ['Item 1-1', 'Item 1-2']
        },
        {
            title: 'Title 3',
            data: ['Item 1-1', 'Item 1-2']
        }
    ])
    const [refresh, setRefresh] = useState(false)

    const onRefreshItems = () => {
        setRefresh(true);
        let item_no = Items.length+1;
        setItems([...Items, {title: `Title ${item_no}`, data: [`Item ${item_no}-1`, `Item ${item_no}-2`]}]);
        setRefresh(false);
    }

    return (
        <SectionList
            sections={Items}
            renderItem={({item})=> (
                <View style={styles.itemData}>
                    <Text style={styles.text}>{item}</Text>
                </View>
            )}
            renderSectionHeader={({section})=>(
                <View style={styles.itemTitle}>
                    <Text style={styles.textTitle}>{section.title}</Text>
                </View>
            )}
            refreshControl={
                <RefreshControl
                 refreshing={refresh}
                 onRefresh={onRefreshItems}
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
    textTitle: {
        fontSize: 40,
        fontWeight: '400',
        color: '#000000',
        textAlign: 'center',
        fontStyle: 'italic'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '300',
        color: '#000000',
    },
    itemTitle: {
        backgroundColor: '#6699ff',
        borderColor: '#000000',
        borderWidth: 1
    },
    itemData: {
        borderBottomColor: '#000111',
        borderBottomWidth: 2
    }

})

export default SectionLists;