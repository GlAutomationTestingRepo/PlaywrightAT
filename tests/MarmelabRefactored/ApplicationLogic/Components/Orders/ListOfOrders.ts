import {BasePage} from "../../Pages/BasePage";

export class ListOfOrders extends BasePage {
	Containers ={
		TableContainer:this.page.locator("//tbody[@class='MuiTableBody-root datagrid-body RaDatagrid-tbody css-1xnox0e']"),
	};

	Elements ={
		Reference:this.Containers.TableContainer.locator("(//span[@class='MuiTypography-root MuiTypography-body2 css-68o8xu'])[2]"),
	};
};