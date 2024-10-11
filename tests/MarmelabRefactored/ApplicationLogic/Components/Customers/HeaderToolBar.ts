import {BasePage} from "../../Pages/BasePage";

export class HeaderToolBar extends BasePage{
	Containers ={
		HeaderButtonContainer:this.page.locator("//div[@class='RaList-actions css-34opws']"),
	};
	
	Elements ={
		Create:this.Containers.HeaderButtonContainer.locator("//a[@aria-label='Create']"),
	};

	async PressOnCreate(){
		await this.Elements.Create.click();
		await this.page.waitForSelector(this.getCreationContainer);
	};

	get getCreationContainer(){
		return "//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root RaCreate-card css-3qgb5u']";
 	};
};