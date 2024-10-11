import {BasePage} from "../../../Pages/BasePage";

export class ProfileFooterToolBar extends BasePage {
	Containers ={
		FooterButtonContainer:this.page.locator("//div[@class='RaToolbar-defaultToolbar']"),
	};

	Elements ={
		Buttons :{
			Delete:this.Containers.FooterButtonContainer.locator("//button[text()='Delete']"),
		},
	};

	async PressOnDelete(){
		await this.page.waitForSelector(this.getToolBarContainer);
		await this.Elements.Buttons.Delete.click();
	};

	get getToolBarContainer(){
		return "//div[@class='RaToolbar-defaultToolbar']";
	};
};