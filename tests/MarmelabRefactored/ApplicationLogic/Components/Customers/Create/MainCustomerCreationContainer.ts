import {BasePage} from "../../../Pages/BasePage";

export class MainCustomerCreationComponent extends BasePage{
	Containers ={
		CustomerCreationContainer:this.page.locator("//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root RaCreate-card css-3qgb5u']"),
	};

	Elements ={
		InputFields:{
			FirstName:this.Containers.CustomerCreationContainer.locator("//input[@name='first_name']"),
			LastName:this.Containers.CustomerCreationContainer.locator("//input[@name='last_name']"),
			Email:this.Containers.CustomerCreationContainer.locator("//input[@name='email']"),
			Address:this.Containers.CustomerCreationContainer.locator("//textarea[@name='address']"),
			City:this.Containers.CustomerCreationContainer.locator("//input[@name='city']"),
			State:this.Containers.CustomerCreationContainer.locator("//input[@name='stateAbbr']"),
			ZipCode:this.Containers.CustomerCreationContainer.locator("//input[@name='zipcode']"),
			Password:this.Containers.CustomerCreationContainer.locator("//input[@name='password']"),
			ConfirmPassword:this.Containers.CustomerCreationContainer.locator("//input[@name='confirm_password']"),
		},
	};

	async FillUpInputFields (FirstName:string,LastName:string,Email:string,Address:string,City:string,State:string,ZipCode:string,Password:string){
		await this.Elements.InputFields.FirstName.fill(FirstName);
		await this.Elements.InputFields.LastName.fill(LastName);
		await this.Elements.InputFields.Email.fill(Email);
		await this.Elements.InputFields.Address.fill(Address);
		await this.Elements.InputFields.City.fill(City);
		await this.Elements.InputFields.State.fill(State);
		await this.Elements.InputFields.ZipCode.fill(ZipCode);
		await this.Elements.InputFields.Password.fill(Password);
		await this.Elements.InputFields.ConfirmPassword.fill(Password);
	};
};