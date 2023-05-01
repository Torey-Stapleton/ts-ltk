import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { SignupPage } from '../pages/signup.page';
import { LandingPage } from '../pages/landing.page';
import { HomePage } from '../pages/home.page';

test.describe('Sign up', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('user is redirected to discover page on successful sign up', async ({ page }) => {
    const signupPage = new SignupPage(page);
    const landingPage = new LandingPage(page);
    const homePage = new HomePage(page);

    await test.step('clicks sign up and navigates to /login', async () => {
      await landingPage.signupBtn.click();
      await expect(page).toHaveURL(/.*login/);
      await expect(signupPage.signupHeading).toBeVisible();
    });

    await test.step('enters email, clicks continue, and changes to welcome heading', async () => {
      await signupPage.enterEmailAndClickContinue(faker.internet.email());
      await expect(signupPage.signupHeading).not.toBeVisible();
      await expect(signupPage.welcomeHeading).toBeVisible();
    });

    await test.step('enters password, clicks signup, and navigates to discover page', async () => {
      await signupPage.enterPasswordAndClickSignup(faker.internet.password());
      await expect(page).toHaveURL(/.*home\/for-you/, { timeout: 10000 });
      await expect(homePage.discoverLink).toBeVisible();
      await expect(homePage.forYouBadge).toBeVisible();
    });
  });
})
