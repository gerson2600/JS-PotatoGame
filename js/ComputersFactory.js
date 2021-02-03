var ComputersFactory = {
	Name : "Computers",
	Product : "Computers",
	Unlocked : false,
	UnlockCost : 10,
	UnlockCostID : document.getElementById('ComputersUnlockCostBtnP'),
	DivLocked : document.getElementById('ComputersLocked'),
	DivUnlocked : document.getElementById('ComputersUnlocked'),

	ProductQuant : 0,
	ProductValue : 1,
	ProductSaleID : document.getElementById('SellComputers'),
	ProductOutputID : document.getElementById('TotalComputersValue'),

	ProductRequirementFactory : ComponentsFactory,
	ProductRequirementBaseCost : 10,
	ProductRequirementCost : 10,
	ProductRequirementCostID: document.getElementById('ComputersProductionCost'),

	IsWorking : false,
	WorkTime : 5000,
	ProgressBar : document.getElementById('ComputersProgressBar'),

	Workers : 0,
	WorkerUnitProductivity : 100,
	MaxWorkers : 100,
	WorkersID : document.getElementById('ComputersWorkerValue'),

	Productivity : 1,
	ProductivityID : document.getElementById('ComputersProductivityValue'),

	UpgradeCost : 10,
	UpgradeCostID : document.getElementById('ComputersUpgrade1H'),

	Upgrade5Cost : 50,
	Upgrade5CostID : document.getElementById('ComputersUpgrade5H'),

	AutoWork : false,
	AutoWorkCost : 100,
	AutoWorkCostID : document.getElementById('ComputersAutoWorkH'),
	StartAutoWork : function () 
	{
		console.log("AutoWork initiated for " + this.Name);
		AutoWorkComputersCycleInterval = setInterval(function()
		{
			FactoryInterface.Work(ComputersFactory);
		}, this.WorkTime);
	},

	
	

}