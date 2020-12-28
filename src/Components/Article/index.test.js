import React from 'react';
import Article from './index';

import renderer from 'react-test-renderer';

const dummy = {
    title: "Test Title",
    content: "Test Content",
}

describe('Article', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <Article article={dummy}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
})