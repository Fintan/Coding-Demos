package headfirst.strategy
{
	public class FlyNoWay implements IFlyBehavior
	{
		public function FlyNoWay()
		{
		}
		
		public function fly():String
		{
			return "I can't fly";
		}
	}
}