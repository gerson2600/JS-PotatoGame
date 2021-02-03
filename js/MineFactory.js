var MineFactory = {
	Name : "Mine",
	Product : "Rocks",
	Unlocked : false,
	UnlockCost : 100,
	UnlockCostID : document.getElementById('MineUnlockCostBtnP'),
	DivLocked : document.getElementById('MineLocked'),
	DivUnlocked : document.getElementById('MineUnlocked'),

	ProductQuant : 1000,
	ProductValue : 1,
	ProductSaleID : document.getElementById('SellMine'),
	ProductOutputID : document.getElementById('TotalRocksValue'),

	ProductRequirementFactory : "NotReq",
	ProductRequirementBaseCost : 0,
	ProductRequirementCost : 0,
	ProductRequirementCostID: document.getElementById('MineProductionCost'),

	IsWorking : false,
	WorkTime : 1000,
	ProgressBar : document.getElementById('MineProgressBar'),

	Workers : 0,
	WorkerUnitProductivity : 100,
	MaxWorkers : 100,
	WorkersID : document.getElementById('MineWorkerValue'),

	Productivity : 1,
	ProductivityID : document.getElementById('MineProductivityValue'),

	UpgradeCost : 10,
	UpgradeCostID : document.getElementById('MineUpgrade1H'),

	Upgrade5Cost : 50,
	Upgrade5CostID : document.getElementById('MineUpgrade5H'),

	AutoWork : false,
	AutoWorkCost : 10,
	AutoWorkCostID : document.getElementById('MineAutoWorkH'),
	StartAutoWork : function () 
	{
		console.log("AutoWork initiated for " + this.Name);
		AutoWorkMineCycleInterval = setInterval(function()
		{
			FactoryInterface.Work(MineFactory);
		}, this.WorkTime);
	},
	

} 
