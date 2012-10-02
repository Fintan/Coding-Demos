package headfirst.strategy
{
	public class Squeak implements IQuackBehavior
	{
		public function Squeak()
		{
		}
		
		public function quack():String
		{
			return "squeak";
		}
	}
}