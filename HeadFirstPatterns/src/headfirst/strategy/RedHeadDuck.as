package headfirst.strategy
{
	public class RedHeadDuck extends Duck
	{
		public function RedHeadDuck()
		{
			quackBehaviour = new Quack();
			flyBehaviour = new FlyWithWings();
		}
		
		override public function display():String
		{
			return "I'm a real Red Headed duck";
		}
	}
}