export const AD_config = {
  TENAN_ID: "660d74ab-52d0-4edd-b1b6-dfd40b692155",
  GRAND_TYPE: "DEFAULT",
  CLIENTE_ID: "75f3fb39-795c-4fc9-9da3-ea469558d58b",
  CLIENTE_SECRET: "psa8Q~rGFgVNlg9sCqyunZZOOTjNt37Ui3EZGaN-",
  SCOPES: "user.read openid profile offline_access",
  SCOPE_ARRAY: ["openid", "profile", "email", "offline_access"],
  ANDROID_REDIRECT_URI: "msauth://com.test.test/9DtNbHJctvXZStn4kYC3Bl5Uzio%3D",
  IOS_REDIRECT_URI: "msauth.com.test.test://auth",
  SIGNATURE_HASH: "9DtNbHJctvXZStn4kYC3Bl5Uzio=",
  ISSUER: "https://login.microsoftonline.com/" + TENAN_ID + "/v2.0",
};

export const msalAndroidConfig = {
  client_id: AD_config.CLIENTE_ID,
  authorization_user_agent: AD_config.GRAND_TYPE,
  redirect_uri: AD_config.ANDROID_REDIRECT_URI,
  authorities: [
    {
      type: "AAD",
      audience: {
        type: "AzureADMyOrg",
        tenant_id: AD_config.TENAN_ID,
      },
    },
  ],
};
export const msalIOSConfig = {
  client_id: AD_config.CLIENTE_ID,
  authorization_user_agent: AD_config.GRAND_TYPE,
  redirect_uri: AD_config.IOS_REDIRECT_URI,
  authorities: [
    {
      type: "AAD",
      audience: {
        type: "AzureADMyOrg",
        tenant_id: AD_config.TENAN_ID,
      },
    },
  ],
};
// Log in to get an authentication token
// Log in to get an authentication token
const authState = await authorize(config);

// Refresh token
const refreshedState = await refresh(config, {
  refreshToken: authState.refreshToken,
});
