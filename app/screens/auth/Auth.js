import { AD_config } from "../../commons/config_azure";
import React, { useState } from "react";
import { View } from "react-native";
import StyledButton from "../../components/StyledButton";
import StyledText from "../../components/StyledText";
import { authorize } from "react-native-app-auth";
import StyledInput from "../../components/StyledInput";

const config = {
  warmAndPrefetchChrome: true,
  issuer: AD_config.ISSUER,
  clientId: AD_config.CLIENTE_ID,
  redirectUrl: AD_config.ANDROID_REDIRECT_URI,
  scope: AD_config.SCOPES,
};
// prefetchConfiguration(config);

export default function Auth() {
  const [session, setSession] = useState("");
  const [email, setEmail] = useState("cristhian.castro.lucas@udla.edu.ec");
  const [password, setPassword] = useState("@Isabel03061997");
  const login = async () => {
    try {
      const result = await authorize(config);
      console.log(result);
      setSession(result);
    } catch (error) {
      console.log(error);
    }
  };
  const login2 = async () => {
    try {
      const result = await authorize(config);
      console.log(result);
      setSession(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ justifyContent: "center", paddingHorizontal: 30, flex: 1 }}>
      <StyledInput placeholder="Email" value={email} />
      <StyledInput placeholder="Password" value={password} password />
      <StyledButton title="Login" />
      <StyledText center>or</StyledText>
      <StyledButton title="Login" onPress={login} />
      <StyledText>Session: {session}</StyledText>
    </View>
  );
}
