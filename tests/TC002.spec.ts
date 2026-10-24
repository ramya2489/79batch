import {test} from '@playwright/test'
import { General } from '../lib/General'
test('for delete employee',async({page})=>{
const d1 = new General(page);
await d1.Application();
await d1.waitstst();
await d1.login();
await d1.waitstst();
})