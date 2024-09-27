import { BasePage } from "../../Pages/BasePage";
import { expect } from "@playwright/test";

export class Customers extends BasePage{

   Containers={
      MainPage:{
         HeaderButtonContainer:this.page.locator("//div[@class='RaList-actions css-34opws']"),
         FiltrationContainer:this.page.locator("//div[@class='MuiCardContent-root css-14x6a5n']"),
         MainCustomerContainer:this.page.locator("//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root RaList-content css-3qgb5u']"),
      },
      CustomerCreation:{
         CustomerCreationContainer:this.page.locator("//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root RaCreate-card css-3qgb5u']"),
         FooterButtonContainer:this.page.locator("//div[@class='RaToolbar-defaultToolbar']"),
         StatsContainer:this.page.locator("//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4 css-19egsyp']")
      },  
   };

   SubContainers={
      DropDownContainers:this.page.locator("//ul[@class='MuiList-root MuiList-padding MuiMenu-list css-r8u8y9' and @role='listbox']"),
      
   };

   Elements={
      Buttons:{
         Create:this.Containers.MainPage.HeaderButtonContainer.locator("//a[@aria-label='Create']"),
         SaveCustomer:this.Containers.CustomerCreation.FooterButtonContainer.locator("//button[text()='Save']"),
         ReserveButtonLocatorForStatus:this.Containers.CustomerCreation.FooterButtonContainer.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-1ynm925']"),
         Delete:this.Containers.CustomerCreation.FooterButtonContainer.locator("//button[text()='Delete']"),
      },
      InputFields:{
         FirstName:this.Containers.CustomerCreation.CustomerCreationContainer.locator("//input[@name='first_name']"),
         LastName:this.Containers.CustomerCreation.CustomerCreationContainer.locator("//input[@name='last_name']"),
         Email:this.Containers.CustomerCreation.CustomerCreationContainer.locator("//input[@name='email']"),
         Adress:this.Containers.CustomerCreation.CustomerCreationContainer.locator("//textarea[@name='address']"),
         City:this.Containers.CustomerCreation.CustomerCreationContainer.locator("//input[@name='city']"),
         State:this.Containers.CustomerCreation.CustomerCreationContainer.locator("//input[@name='stateAbbr']"),
         ZipCode:this.Containers.CustomerCreation.CustomerCreationContainer.locator("//input[@name='zipcode']"),
         Password:this.Containers.CustomerCreation.CustomerCreationContainer.locator("//input[@name='password']"),
         ConfirmPassword:this.Containers.CustomerCreation.CustomerCreationContainer.locator("//input[@name='confirm_password']"),
         UniqueValueLocator:this.SubContainers.DropDownContainers.locator("//li[@role='option']")
      },
      Dropdowns:{
         Segments:this.Containers.CustomerCreation.StatsContainer.locator("//div[@data-testid='selectArray']"),
         HasNewsletter:this.Containers.CustomerCreation.StatsContainer.locator("//span[text()='Has newsletter']"),
      },
      InfoPopUP:{
         CustomerCreationPopUP:this.page.locator("//div[@role='alert']"),
      },
      CustomerList:{
         CustomerLines:this.Containers.MainPage.MainCustomerContainer.locator("//td[@class='MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall column-last_name RaDatagrid-rowCell css-1o6fzn1']"),
      },
   };

   async CustomerCreation(FirstName:string,LastName:string,Email:string,Address:string,City:string,State:string,ZipCode:string,Password:string){
      await this.Elements.Buttons.Create.click();
      await this.page.waitForSelector(this.getCreationContainer);
      await this.Elements.InputFields.FirstName.fill(FirstName);
      await this.Elements.InputFields.LastName.fill(LastName);
      await this.Elements.InputFields.Email.fill(Email);
      await this.Elements.InputFields.Adress.fill(Address);
      await this.Elements.InputFields.City.fill(City);
      await this.Elements.InputFields.State.fill(State);
      await this.Elements.InputFields.ZipCode.fill(ZipCode);
      await this.Elements.InputFields.Password.fill(Password);
      await this.Elements.InputFields.ConfirmPassword.fill(Password);
      await expect(this.Elements.Buttons.ReserveButtonLocatorForStatus).toHaveAttribute('tabindex','0');
      await this.Elements.Buttons.SaveCustomer.click();
      const infoValue= await this.Elements.InfoPopUP.CustomerCreationPopUP.innerText();
      if(infoValue=="Element created"){
         console.log("Everything is created sucessfully");
      };
   };

   async SetUpAdditionalStats(ValueSegment:string,SecondValueSegment:string){
      await this.Elements.Dropdowns.Segments.click();
      await this.page.waitForSelector(this.getDropDownContainer);
      await this.SubContainers.DropDownContainers.locator(`//li[text()="${ValueSegment}"]`).click();
      await this.SubContainers.DropDownContainers.locator(`//li[text()="${SecondValueSegment}"]`).click();
      await this.Elements.Buttons.SaveCustomer.click({force:true});
      await this.Elements.Buttons.SaveCustomer.click();
   };

   async FindCreatedCustomerBySegmentFilters(ValueSegment:string,FirstName:string){
      await this.page.waitForSelector(this.getFiltrationContainer);
      await this.Containers.MainPage.FiltrationContainer.locator(`//span[text()='${ValueSegment}']`);
      await this.Elements.CustomerList.CustomerLines.locator(`//div[text()='${FirstName}']`).click();
   };

   async DeleteCreatedCustomer(){
      await this.page.waitForSelector(this.getCreatedCustomerContainer);
      await this.Elements.Buttons.Delete.click();
   };

   get getCreationContainer(){
      return "//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root RaCreate-card css-3qgb5u']";
   };

   get getSaveButtonPositiveStatus(){
      return "//button[@tabindex='0']"
   };

   get getDropDownContainer(){
      return "//ul[@class='MuiList-root MuiList-padding MuiMenu-list css-r8u8y9' and @role='listbox']";
   };

   get getFiltrationContainer(){
      return "//div[@class='MuiCardContent-root css-14x6a5n']";
   };

   get getCreatedCustomerContainer(){
      return "//div[@class='MuiCardContent-root css-1f60h1y']";
   };  
};