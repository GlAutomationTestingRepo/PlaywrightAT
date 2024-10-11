import {BasePage} from "../../../Pages/BasePage";

export class TabList extends BasePage {
	Containers ={
		HeaderProductContainer: this.page.locator("//div[@class='MuiTabs-root css-orq8zk']"),
	};

	SubContainers ={

	};

	Elements={
		ReviewsCounter: this.page.locator("//span[@class='MuiTypography-root MuiTypography-body2 css-1si9tzf']"),
		Reviews: this.Containers.HeaderProductContainer.locator("//a[@id='tabheader-reviews']"),
	};

	get getTabListContainer(){
		return "//div[@class='MuiTabs-flexContainer css-k008qs']"
	};
};