import {test} from "../Tests/BaseTest";
import {CustomerCreationInputFields, InfoPopUpValues, PosterValues, SegmentValues, SideMenuEnums} from "../Utils/Enums";
import {expect} from "@playwright/test";


test.describe('Here is some of my test Cases',async()=>{
	test('Customer Creation and Deleting a Customer',async({pageManager})=>{

		await pageManager.sideMenuItems.SelectSpecificMenuItem(SideMenuEnums.Customers);
		await pageManager.headerToolBar.PressOnCreate();
		await pageManager.mainCustomerCreationComponent.FillUpInputFields(CustomerCreationInputFields.FirstName,CustomerCreationInputFields.LastName,CustomerCreationInputFields.Email,CustomerCreationInputFields.Address,CustomerCreationInputFields.City,CustomerCreationInputFields.State,CustomerCreationInputFields.ZipCode,CustomerCreationInputFields.Password);
		await pageManager.footerToolBar.PressOnSave()
		await pageManager.stats.SelectSegmentValues(SegmentValues.Compulsive,SegmentValues.Collector);
		await pageManager.footerToolBar.Elements.Buttons.SaveCustomer.click({force:true});
		await pageManager.footerToolBar.Elements.Buttons.SaveCustomer.click();
		await pageManager.leftSideFilterWindow.PressOnSpecificSegment(SegmentValues.Compulsive);
		await pageManager.mainCustomerList.PressOnCreatedCustomer(CustomerCreationInputFields.FirstName);
		await pageManager.profileFooterToolBar.PressOnDelete();
		expect (pageManager.mainCustomerList.SubContainer.InfoField).toHaveText(InfoPopUpValues.ElementDeleted);
	});
	test('Validating did customer actually bought product witch he commented',async({pageManager})=>{

		await pageManager.sideMenuItems.SelectSpecificMenuItem(SideMenuEnums.Posters);
		await pageManager.postersLeftSideFilterWindow.SelectSpecificCategory(PosterValues.Animals);

		for (let i=0; i<10; i++) {
			const Products = await pageManager.page.$$("//ul[@class='MuiImageList-root MuiImageList-standard css-tidt1y'] //div[@class='MuiImageListItemBar-title css-1w4d4gp']");
			if (Products.length === 0) {
				await pageManager.page.waitForTimeout(1000);
				break;
			};
			const Product = Products [i];
			if (Product) {
				const ProductName = await Products [i].textContent();
				await Product.click();
				await pageManager.page.waitForSelector(pageManager.tabList.getTabListContainer);
				await pageManager.page.waitForTimeout(1000);

				const AmountOfReviews = await pageManager.tabList.Elements.ReviewsCounter.textContent();
				if (AmountOfReviews === "0") {
					await pageManager.page.goBack();
				}else{
					await pageManager.tabList.Elements.Reviews.click();
					await pageManager.page.waitForSelector(pageManager.reviewList.getReviewListContainer);
					await pageManager.reviewList.Elements.Customer.click();
					await pageManager.page.waitForSelector(pageManager.history.getHistoryContainer);

					const AmountOfOrdersFromCustomerProfile = await pageManager.history.Elements.AmountOfOrders.textContent();
					if (AmountOfOrdersFromCustomerProfile === "1 order") {
						await pageManager.history.Elements.AmountOfOrders.click();
						await pageManager.listOfOrders.Elements.Reference.click();
						await pageManager.page.waitForSelector(pageManager.customerOrders.getOrderContainer);
						await pageManager.page.waitForTimeout(1000);

						let ArrayOfProductsInOrder: Set<string> = new Set();
						const ListOfProductsUnderItems = await pageManager.page.$$("(//tbody[@class='MuiTableBody-root css-1xnox0e'])[1] //a[@class='MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways RaLink-link css-19ifyur']");
						for (let Item of ListOfProductsUnderItems) {
							let NameOfProduct = await Item.textContent();
							if (NameOfProduct !== null) {
								ArrayOfProductsInOrder.add(NameOfProduct);
							}else{
								console.log("null");
							};
						};
						if (ProductName !== null && !ArrayOfProductsInOrder.has(ProductName)){
						}else{
							break;
						};
					}else{
						await pageManager.history.Elements.AmountOfOrders.click();
						await pageManager.listOfOrders.Elements.Reference.click();
						await pageManager.page.waitForSelector(pageManager.customerOrders.getOrderContainer);
						await pageManager.page.waitForTimeout(1000);

						let MaxAmountOfPagesInOrderInteger =0;
						const MaxAmountOfPagesInOrderString = await pageManager.navigationThroughOrders.Elements.AmountOfPagesInOrder.textContent();
						if (MaxAmountOfPagesInOrderString) {
							const ArrayWithNumberOfPages = MaxAmountOfPagesInOrderString.split("/").map(item => item.trim());
							const MaxAmountOfPagesInOrderStringTrimmed = ArrayWithNumberOfPages [1];
							MaxAmountOfPagesInOrderInteger = Number(MaxAmountOfPagesInOrderStringTrimmed);
						}else{
							console.log("null");
						};
						let ArrayOfProductsInOrder: Set<string> = new Set();
						for (let n=0; n<MaxAmountOfPagesInOrderInteger; n++) {
							const ListOfProductsUnderItems = await pageManager.page.$$("(//tbody[@class='MuiTableBody-root css-1xnox0e'])[1] //a[@class='MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways RaLink-link css-19ifyur']");
							for (let Item of ListOfProductsUnderItems) {
								let NameOfProduct = await Item.textContent();
								if (NameOfProduct !== null) {
									ArrayOfProductsInOrder.add(NameOfProduct);
								}else{
									console.log("null");
								};
							};
						if (ProductName !== null && !ArrayOfProductsInOrder.has(ProductName)){
							await pageManager.navigationThroughOrders.Elements.NextOrder.click();
							await pageManager.page.waitForTimeout(2000);
						}else{
							break;
						};
						};
					};
				};
			};
		};
	});
});
