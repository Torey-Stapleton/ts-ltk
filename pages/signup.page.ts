import { Locator, Page } from '@playwright/test';

export class SignupPage {
    readonly signupHeading: Locator;
    readonly emailInput: Locator;
    readonly continueBtn: Locator;
    readonly welcomeHeading: Locator;
    readonly passwordInput: Locator;
    readonly signupBtn: Locator; 

    constructor(page: Page) {
        this.signupHeading = page.getByRole('heading', { name: 'Sign Up' });
        this.emailInput = page.getByLabel('Enter your email');
        this.continueBtn = page.getByRole('button', { name: 'continue' });
        this.welcomeHeading = page.getByRole('heading', { name: 'Welcome to LTK' });
        this.passwordInput = page.getByLabel('Password');
        this.signupBtn = page.getByRole('button', { name: 'sign up to begin shopping' });
    }

    async enterEmailAndClickContinue(email: string) {
        await this.emailInput.fill(email);
        await this.continueBtn.click();
    }

    async enterPasswordAndClickSignup(password: string) {
        await this.passwordInput.fill(password);
        await this.signupBtn.click();
    }
}