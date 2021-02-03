var FactoryInterface = {
	InitFactory : function (Factory)
	{
		
	},

	Unlock : function (Factory)
	{
		if (Player.Money >= Factory.UnlockCost && Factory.Unlocked == false)
		{
			Player.Money -= Factory.UnlockCost;
			GameDisp.UpdatePlayerMoney();
			GameDisp.UnlockFactory(Factory);

		}
	},

	Work : function (Factory) 
	{
		//Check for necessary base ingredient availability
		if (Factory.ProductRequirementFactory == "NotReq")
		{
			if (!Factory.IsWorking )
			{
				console.log('Normal Factory Work A')
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
				}, Factory.WorkTime);
			}else if (Factory.IsWorking && Factory.AutoWork)
			{
				console.log('AutoWork A-' + Factory.Name);
				Factory.ProductQuant += Factory.Productivity;
				GameDisp.UpdateProductQuant(Factory);
			}
		}else if (Factory.ProductRequirementCost <= Factory.ProductRequirementFactory.ProductQuant)
		{
			console.log(Factory.ProductRequirementFactory.ProductQuant);
			Factory.ProductRequirementFactory.ProductQuant -= Factory.ProductRequirementCost;
			GameDisp.UpdateProductQuant(Factory.ProductRequirementFactory);

			if (!Factory.IsWorking )
			{
				console.log('Normal Factory Work B')
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
				}, Factory.WorkTime);
			}else if (Factory.IsWorking && Factory.AutoWork)
			{
				console.log('AutoWork B-' + Factory.Name);
				Factory.ProductQuant += Factory.Productivity;
				GameDisp.UpdateProductQuant(Factory);
			}
		}
		GameDisp.UpdateProductQuant(Factory);
		//Run progress bar and at end, add productivity value to total product
		
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
		if (Player.Money >= Factory.AutoWorkCost && Factory.AutoWork == false)
		{
			Player.Money -= Factory.AutoWorkCost;
			GameDisp.UpdatePlayerMoney();
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
		Factory.ProductRequirementCost = Factory.Productivity * Factory.ProductRequirementBaseCost;

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
		if (Player.Money >= Factory.Upgrade5Cost && Factory.Workers+5 <= Factory.MaxWorkers)
		{
			Factory.Workers += 5;
			Player.Money = Player.Money - (Factory.UpgradeCost*5);
			this.ProductivityUpdate(Factory);
			console.log(Factory.Workers);

			GameDisp.UpdateFactoryRunningValues(Factory);
			GameDisp.UpdatePlayerMoney();

		}
	},

	SellAllProduct : function (Factory)
	{
		if (Factory.ProductQuant>0)
		{
			Player.Money += Factory.ProductQuant * Factory.ProductValue;
			Factory.ProductQuant = 0;
			GameDisp.UpdatePlayerMoney();
			GameDisp.UpdateProductQuant(Factory);


		}
	},

	SellEverything : function ()
	{
		//Check for factory enabled at every factory and then sell all products, one at a time
		//Update player money before leaving func
	}


	


}


