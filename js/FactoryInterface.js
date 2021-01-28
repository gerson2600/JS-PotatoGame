var FactoryInterface = {
	InitFactory : function (Factory)
	{
		
	},

	Work : function (Factory) 
	{
		//Run progress bar and at end, add productivity value to total product
		if (!Factory.IsWorking)
		{
			Factory.IsWorking = true;
			Factory.ProgressBar.classList.add('active');
			Factory.ProgressBar.classList.add('bg-primary');
			Factory.ProgressBar.classList.add('progress-bar-animated');

			WorkTimeoutFunc = setTimeout(function ()
			{
				Factory.ProgressBar.classList.remove('active');
				Factory.ProgressBar.classList.remove('bg-primary');
				Factory.ProgressBar.classList.remove('progress-bar-animated');
				Factory.ProductQuant += Factory.Productivity;
				GameDisp.UpdateProductQuant(Factory);
				Factory.IsWorking = false;
				clearTimeout(WorkTimeoutFunc);
			}, 1000);
		}
	},

	AutoWork : function (Factory)
	{
		if (Factory.IsWorking == true && Factory.AutoWork == true)
		{
			console.log('AutoWork Mine' + Factory.Name);
			Factory.ProductQuant += Factory.Productivity;
			GameDisp.UpdateProductQuant(Factory);
		}
		
	},

	ActivateAutoWork : function (Factory)
	{
		if (Player.Money >= Factory.AutoWorkCost)
		{
			Player.Money -= Factory.AutoWorkCost;
			Factory.IsWorking = true;
			Factory.AutoWork = true;
			Factory.StartAutoWork();

			Factory.ProgressBar.classList.add('active');
			Factory.ProgressBar.classList.add('bg-primary');
			Factory.ProgressBar.classList.add('progress-bar-animated');
		}
	},

	ProductivityUpdate : function (Factory)
	{
		//Update productivity values from workers
		Factory.Productivity = Factory.Workers * Factory.WorkerUnitProductivity;

	},


	Upgrade : function (Factory)
	{
		//Check if has money to upgrade and if max level isn't reached
		if (Player.Money >= Factory.UpgradeCost && Factory.Workers < Factory.MaxWorkers)
		{
			Factory.Workers++;
			Player.Money = Player.Money - Factory.UpgradeCost;
			this.ProductivityUpdate(Factory);
			console.log(Factory.Workers);

			GameDisp.UpdateFactoryRunningValues(Factory);
			GameDisp.UpdatePlayerMoney();

		}	
	},

	Upgrade5 : function (Factory)
	{
		//Check if has money to upgrade and if max level isn't/wont be reached
		if (Player.Money >= Factory.Upgrade5Cost && Factory.Workers+5 < Factory.MaxWorkers)
		{
			Factory.Workers += 5;
			Player.Money = Player.Money - (Factory.UpgradeCost*5);
			this.ProductivityUpdate(Factory);
			console.log(Factory.Workers);

			GameDisp.UpdateFactoryRunningValues(Factory);
			GameDisp.UpdatePlayerMoney();

		}
	},

	SellProduct : function (Factory)
	{
		if (Factory.ProductQuant>0)
		{
			Player.Money += Factory.ProductQuant * Factory.ProductValue;
			Factory.ProductQuant = 0;
			GameDisp.UpdatePlayerMoney();
			GameDisp.UpdateProductQuant(Factory);


		}
	}


	


}


