 //All Tag Nems are selected
 
 const IncomeTotalInputField = document.getElementById("Income_total_input");
 const FoodCostInputField = document.getElementById("Food_cost_input");
 const RentCostInputField = document.getElementById("Rent_cost_input");
 const ClothesCostInputField=document.getElementById("Clothes_cost_input");
 const CalculateAllButton=document.getElementById("calculate_Button");
 const SavingsPersantageInputField=document.getElementById("Savings_persentage_input");
 const CalculatePersantageButton=document.getElementById("Calculate_persent_Button");


 //Error Handaler.........................
 CalculateAllButton.addEventListener("click",function(){
     if((IncomeTotalInputField.value<0 || FoodCostInputField.value<0 || RentCostInputField.value<0 || ClothesCostInputField.value <0) ||(IncomeTotalInputField.value==="" || FoodCostInputField.value===""|| RentCostInputField.value===""|| ClothesCostInputField.value==="")){
        alert("please...... inter a valid Number")
}    else{
    const TotalMoney= document.getElementById("Balance_text_info");
    const TotalExpensesMoney = document.getElementById("Total_expenses_Text");
        let TotalExpenses = parseFloat(FoodCostInputField.value)+ parseFloat(RentCostInputField.value)+parseFloat(ClothesCostInputField.value);
     TotalMoney.innerText= parseFloat(IncomeTotalInputField.value)-TotalExpenses;
     TotalExpensesMoney.innerText= TotalExpenses;
}
 })
