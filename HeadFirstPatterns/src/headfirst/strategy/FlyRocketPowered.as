package headfirst.strategy
{
	public class FlyRocketPowered implements IFlyBehavior
	{
		public function FlyRocketPowered()
		{
		}
		
		public function fly():String
		{
			return "I'm flying with a rocket";
		}
	}
}