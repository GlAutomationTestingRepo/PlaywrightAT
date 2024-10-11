import {BasePage} from "../../Pages/BasePage";

export class LeftSideFilterWindow extends BasePage {
	Containers ={
		FiltrationContainer:this.page.locator("//div[@class='MuiCardContent-root css-14x6a5n']"),
	};

	async PressOnSpecificSegment(SegmentValue:string){
		await this.page.waitForSelector(this.getFiltrationContainer);
		await this.Containers.FiltrationContainer.locator(`//span[text()='${SegmentValue}']`).click();
	};

	get getFiltrationContainer(){
		return "//div[@class='MuiCardContent-root css-14x6a5n']";
	}
};