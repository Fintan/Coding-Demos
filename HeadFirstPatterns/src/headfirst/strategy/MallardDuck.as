package headfirst.strategy
{
	public class MallardDuck extends Duck
	{
		public function MallardDuck()
		{
			quackBehaviour = new Quack();
			flyBehaviour = new FlyWithWings();
		}
		
		override public function display():String
		{
			return "I'm a real Mallard duck";
		}
	}
}