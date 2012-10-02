package headfirst.strategy
{
	public class ModelDuck extends Duck
	{
		public function ModelDuck()
		{
			flyBehaviour = new FlyNoWay();
			quackBehaviour = new Quack();
		}
		
		override public function display():String
		{
			return "I'm a model duck";
		}
	}
}