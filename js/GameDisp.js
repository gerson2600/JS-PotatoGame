var GameDisp = {

	InitPlayer :  function () 
	{
		console.log(Player.Money);
		Player.MoneyID.innerHTML = "Money: " + Player.Money;
	},

	InitialFactoryValues : function (Factory)
	{
		//Update all values (init run)
		Factory.ProductivityID.innerHTML = Factory.Productivity + " /process";
		Factory.WorkersID.innerHTML = Factory.Workers;

		Factory.UpgradeCostID.innerHTML = Factory.Name + " Upgrade Cost(x1): " + Factory.UpgradeCost;
		Factory.Upgrade5CostID.innerHTML = Factory.Name + " Upgrade Cost(x5): " + Factory.Upgrade5Cost;
		Factory.AutoWorkCostID.innerHTML = "Auto-" + Factory.Name +" Upgrade Cost: " + Factory.AutoWorkCost;
		Factory.ProductSaleID.innerHTML = "Value of " + Factory.Product + ": " + Factory.ProductValue;

	},
	UpdateFactoryRunningValues : function (Factory)
	{
		//Update only values that change over time
		if (Factory.AutoWork == false)
		{
			Factory.ProductivityID.innerHTML = Factory.Productivity + " /process";
		}else if (Factory.AutoWork == true) 
		{
			Factory.ProductivityID.innerHTML = Factory.Productivity + " /second";
		}
		
		Factory.WorkersID.innerHTML = Factory.Workers;

	},

	UpdatePlayerMoney : function ()
	{
		Player.MoneyID.innerHTML = "Money: " + Player.Money;
	},

	UpdateAllProductQuant : function ()
	{
		MineFactory.ProductOutputID.innerHTML = MineFactory.ProductQuant;
		ForgeFactory.ProductOutputID.innerHTML = ForgeFactory.ProductQuant;
		ComponentsFactory.ProductOutputID.innerHTML = ComponentsFactory.ProductQuant;
		ComputersFactory.ProductOutputID.innerHTML = ComputersFactory.ProductQuant;
	},

	UpdateProductQuant : function (Factory)
	{
		Factory.ProductOutputID.innerHTML = Factory.ProductQuant;
	},

	UnlockFactory : function (Factory)
	{
		Factory.DivLocked.classList.add('HiddenRow');
		Factory.DivUnlocked.classList.remove('HiddenRow');
	},

	ToggleHomeUnlock : function ()
	{
		document.getElementById('HomeContent1').classList.add('HiddenRow');
		document.getElementById('HomeContent2').classList.remove('HiddenRow');
	},

}