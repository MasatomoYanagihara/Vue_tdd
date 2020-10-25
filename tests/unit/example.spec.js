import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  // it('テストのタイトル', () => { テスト項目 })
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })

    // chai.jsが提供する検証用のメソッド
    // 生成されたHTMLにmsg変数と同じテキスト（new message）が含まれているかを検証
    expect(wrapper.text()).to.include(msg)
  })
})
