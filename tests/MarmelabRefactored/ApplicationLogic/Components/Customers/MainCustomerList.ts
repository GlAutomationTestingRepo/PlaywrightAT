import {BasePage} from "../../Pages/BasePage";

export class MainCustomerList extends BasePage {
	Containers ={
		MainCustomerContainer:this.page.locator("//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root RaList-content css-3qgb5u']"),
	};

	SubContainer={
		InfoField:this.page.locator("//div[@class='MuiSnackbarContent-message css-1w0ym84']")
	};

	Elements ={
		UniqueCustomerLineLocator:this.Containers.MainCustomerContainer.locator("//td[@class='MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall column-last_name RaDatagrid-rowCell css-1o6fzn1']"),
	};

	async PressOnCreatedCustomer(CustomerName:string){
	await this.Elements.UniqueCustomerLineLocator.locator(`//div[text()='${CustomerName}']`).click();	
	};
};