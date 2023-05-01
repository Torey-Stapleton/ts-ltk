import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly discoverLink: Locator;
    readonly forYouBadge: Locator; 

    constructor(page: Page) {
        this.discoverLink = page.getByRole('link', { name: 'Discover' });
        this.forYouBadge = page.getByRole('link', { name: 'For You', exact: true });
    }
}