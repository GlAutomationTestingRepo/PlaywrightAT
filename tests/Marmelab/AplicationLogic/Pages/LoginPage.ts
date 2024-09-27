import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

    Containers={
        LoginPageContainer:this.page.locator("//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-axzyjk']"),
    };

    Elements={
        InputFields:{
            Username:this.Containers.LoginPageContainer.locator("//input[@name='username']"),
            Password:this.Containers.LoginPageContainer.locator("//input[@name='password']"),
        },
        Buttons:{
            SignIn:this.Containers.LoginPageContainer.locator("//button[@type='submit']"),
        },
    };

    async LogIn(Username:string,Password:string){
        await this.Elements.InputFields.Username.fill(Username);
        await this.Elements.InputFields.Password.fill(Password);
        await this.Elements.Buttons.SignIn.click();
        await this.page.waitForSelector(this.getNextPageContainer);
    };

    get getNextPageContainer(){
        return "//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-3qgb5u']";
    };
};   