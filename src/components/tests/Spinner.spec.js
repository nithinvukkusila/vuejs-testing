import { mount } from '@vue/test-utils';
import Spinner from '@/components/Spinner.vue';

// describe a test name
describe('Spinner.vue', () => {
    // mount our spinner component 
    const wrapper = mount(Spinner);

    // test for having svg
    it('it has cicle', () => {
        expect(wrapper.contains('circle')).toBe(true)
    })
    it('it has Svg', () => {
        expect(wrapper.contains('svg')).toBe(true)
    })
});