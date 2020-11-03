import {
    getAllBlocks,
    selectBlockByClientId,
    insertBlock,
} from '@wordpress/e2e-test-utils';


// Used to open the sidebar which is closed by default
export const openSidebar = async () => {
    await page.click('.edit-post-header__settings [aria-label="Advertising Settings"]')
}