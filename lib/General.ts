import { Global } from "./Global";
export class General extends Global{
async Application(){
await this.page.goto(this.url)
await this.page.waitForTimeout(3000)
console.log("Application opened")
}
async login(){
await this.page.locator(this.textbox_username).fill(this.username)
await this.page.locator(this.textbox_password).fill(this.password)
await this.page.locator(this.button_login).click()
console.log("login completed")
console.log("login has been complted")
}
/*async deleteemp(){
const frame =  this.page.frameLocator(this.frame)
await frame.locator(this.textbox_searchby).selectOption('Emp. ID')
await frame.locator(this.textbox_searchfor).fill('11835')
await frame.locator(this.button_search).click()
await frame.locator(this.checkbox).check()
await frame.locator(this.button_delete).click()
console.log("delete employeee")

}*/
async addemployee(){
const frame = this.page.frameLocator(this.frame)
await frame.locator(this.button_add).click();
await frame.locator(this.textbox_firstname).fill(this.firstname)
await frame.locator(this.textbox_lastname).fill(this.lastname)
await frame.locator(this.button_save).click()
await frame.locator(this.button_edit).click()
await frame.locator(this.textbox_nicname).fill(this.nicname)
await frame.locator(this.save_button).click()
console.log("employee added sucessfully")
}

async logout(){
await this.page.locator(this.link_logout).click()
console.log("logout complted")
}
async waitstst(){
await this.page.waitForTimeout(3000)
console.log("wait for 3 seconds")
}
}
