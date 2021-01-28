var ComponentsFactory = {
	Name : "Components",
	Product : "Parts",
	Unlocked : true,

	ProductQuant : 12345,
	ProductValue : 1,
	ProductOutputID : document.getElementById('TotalPartsValue'),

	IsWorking : false,
	ProgressBar : document.getElementById('ComponentsProgressBar'),

	Workers : 0,
	WorkerUnitProductivity : 100,
	MaxWorkers : 100,
	WorkersID : document.getElementById('ComponentsWorkerValue'),

	Productivity : 1,
	ProductivityID : document.getElementById('ComponentsProductivityValue'),

	UpgradeCost : 10,
	UpgradeCostID : document.getElementById('ComponentsUpgrade1H'),

	Upgrade5Cost : 50,
	Upgrade5CostID : document.getElementById('ComponentsUpgrade5H'),

	AutoWork : false,
	AutoWorkCost : 100,
	AutoWorkCostID : document.getElementById('ComponentsAutoWorkH'),

	
	

}