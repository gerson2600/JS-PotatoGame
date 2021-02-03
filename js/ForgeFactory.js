var ForgeFactory = {
	Name : "Forge",
	Product : "Metal",
	Unlocked : false,
	UnlockCost : 10,
	UnlockCostID : document.getElementById('ForgeUnlockCostBtnP'),
	DivLocked : document.getElementById('ForgeLocked'),
	DivUnlocked : document.getElementById('ForgeUnlocked'),

	ProductQuant : 0,
	ProductValue : 1,
	ProductSaleID : document.getElementById('SellForge'),
	ProductOutputID : document.getElementById('TotalMetalValue'),

	ProductRequirementFactory : MineFactory,
	ProductRequirementBaseCost : 10,
	ProductRequirementCost : 10,
	ProductRequirementCostID: document.getElementById('ForgeProductionCost'),

	IsWorking : false,
	WorkTime : 2000,
	ProgressBar : document.getElementById('ForgeProgressBar'),

	Workers : 0,
	WorkerUnitProductivity : 100,
	MaxWorkers : 100,
	WorkersID : document.getElementById('ForgeWorkerValue'),

	Productivity : 1,
	ProductivityID : document.getElementById('ForgeProductivityValue'),

	UpgradeCost : 10,
	UpgradeCostID : document.getElementById('ForgeUpgrade1H'),

	Upgrade5Cost : 50,
	Upgrade5CostID : document.getElementById('ForgeUpgrade5H'),

	AutoWork : false,
	AutoWorkCost : 100,
	AutoWorkCostID : document.getElementById('ForgeAutoWorkH'),
	StartAutoWork : function () 
	{
		console.log("AutoWork initiated for " + this.Name);
		AutoWorkForgeCycleInterval = setInterval(function()
		{
			FactoryInterface.Work(ForgeFactory);
		}, this.WorkTime);
	},

	
	

}