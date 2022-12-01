export const AD_config = {
  TENAN_ID: "660d74ab-52d0-4edd-b1b6-dfd40b692155",
  GRAND_TYPE: "password",
  CLIENTE_ID: "75f3fb39-795c-4fc9-9da3-ea469558d58b",
  CLIENTE_SECRET: "psa8Q~rGFgVNlg9sCqyunZZOOTjNt37Ui3EZGaN-",
  SCOPES: "user.read openid profile offline_access",
  REDIRECT_URI: "https:localhost:3000/",
};

export const msalConfig = {
  issuer: "https://login.microsoftonline.com/" + AD_config.TENAN_ID + "/v2.0",
  clientId: AD_config.CLIENTE_ID,
  redirectUrl: "com.myapp://oauth/redirect/",
  scopes: ["openid", "profile", "email", "offline_access"],
};

// Log in to get an authentication token
const authState = async (config) => await authorize(config);

// Refresh token
const refreshedState = async (config) =>
  await refresh(config, {
    refreshToken: authState.refreshToken,
  });
