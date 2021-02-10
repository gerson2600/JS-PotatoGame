//asdfasdf

var GameApp = {


	RunFirstTime : function ()
	{
		console.log('Init Game');
		console.log('Factories:')
		console.log(MineFactory);
		console.log(ForgeFactory);
		console.log(ComponentsFactory);
		console.log(ComputersFactory);

		GameDisp.InitPlayer();
		GameDisp.InitFactories();
	},

	GiveLotsOfMoney : function ()
	{
		Player.Money += 10000;
		GameDisp.UpdatePlayerMoney();
	},

	UnlockPotato : function ()
	{
		if (Player.Money >= 10000000)
		{
			Player.Money -= 10000000;
			GameDisp.UpdatePlayerMoney();
			document.getElementById('PotatoLocked').classList.add('HiddenElement');
			document.getElementById('PotatoUnlocked').classList.remove('HiddenElement');;
		}


	},

	SaveGame : function ()
	{
		
	}
	



}