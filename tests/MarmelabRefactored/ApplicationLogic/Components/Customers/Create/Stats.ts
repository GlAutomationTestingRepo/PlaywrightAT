import {BasePage} from "../../../Pages/BasePage";

export class Stats extends BasePage {
	Containers ={
		StatsContainer:this.page.locator("//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4 css-19egsyp']"),
	};

	SubContainers ={
		DropDownContainer:this.page.locator("//ul[@class='MuiList-root MuiList-padding MuiMenu-list css-r8u8y9' and @role='listbox']"),
	};

	Elements ={
		DropDowns :{
			Segments:this.Containers.StatsContainer.locator("//div[@data-testid='selectArray']"),
			HasNewsLetter:this.Containers.StatsContainer.locator("//span[text()='Has newsletter']"),
		},
	};

	async SelectSegmentValues (SegmentValue:string,OtherSegmentValue:string){
		await this.Elements.DropDowns.Segments.click();
		await this.page.waitForSelector(this.getDropDownContainer);
		await this.SubContainers.DropDownContainer.locator(`//li[text()='${SegmentValue}']`).click();
		await this.SubContainers.DropDownContainer.locator(`//li[text()='${OtherSegmentValue}']`).click();
	};

	get getDropDownContainer(){
		return "//ul[@class='MuiList-root MuiList-padding MuiMenu-list css-r8u8y9' and @role='listbox']";
 	};
};