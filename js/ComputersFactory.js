var ComputersFactory = {
	Name : "Computers",
	Product : "Computers",
	Unlocked : true,

	ProductQuant : 12345,
	ProductValue : 1,
	ProductOutputID : document.getElementById('TotalComputersValue'),

	IsWorking : false,
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
	AutoWorkCost : 100,
	AutoWorkCostID : document.getElementById('MineAutoWorkH'),


	
	

}