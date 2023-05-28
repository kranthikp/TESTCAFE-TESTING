import { Selector } from 'testcafe'

// prettier-ignore
fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`

test('My First TestCafe Test', async t =>{
    //here goes testcafe code
    await t.typeText("#developer-name", "kranthi")
    await t.click("#submit-button")

})