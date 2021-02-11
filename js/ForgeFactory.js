var ForgeFactory = {
	Name : "Forge",
	Product : "Metal",
	Unlocked : false,
	UnlockCost : 2000,
	UnlockCostID : document.getElementById('ForgeUnlockCostBtnP'),
	DivLocked : document.getElementById('ForgeLocked'),
	DivUnlocked : document.getElementById('ForgeUnlocked'),
	FactoryImgLockedID : document.getElementById('ForgeFactoryLockedImg'),
	FactoryImgUnlockedID : document.getElementById('ForgeFactoryUnlockedImg'),
	

	ProductQuant : 0,
	ProductValue : 15,
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
	WorkerUnitProductivity : 10,
	MaxWorkers : 400,
	WorkersID : document.getElementById('ForgeWorkerValue'),

	Productivity : 1,
	ProductivityID : document.getElementById('ForgeProductivityValue'),

	UpgradeCost : 100,
	UpgradeCostID : document.getElementById('ForgeUpgrade1H'),

	Upgrade5Cost : 500,
	Upgrade5CostID : document.getElementById('ForgeUpgrade5H'),

	AutoWork : false,
	AutoWorkCost : 5000,
	AutoWorkCostID : document.getElementById('ForgeAutoWorkH'),
	StartAutoWork : function () 
	{
		console.log("AutoWork initiated for " + this.Name);
		AutoWorkForgeCycleInterval = setInterval(function()
		{
			FactoryInterface.Work(ForgeFactory);
		}, this.WorkTime);
	}

	
	

}