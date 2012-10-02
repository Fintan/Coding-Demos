package headfirst.strategy
{
	public class FlyWithWings implements IFlyBehavior
	{
		public function FlyWithWings()
		{
		}
		
		public function fly():String
		{
			return "I'm flying!!";
		}
	}
}