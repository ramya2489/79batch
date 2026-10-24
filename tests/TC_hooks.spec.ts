import {test} from '@playwright/test'
test.beforeAll(async()=>{
console.log("open application")
})
test.afterAll(async()=>{
console.log("close application")
})
test('login',async()=>{
console.log("login complted is")
})
test('logout',async()=>{
console.log("logout complted")
})

