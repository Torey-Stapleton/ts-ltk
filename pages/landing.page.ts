import { Locator, Page } from '@playwright/test';

export class LandingPage {
    readonly signupBtn: Locator;

    constructor(page: Page) {
        this.signupBtn = page.getByRole('link', { name: 'Sign up' });
    }
}