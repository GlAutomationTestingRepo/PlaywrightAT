import {BasePage} from "../../Pages/BasePage";

export class CustomerOrders extends BasePage {
	Containers ={
		ProductContainer:this.page.locator("(//tbody[@class='MuiTableBody-root css-1xnox0e'])[1]"),
	};

	Elements ={
		NameOfItemsInOrder:this.Containers.ProductContainer.locator("//a[@class='MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways RaLink-link css-19ifyur']"),
	};

	get getOrderContainer(){
		return "//div[@class='MuiCardContent-root css-1qw96cp']";
	};
};