import { Page} from "@playwright/test";
import { DashboardSideMenu} from "../Components/DashboardSideMenu";
import { Customers} from "../Components/SideMenuComponents/Customers";
import { Posters } from "../Components/SideMenuComponents/Posters";



export class PageManager{

    page:Page;
    dashboardSideMenu;
    customers;
    posters;

    constructor(page){
        this.page=page;
        this.dashboardSideMenu=new DashboardSideMenu(page);
        this.customers=new Customers(page);     
        this.posters=new Posters(page);
    };
};