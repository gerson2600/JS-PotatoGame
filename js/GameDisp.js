var GameDisp = {

	InitPlayer :  function () 
	{
		console.log(Player.Money);
		Player.MoneyID.innerHTML = "Money: " + Player.Money;
	},
	InitFactories : function ()
	{
		//Mine Init
		console.log('Init Mine Factory.');
		this.InitialFactoryValues(MineFactory);
		this.UpdateProductQuant(MineFactory);
		this.UpdateAllProductQuant(MineFactory);
		//Forge Init
		console.log('Init Forge Factory.');
		this.InitialFactoryValues(ForgeFactory);
		this.UpdateProductQuant(ForgeFactory);
		this.UpdateAllProductQuant(ForgeFactory);
		//Components Init
		console.log('Init Components Factory.');
		this.InitialFactoryValues(ComponentsFactory);
		this.UpdateProductQuant(ComponentsFactory);
		this.UpdateAllProductQuant(ComponentsFactory);
		//Computers Init
		console.log('Init Computers Factory.');
		this.InitialFactoryValues(ComputersFactory);
		this.UpdateProductQuant(ComputersFactory);
		this.UpdateAllProductQuant(ComputersFactory);
	},

	InitialFactoryValues : function (Factory)
	{
		//Update unlock value
		Factory.UnlockCostID.innerHTML = "Cost: " + Factory.UnlockCost;

		//Update all values (init run)
		Factory.ProductivityID.innerHTML = Factory.Productivity + " /process";
		Factory.WorkersID.innerHTML = Factory.Workers + " /" + Factory.MaxWorkers;
		if (Factory.ProductRequirementFactory != "NotReq")
		{
			Factory.ProductRequirementCostID.innerHTML = "Production Cost: " + Factory.ProductRequirementCost + " " + Factory.ProductRequirementFactory.Product;
		}

		Factory.UpgradeCostID.innerHTML = Factory.Name + " Upgrade Cost(x1): " + Factory.UpgradeCost;
		Factory.Upgrade5CostID.innerHTML = Factory.Name + " Upgrade Cost(x5): " + Factory.Upgrade5Cost;
		Factory.AutoWorkCostID.innerHTML = "Auto-" + Factory.Name +" Upgrade Cost: " + Factory.AutoWorkCost;
		Factory.ProductSaleID.innerHTML = "Value of " + Factory.Product + ": " + Factory.ProductValue;

	},
	UpdateFactoryRunningValues : function (Factory)
	{
		//Update only values that change over time and with upgrades
		if (Factory.ProductRequirementFactory != "NotReq")
		{
			Factory.ProductRequirementCostID.innerHTML = "Production Cost: " + Factory.ProductRequirementCost + " " + Factory.ProductRequirementFactory.Product;
		}
		Factory.ProductivityID.innerHTML = Factory.Productivity + " /process";
		Factory.WorkersID.innerHTML = Factory.Workers + "/" + Factory.MaxWorkers;

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