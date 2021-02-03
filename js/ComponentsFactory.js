var ComponentsFactory = {
	Name : "Components",
	Product : "Parts",
	Unlocked : false,
	UnlockCost : 50000,
	UnlockCostID : document.getElementById('ComponentsUnlockCostBtnP'),
	DivLocked : document.getElementById('ComponentsLocked'),
	DivUnlocked : document.getElementById('ComponentsUnlocked'),

	ProductQuant : 0,
	ProductValue : 400,
	ProductSaleID : document.getElementById('SellComponents'),
	ProductOutputID : document.getElementById('TotalPartsValue'),

	ProductRequirementFactory : ForgeFactory,
	ProductRequirementBaseCost : 20,
	ProductRequirementCost : 20,
	ProductRequirementCostID: document.getElementById('ComponentsProductionCost'),

	IsWorking : false,
	WorkTime : 3000,
	ProgressBar : document.getElementById('ComponentsProgressBar'),

	Workers : 0,
	WorkerUnitProductivity : 3,
	MaxWorkers : 100,
	WorkersID : document.getElementById('ComponentsWorkerValue'),

	Productivity : 1,
	ProductivityID : document.getElementById('ComponentsProductivityValue'),

	UpgradeCost : 1500,
	UpgradeCostID : document.getElementById('ComponentsUpgrade1H'),

	Upgrade5Cost : 7500,
	Upgrade5CostID : document.getElementById('ComponentsUpgrade5H'),

	AutoWork : false,
	AutoWorkCost : 75000,
	AutoWorkCostID : document.getElementById('ComponentsAutoWorkH'),
	StartAutoWork : function () 
	{
		console.log("AutoWork initiated for " + this.Name);
		AutoWorkComponentsCycleInterval = setInterval(function()
		{
			FactoryInterface.Work(ComponentsFactory);
		}, this.WorkTime);
	},
	
	

}