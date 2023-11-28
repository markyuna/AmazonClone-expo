import { Feather } from "@expo/vector-icons";
import { SafeAreaView, View, TextInput } from "react-native";


interface HeaderComponentProps {
    searchValue: string;
    setSearchValue: () => void;
  }
  
const HeaderComponent = ({
    searchValue, setSearchValue,
  }: HeaderComponentProps) => {
  
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