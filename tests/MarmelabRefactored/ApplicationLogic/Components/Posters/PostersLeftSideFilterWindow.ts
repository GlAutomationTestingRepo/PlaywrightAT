import {BasePage} from "../../Pages/BasePage";

export class PostersLeftSideFilterWindow extends BasePage {
	Containers ={
		FiltrationContainer:this.page.locator("//div[@class='MuiCardContent-root css-14x6a5n']"),
	};

	Elements ={
		Categories:this.Containers.FiltrationContainer.locator("//ul[@class='MuiList-root MuiList-dense css-1uzmcsd']"),
	};

	async SelectSpecificCategory (Value:string){
		await this.page.waitForSelector(this.getFiltrationContainer);
		await this.Elements.Categories.locator(`//span[text()='${Value}']`).click();
		await this.page.waitForTimeout(1000);
	};
	
	get getFiltrationContainer(){
		return "//div[@class='MuiCardContent-root css-14x6a5n']";
	};
};