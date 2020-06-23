import {mountWithPlugins} from "../../../tests/units/test-utils/mountWithPlugins";
import Comment from '@/components/Comment.vue';

// we will use this to mock a state for our store
const mockState = {
    items: {
        'item-id': {
            by: 'john',
            time: Date.now(),
            text: 'hello world',
            kids: [],
        }
    }
};

// these are some mock options to pass to the component
const mountOptions = {
    propsData: {
        // notice that the id need to match to an id in the store
        id: 'item-id' 
    }
};

describe('Comment.vue', () => {

    it('has comment with data in the store', () => {
        const wrapper = mountWithPlugins(Comment, mountOptions, mockState);
        expect(wrapper.contains('.comment')).toBe(true)
    });

    it('has no data with no store data ', function () {
        const wrapper = mountWithPlugins(Comment, mountOptions);
        expect(wrapper.contains('.comment')).toBe(false)
    });

    it('has no data with no comment id passed ', function () {
        const wrapper = mountWithPlugins(Comment);
        expect(wrapper.contains('.comment')).toBe(false)
    });
});