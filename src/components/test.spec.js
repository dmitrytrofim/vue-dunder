import { shallowMount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

describe('test hello world', () => {
  it('check counter', async () => {
    const wrapper = shallowMount(HelloWorld);

    await wrapper.find('.btn').trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.count).toBe(1);
  });
});
