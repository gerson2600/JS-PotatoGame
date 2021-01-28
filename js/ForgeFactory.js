var ForgeFactory = {
	Name : "Forge",
	Product : "Rocks",
	Unlocked : true,

	ProductQuant : 12345,
	ProductValue : 1,
	ProductOutputID : document.getElementById('TotalMetalValue'),

	IsWorking : false,
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

	
	

}