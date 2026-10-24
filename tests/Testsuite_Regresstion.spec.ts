import {test} from '@playwright/test'
import { General } from '../lib/General';

test.describe('testsuite', ()=>{
test('@ramya',async({page})=>{

const h1 = new General(page);
 await h1.Application();
  await h1.login();
  await h1.addemployee();
  await h1.logout();
});
test('for delete employee',async({page})=>{
const d1 = new General(page);
await d1.Application();
await d1.waitstst();
await d1.login();
await d1.waitstst();
})
})  

