package headfirst.strategy
{
	public class DecoyDuck extends Duck
	{
		public function DecoyDuck()
		{
			setFlyBehaviour(new FlyNoWay());
			setQuackBehaviour(new MuteQuack());
		}
		
		override public function display():String
		{
			return "I'm a decoy duck";
		}
	}
}