import {BasePage} from "../../Pages/BasePage";

export class NavigationThroughOrders extends BasePage {
	Containers ={
		PageNavigationContainer:this.page.locator("//div[@role='navigation']"),
	};

	Elements ={
		AmountOfPagesInOrder:this.Containers.PageNavigationContainer.locator("//p[@class='MuiTypography-root MuiTypography-body2 css-68o8xu']"),
		NextOrder:this.Containers.PageNavigationContainer.locator("//a[@aria-label='Go to next page']"),
	};
};