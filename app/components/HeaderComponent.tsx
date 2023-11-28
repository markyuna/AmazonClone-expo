import * as React from 'react';
import { Feather } from "@expo/vector-icons";
import { SafeAreaView, View, TextInput } from "react-native";


interface HeaderComponentProps {
    searchValue: string;
    setSearchValue: (value: string) => void; // Adjust the type of setSearchValue
}
  
const HeaderComponent: React.FC<HeaderComponentProps> = ({ searchValue, setSearchValue }) => {

    return (
        <SafeAreaView style={{ backgroundColor: '#22e3dd', height: 110 }}>
        <View
          style={{
            marginTop: 10,
            padding: 5,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Feather name="search" size={20} />
          <TextInput
            style={{ height: 30, marginLeft: 10 }}
            placeholder="Search..."
            value={searchValue}
            onChangeText={setSearchValue}
          />
        </View>
      </SafeAreaView>
    );
  };

export default HeaderComponent;