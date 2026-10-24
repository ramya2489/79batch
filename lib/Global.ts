
import{Page} from '@playwright/test'
export  class Global {
    constructor(public page: Page){

    }
public url : string = "https://sureshitacademy.in/hrms/login.php"
public username: string = "sureshit";
public password : string = "sureshit";
public firstname : string = "ramya";
public lastname : string = "krishna";
public nicname : string = "krish";

public textbox_username:string = "//input[@name='txtUserName']"
public textbox_password:string = "//input[@name='txtPassword']"
public button_login:string = "//input[@name='Submit']"
public link_logout = "//a[text()='Logout']"
public frame = "//iframe[@name='rightMenu']"
public button_add = "//input[@value='Add']"
public textbox_firstname = "//input[@name='txtEmpFirstName']"
public textbox_lastname = "//input[@name='txtEmpLastName']"
public button_save  = "//input[@class='savebutton']"
public button_edit = "//input[@id='btnEditPers']"
public textbox_nicname = "//input[@id='txtEmpNickName']"
public save_button = "//input[@id='btnEditPers']"
public textbox_searchby= "//select[@name='loc_code']"
public textbox_searchfor = "//input[@id='loc_name']"
public button_search = "//input[@value='Search']"
public checkbox  = "//input[@id='loc_name']"
//public button_delete = "//input[@value='Delete']"

}