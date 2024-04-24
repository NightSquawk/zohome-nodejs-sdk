//

// authenticator
import { OAuthBuilder } from "./models/authenticator/oauth_builder.js";
import { OAuthToken } from "./models/authenticator/oauth_token.js";
import * as Token from "./models/authenticator/token.js";

// Begin OAuth2.0 authentication
// export function initialize(client_id, client_secret, refresh_token, base_url) {
//     const oauthBuilder = new OAuthBuilder(client_id, client_secret, refresh_token, base_url);
//     const oauthToken = new OAuthToken(oauthBuilder);
//     Token.setToken(oauthToken);

}
export { Initializer as initialize } from "./routes/initializer";