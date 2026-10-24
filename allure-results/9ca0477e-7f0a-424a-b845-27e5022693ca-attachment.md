# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Testsuite_Regresstion.spec.ts >> testsuite >> @ramya
- Location: tests\Testsuite_Regresstion.spec.ts:5:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://sureshitacademy.in/hrms/login.php
Call log:
  - navigating to "https://sureshitacademy.in/hrms/login.php", waiting until "load"

```

# Test source

```ts
  1  | import { Global } from "./Global";
  2  | export class General extends Global{
  3  | async Application(){
> 4  | await this.page.goto(this.url)
     |                 ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://sureshitacademy.in/hrms/login.php
  5  | await this.page.waitForTimeout(3000)
  6  | console.log("Application opened")
  7  | }
  8  | async login(){
  9  | await this.page.locator(this.textbox_username).fill(this.username)
  10 | await this.page.locator(this.textbox_password).fill(this.password)
  11 | await this.page.locator(this.button_login).click()
  12 | console.log("login completed")
  13 | }
  14 | /*async deleteemp(){
  15 | const frame =  this.page.frameLocator(this.frame)
  16 | await frame.locator(this.textbox_searchby).selectOption('Emp. ID')
  17 | await frame.locator(this.textbox_searchfor).fill('11835')
  18 | await frame.locator(this.button_search).click()
  19 | await frame.locator(this.checkbox).check()
  20 | await frame.locator(this.button_delete).click()
  21 | console.log("delete employeee")
  22 | 
  23 | }*/
  24 | async addemployee(){
  25 | const frame = this.page.frameLocator(this.frame)
  26 | await frame.locator(this.button_add).click();
  27 | await frame.locator(this.textbox_firstname).fill(this.firstname)
  28 | await frame.locator(this.textbox_lastname).fill(this.lastname)
  29 | await frame.locator(this.button_save).click()
  30 | await frame.locator(this.button_edit).click()
  31 | await frame.locator(this.textbox_nicname).fill(this.nicname)
  32 | await frame.locator(this.save_button).click()
  33 | console.log("employee added sucessfully")
  34 | }
  35 | 
  36 | async logout(){
  37 | await this.page.locator(this.link_logout).click()
  38 | console.log("logout complted")
  39 | }
  40 | async waitstst(){
  41 | await this.page.waitForTimeout(3000)
  42 | console.log("wait for 3 seconds")
  43 | }
  44 | }
```