var MineFactory = {
	Name : "Mine",
	Product : "Rocks",
	Unlocked : true,

	ProductQuant : 12345,
	ProductValue : 1,
	ProductSaleID : document.getElementById('SellRocks'),
	ProductOutputID : document.getElementById('TotalRocksValue'),

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
	AutoWorkCost : 10,
	AutoWorkCostID : document.getElementById('MineAutoWorkH'),
	StartAutoWork : function () 
	{
		console.log("AutoWork initiated for " + this.Name);
		AutoWorkCycleInterval = setInterval(function()
		{
			FactoryInterface.AutoWork(MineFactory);
		}, 1000);
	},
	

} 
