import { loginErrorPageActions } from "@ticketmaster/helpers/loginErrorPageActions";
import * as messages from "../resources/data/messages.json";

class LoginErrorPageAssertions {
    public theUserShouldSeeAnInvalidErrorForPassword(){
        expect(loginErrorPageActions.invalidPasswordlElementText).toHaveTextContaining(messages.INVALID_PASSWORD);
    }

    public theUserShouldSeeAnInvalidErrorForEmail(){
        expect(loginErrorPageActions.invalidEmailElementText).toHaveTextContaining(messages.INVALID_EMAIL);
    }
}

export const loginErrorPageAssertions = new LoginErrorPageAssertions();
