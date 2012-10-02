package headfirst.strategy
{
	public class MuteQuack implements IQuackBehavior
	{
		public function MuteQuack()
		{
		}
		
		public function quack():String
		{
			return "<< Silence >>";
		}
	}
}