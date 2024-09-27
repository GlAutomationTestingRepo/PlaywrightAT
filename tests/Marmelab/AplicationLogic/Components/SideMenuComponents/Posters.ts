import { BasePage } from "../../Pages/BasePage"


export class Posters extends BasePage{

    Containers={
        MainPage:{
            FiltrationContainer:this.page.locator("//div[@class='MuiCardContent-root css-14x6a5n']"),
        },
        ProductContainers:{
            HeaderProductContainer:this.page.locator("//div[@class='MuiTabs-root css-orq8zk']"),
            TableContainer:this.page.locator("//table[@class='MuiTable-root RaDatagrid-table css-1owb465']"),
        },
        CustomerProfileContainers:{
            HistoryContainer:this.page.locator("//div[@class='MuiGrid-root MuiGrid-container css-tuxzvu']"),
        },
        OrderContainers:{
            TableContainer:this.page.locator("//tbody[@class='MuiTableBody-root datagrid-body RaDatagrid-tbody css-1xnox0e']"),
            OrderContainer:this.page.locator("//div[@class='MuiCardContent-root css-1qw96cp']"),
            PageNavigationContainer:this.page.locator("//div[@role='navigation']"),
        },
    };

    SubContainers={
        Categories:this.Containers.MainPage.FiltrationContainer.locator("//ul[@class='MuiList-root MuiList-dense css-1uzmcsd']"),
        ProductContainer:this.Containers.OrderContainers.OrderContainer.locator("(//tbody[@class='MuiTableBody-root css-1xnox0e'])[1]"),
    };

    Elements={
        ReviewsCounter:this.page.locator("//span[@class='MuiTypography-root MuiTypography-body2 css-1si9tzf']"),
        Buttons:{
            ReviewsButton:this.Containers.ProductContainers.HeaderProductContainer.locator("//a[@id='tabheader-reviews']"),
            AmountOfOrders:this.Containers.CustomerProfileContainers.HistoryContainer.locator("(//a[@class='MuiTypography-root MuiTypography-body2 MuiLink-root MuiLink-underlineAlways RaLink-link css-sdmzfa'])[1]"),
            NextPage:this.Containers.OrderContainers.PageNavigationContainer.locator("//a[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-1j7qk7u']"),
        },
        Fields:{
            Customer:this.Containers.ProductContainers.TableContainer.locator("(//div[@class='MuiTypography-root MuiTypography-body2 css-1wk3cmv'])[1]"),
            Reference:this.Containers.OrderContainers.TableContainer.locator("(//span[@class='MuiTypography-root MuiTypography-body2 css-68o8xu'])[2]"),
            AmountOfOrders:this.Containers.OrderContainers.PageNavigationContainer.locator("//p[@class='MuiTypography-root MuiTypography-body2 css-68o8xu']"),
            ItemsReferenceInOrders:this.SubContainers.ProductContainer.locator("//td[@class='MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-q34dxg']"),
        },
    };

    async SelectSpecificCategory (Value:string){
        await this.page.waitForSelector(this.getFiltrationContainer);
        await this.SubContainers.Categories.locator(`//span[text()='${Value}']`).click();
        await this.page.waitForTimeout(1000);
    };

    async NoNameYet(){
        for (let i = 0; i < 10; i++) {
            const productLinks = await this.page.$$("//ul[@class='MuiImageList-root MuiImageList-standard css-tidt1y'] //div[@class='MuiImageListItemBar-title css-1w4d4gp']");
            if (productLinks.length === 0) {
                await this.page.waitForTimeout(1000); 
                break;
            };
            const link = productLinks[i];
            if (link) {
                const nameOfProduct=await productLinks[i].textContent();
                console.log(nameOfProduct);
                await link.click();
                await this.page.waitForSelector(this.getMainContainer);
                await this.page.waitForTimeout(1000);

                const reviewValue = await this.Elements.ReviewsCounter.textContent();
                if(reviewValue === "0"){
                    await this.page.goBack();
                }else{
                    await this.Elements.Buttons.ReviewsButton.click();
                    await this.page.waitForSelector(this.getTableContainer);
                    await this.Elements.Fields.Customer.click()
                    await this.page.waitForSelector(this.getHistoryContainer);
                    const AmountOfOrdersForCustomer=await this.Elements.Buttons.AmountOfOrders.textContent();
                    if(AmountOfOrdersForCustomer==="1 order"){
                        //logic for customer with 1 order only meaning no need to click on the nex order
                        await this.Elements.Buttons.AmountOfOrders.click();
                        await this.Elements.Fields.Reference.click();
                        await this.page.waitForSelector(this.getOrderContainer);
                        await this.page.waitForTimeout(1000);
                        const ItemReferenceInOrders=this.Elements.Fields.ItemsReferenceInOrders;;
                        const NumericAmountOfItemsInOrder=await ItemReferenceInOrders.count();
                        
                        

                    }else{
                        //logic for customers with more than 1 order meaning need to navigate through some pages
                        await this.Elements.Buttons.AmountOfOrders.click();
                        await this.Elements.Fields.Reference.click();
                        await this.page.waitForSelector(this.getOrderContainer);
                        await this.page.waitForTimeout(1000);
                        const MaxNumberOfOrders=await this.Elements.Fields.AmountOfOrders.textContent();
                        const SplitArray=MaxNumberOfOrders?.split('/').map(item=>item.trim());
                        const MaxAmountOfPagesString=SplitArray[1];
                    // const MaxNumberOfOrdersInt=Number(MaxAmountOfPagesString);

                    // for(let i=0;i<MaxNumberOfOrdersInt;i++){
                    //     await this.Elements.Buttons.NextPage.click();
                    };
                    await this.Elements.Buttons.AmountOfOrders.click();
                    await this.Elements.Fields.Reference.click();
                    await this.page.waitForSelector(this.getOrderContainer);
                    await this.page.waitForTimeout(1000);
                    const MaxNumberOfOrders=await this.Elements.Fields.AmountOfOrders.textContent();
                    const SplitArray=MaxNumberOfOrders?.split('/').map(item=>item.trim());
                    // const MaxAmountOfPagesString=SplitArray[1];
                    // const MaxNumberOfOrdersInt=Number(MaxAmountOfPagesString);

                    // for(let i=0;i<MaxNumberOfOrdersInt;i++){
                    //     await this.Elements.Buttons.NextPage.click();
                        
                    // }
                    
                    //сделать цикл где будет сравниваться нужный элемент с переменной
                    //если данного элемента нету на странице нажимать на следующий
                    //и так далее
                    //когда нужный айтем будет найдет с того места
                    //взять имя фамилию номер ордера
                    //и составить предложение 
                    //имя+фамилия купил +название продукта +число числа,вот соответствующий ордер :+номер ореда
                    break;
                };
            };
        };
    };

    get getFiltrationContainer(){
        return "//div[@class='MuiCardContent-root css-14x6a5n']";
    };

    get getMainContainer(){
        return "//div[@class='MuiTabs-flexContainer css-k008qs']";
    };

    get getTableContainer(){
        return "//table[@class='MuiTable-root RaDatagrid-table css-1owb465']";
    };
    get getHistoryContainer(){
        return "//div[@class='MuiGrid-root MuiGrid-container css-tuxzvu']";
    };
    get getOrderContainer(){
        return "//div[@class='MuiCardContent-root css-1qw96cp']";
    };
};