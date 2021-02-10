var ComputersFactory = {
	Name : "Computers",
	Product : "Computers",
	Unlocked : false,
	UnlockCost : 250000,
	UnlockCostID : document.getElementById('ComputersUnlockCostBtnP'),
	DivLocked : document.getElementById('ComputersLocked'),
	DivUnlocked : document.getElementById('ComputersUnlocked'),
	FactoryImgLockedID : document.getElementById('ComputersFactoryLockedImg'),
	FactoryImgUnlockedID : document.getElementById('ComputersFactoryUnlockedImg'),

	ProductQuant : 0,
	ProductValue : 25000,
	ProductSaleID : document.getElementById('SellComputers'),
	ProductOutputID : document.getElementById('TotalComputersValue'),

	ProductRequirementFactory : ComponentsFactory,
	ProductRequirementBaseCost : 50,
	ProductRequirementCost : 50,
	ProductRequirementCostID: document.getElementById('ComputersProductionCost'),

	IsWorking : false,
	WorkTime : 5000,
	ProgressBar : document.getElementById('ComputersProgressBar'),

	Workers : 0,
	WorkerUnitProductivity : 1,
	MaxWorkers : 100,
	WorkersID : document.getElementById('ComputersWorkerValue'),

	Productivity : 1,
	ProductivityID : document.getElementById('ComputersProductivityValue'),

	UpgradeCost : 30000,
	UpgradeCostID : document.getElementById('ComputersUpgrade1H'),

	Upgrade5Cost : 150000,
	Upgrade5CostID : document.getElementById('ComputersUpgrade5H'),

	AutoWork : false,
	AutoWorkCost : 1500000,
	AutoWorkCostID : document.getElementById('ComputersAutoWorkH'),
	StartAutoWork : function () 
	{
		console.log("AutoWork initiated for " + this.Name);
		AutoWorkComputersCycleInterval = setInterval(function()
		{
			FactoryInterface.Work(ComputersFactory);
		}, this.WorkTime);
	}

	
	

}