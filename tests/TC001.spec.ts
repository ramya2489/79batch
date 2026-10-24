import{test} from'@playwright/test'
import{General} from '../lib/General'
test('@smoke_TC001',async({page})=>{

const h1 = new General(page);
 await h1.Application();
  await h1.login();
  await h1.addemployee();
  await h1.logout();
});

