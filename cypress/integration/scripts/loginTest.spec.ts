import { clearAndType, click } from "../../utils";
import { loginPage } from "../page-objects/loginPage";
const { username, password } = Cypress.env("loginCreds");

describe("Tests related to login page", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("validating if user can log into the application", () => {
        clearAndType(loginPage.userNameField, username);
        clearAndType(loginPage.passwordField, password);
        click(loginPage.loginBtn);
    });
});
