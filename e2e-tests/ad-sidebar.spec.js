import {
	createNewPost,
	enablePageDialogAccept,
	getEditedPostContent,
} from '@wordpress/e2e-test-utils';



describe( 'Ad sideber', () => {
	beforeAll( async () => {
		await enablePageDialogAccept();
	} );
	beforeEach( async () => {
		await createNewPost();
	} );

	it( 'Advertisements toggle should be available', async () => {

		// Check if advertisements toggle exist
		expect( await page.$( '.components-form-toggle__input' ) ).not.toBeNull();

		expect( await getEditedPostContent() ).toMatchSnapshot();
	} );

} );
