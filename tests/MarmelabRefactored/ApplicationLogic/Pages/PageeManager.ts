import {Page} from "@playwright/test";
import {SideMenuItems} from "../Components/SideMenuItems";
import {HeaderToolBar} from "../Components/Customers/HeaderToolBar";
import {MainCustomerCreationComponent} from "../Components/Customers/Create/MainCustomerCreationContainer";
import {FooterToolBar} from "../Components/Customers/Create/FooterToolBar"
import {Stats} from "../Components/Customers/Create/Stats";
import {LeftSideFilterWindow} from "../Components/Customers/LeftSideFilterWindow";
import {MainCustomerList} from "../Components/Customers/MainCustomerList";
import {ProfileFooterToolBar} from "../Components/Customers/CustomerProfile/ProfileFooterToolBar"
import {PostersLeftSideFilterWindow} from "../Components/Posters/PostersLeftSideFilterWindow";
import {ProductList} from "../Components/Posters/ProductList";
import {TabList} from "../Components/Posters/Product/TabList";
import {ReviewList} from "../Components/Posters/Product/ReviewList";
import {History} from "../Components/Customers/CustomerProfile/History";
import {ListOfOrders} from "../Components/Orders/ListOfOrders";
import {CustomerOrders} from "../Components/Orders/CustomerOrders";
import {NavigationThroughOrders} from "../Components/Orders/NavigationThroughOrders";

export class PageeManager {

	page:Page;
	sideMenuItems;
	headerToolBar;
	mainCustomerCreationComponent;
	footerToolBar;
	stats;
	leftSideFilterWindow;
	mainCustomerList;
	profileFooterToolBar;
	postersLeftSideFilterWindow;
	productList;
	tabList;
	reviewList;
	history;
	listOfOrders;
	customerOrders;
	navigationThroughOrders;

	constructor(page){
		this.page=page;
		this.sideMenuItems = new SideMenuItems(page);
		this.headerToolBar = new HeaderToolBar(page);
		this.mainCustomerCreationComponent = new MainCustomerCreationComponent(page);
		this.footerToolBar = new FooterToolBar(page);
		this.stats = new Stats(page);
		this.leftSideFilterWindow = new LeftSideFilterWindow(page);
		this.mainCustomerList = new MainCustomerList(page);
		this.profileFooterToolBar = new ProfileFooterToolBar(page); 
		this.postersLeftSideFilterWindow = new PostersLeftSideFilterWindow(page)
		this.productList = new ProductList(page)
		this.tabList = new TabList(page)
		this.reviewList = new ReviewList(page)
		this.history = new History(page)
		this.listOfOrders = new ListOfOrders(page)
		this.customerOrders = new CustomerOrders(page)
		this.navigationThroughOrders = new NavigationThroughOrders(page)
	};
};