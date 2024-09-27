import { BasePage } from "../Pages/BasePage";

export class DashboardSideMenu extends BasePage{

    Containers={
        SideMenuMainContainer:this.page.locator("//div[@class='MuiDrawer-root MuiDrawer-docked RaSidebar-docked  css-x2zgkg']"),
    };

    SubContainers={
        UniqueMenuItemContainer:this.Containers.SideMenuMainContainer.locator("//div[@class='MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-c4sutr']"),
    };

    Elements={
        ExpnadingLists:{
            ExpandingList:this.Containers.SideMenuMainContainer.locator("//li[@role='menuitem']"),
        },
        MenuItems:{
            MenuItem:this.Containers.SideMenuMainContainer.locator("//a[@role='menuitem']"),
        },
    };

    async SelectSpecificMenuItem(SideMenuEnums:string){
        await this.Containers.SideMenuMainContainer.locator(`//a[@href='${SideMenuEnums}']`).click();
    };
};