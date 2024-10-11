import {BasePage} from "../../../Pages/BasePage";

export class ReviewList extends BasePage {
	Containers ={
		ReviewListContainer:this.page.locator("//table[@class='MuiTable-root RaDatagrid-table css-1owb465']"),
	};

	Elements ={
		Customer:this.Containers.ReviewListContainer.locator("(//div[@class='MuiTypography-root MuiTypography-body2 css-1wk3cmv'])[1]"),
	};

	get getReviewListContainer(){
		return "//table[@class='MuiTable-root RaDatagrid-table css-1owb465']";
	};
};