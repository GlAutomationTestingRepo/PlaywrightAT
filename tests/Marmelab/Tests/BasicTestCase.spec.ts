import {test}from "./BaseTest";
import {CustomerCreationFields,CustomerNames,PosterValues,SegmentValues,SideMenuEnums}from"../Utils/Enums";
import { PageManager } from "../AplicationLogic/Pages/PageManager";

test.describe('Here is some of my test Cases',async()=>{
    test('Customer Creation and Deleting a Customer.@smoke',async({pageManager})=>{

        await pageManager.dashboardSideMenu.SelectSpecificMenuItem(SideMenuEnums.Customers);

        await pageManager.customers.CustomerCreation(CustomerCreationFields.FirstName,CustomerCreationFields.LastName,CustomerCreationFields.Email,CustomerCreationFields.Adress,CustomerCreationFields.City,CustomerCreationFields.State,CustomerCreationFields.ZipCode,CustomerCreationFields.Password)
        
        await pageManager.customers.SetUpAdditionalStats(SegmentValues.Compulsive,SegmentValues.Collector);

        await pageManager.customers.FindCreatedCustomerBySegmentFilters(SegmentValues.Compulsive,CustomerCreationFields.FirstName);

        await pageManager.customers.DeleteCreatedCustomer();
    });
    test('what.@nesmoke',async({pageManager})=>{
        await pageManager.dashboardSideMenu.SelectSpecificMenuItem(SideMenuEnums.Posters)

        await pageManager.posters.SelectSpecificCategory(PosterValues.Animals);

        await pageManager.posters.NoNameYet();

    })
});
