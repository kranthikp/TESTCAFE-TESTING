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
        await t.setTestSpeed(0.1) // speed should be between 0.01 to 
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
    await t.typeText("#developer-name", "kkpanda")
    await t.click("#submit-button")

    await t.expect(Selector('#article-header').innerText).contains('kkpanda') // kranthi

})