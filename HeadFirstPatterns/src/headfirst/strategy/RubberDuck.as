package headfirst.strategy
{
	public class RubberDuck extends Duck
	{
		public function RubberDuck()
		{
			flyBehaviour = new FlyNoWay();
			quackBehaviour = new Squeak();
		}
		
		override public function display():String
		{
			return "I'm a rubber duckie";
		}
	}
}