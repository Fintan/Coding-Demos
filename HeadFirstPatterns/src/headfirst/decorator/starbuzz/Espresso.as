package headfirst.decorator.starbuzz
{
	public class Espresso extends Beverage
	{
		public function Espresso()
		{
			this.description = "Espresso Coffee";
		}
		
		override public function get cost():Number 
		{
			return 1.99;
		}
	}
}