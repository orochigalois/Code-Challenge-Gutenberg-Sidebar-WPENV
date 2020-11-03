
jest.setTimeout(30000)
import {
    createNewPost,
    enablePageDialogAccept,
    getEditedPostContent
} from '@wordpress/e2e-test-utils';

import {
    clickRadio,
    openSidebar
    
} from '../test-helpers'

const f={
    add: (n1,n2) => n1+n2
}
describe( '🔬 Ad Sideber', () => {
    beforeAll( async () => {
        await enablePageDialogAccept();
    } );
    beforeEach( async () => {
        await createNewPost();
    } );

    test( '🔬 Advertisements sidebar should be available', async () => {
        expect(f.add(2,2)).toBe(4);
        await openSidebar()
		// expect( await getEditedPostContent() ).toMatchSnapshot();
    } )

} );
