export const oktaConfig = {
    clientId: '0oadj5dzceJaoCQxX5d7',
    issuer: 'https://dev-01064110.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}