package headfirst.strategy
{
	public class Quack implements IQuackBehavior
	{
		public function Quack()
		{
		}
		
		public function quack():String
		{
			return "quack";
		}
	}
}