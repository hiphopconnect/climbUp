import React, { useState } from "react";
import { View } from "react-native";
// Components
import HeadText from "../../components/reuseable/HeadText";
import CustTextInput from "../../components/reuseable/CustTextInput";
import CustTextInputPassword from "../../components/reuseable/CustTextInputPassword";
import ButtonSmall from "../../components/reuseable/ButtonSmall";
import Button from "../../components/reuseable/Button";

// --------------------------------------------------------------------

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState("ag");
  const [password, setPassword] = useState("123");

  // Request on backend -> Login
  const handleLogin = () => {
    if (user === "ag" && password === "123") {
      console.log("user, password :>> ", user, password);
      navigation.replace("DashboardTabs");
    } else {
      console.log("Anmeldung nicht geklappt");
    }
  };

  return (
    <>
      <HeadText content="Welcome back, climber!" />
      <CustTextInput
        text={"Username or E-Mail"}
        keyboardType={"email-address"}
        user={user}
        setUser={setUser}
      />
      <CustTextInputPassword
        secureTextEntry={true}
        text="Password"
        password={password}
        setPassword={setPassword}
      />
      <Button text="Log in" onPress={handleLogin} />
      <View style={{ marginBottom: 20 }} />
      <ButtonSmall
        text="Forgot your password?"
        onPress={() => navigation.replace("ForgotPassword")}
      />
      <ButtonSmall
        text="Not signed in yet?"
        onPress={() => navigation.replace("Registration")}
      />
    </>
  );
}
