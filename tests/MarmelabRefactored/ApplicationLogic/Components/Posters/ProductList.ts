import {BasePage} from "../../Pages/BasePage";

export class ProductList extends BasePage{
	Containers ={
		ProductListContainer:this.page.locator("//ul[@class='MuiImageList-root MuiImageList-standard css-tidt1y']"),
	};

	Elements ={
		FlexibleLocatorForProduct:this.Containers.ProductListContainer.locator("//div[@class='MuiImageListItemBar-title css-1w4d4gp']"),
	};
};