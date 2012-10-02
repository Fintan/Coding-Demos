package headfirst.strategy
{
	public class FakeQuack implements IQuackBehavior
	{
		public function FakeQuack()
		{
		}
		
		public function quack():String
		{
			return "Qwak";
		}
	}
}