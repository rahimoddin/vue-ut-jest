import Counter from '@/components/Counter'
import {mount} from '@vue/test-utils'

describe('Counter.vue', ()=>{

    let wrapper;
    beforeEach(()=>{
        wrapper = mount(Counter)
    })

    test('defaults to 0', ()=> {
        expect(wrapper.vm.count).toBe(0)
    })

    test('increment the counter when button + clicked', async ()=> {

        wrapper.find('button.inc').trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.find('.count').text()).toBe("1")
    })


    test('decrement the counter when clicked on - button ', async ()=> {

        wrapper.vm.count = 5
        wrapper.find('button.dec').trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.count).toEqual(4)
    })

    



})