import { Text, View } from "react-native";
import Signin from "../components/login";
import SigninAs from "../components/signinas";
// import { tw } from 'nativewind';


// import { initialize } from 'react-native-clarity';

// initialize("n48vwu9a8u");

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Signin />
    </View>
  );
}
