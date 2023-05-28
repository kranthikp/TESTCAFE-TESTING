import { Selector } from 'testcafe'

// prettier-ignore
fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t=>{
        // Test setup goes here
        // await runDatabaseReset()
        // await seeTestData
    })
    .beforeEach(async t=>{
        // Runs before each test
        await t.setTestSpeed(1) // speed should be between 0.01 to 
    })
    .after(async t=>{
        // Cleaning test data
        // Logging and sending data to monitoring systems
    })
    .afterEach(async t=>{
        // Runs after each test
    })
    

test('My First TestCafe Test', async t =>{
    //here goes testcafe code
    const dev_name_input = Selector("#developer-name")
    const submit_button = Selector("#submit-button")
    const articalText = Selector('#article-header').innerText

    // await t.takeScreenshot({fullPage: true})
    // await t.takeElementScreenshot(submit_button) // helpful for visual regression to compare and assert

    await t.typeText(dev_name_input, "kranthi")
    // await t.wait(3000)
    await t.click(submit_button)
    await t.expect(articalText).contains('kranthi') // kkpanda
})