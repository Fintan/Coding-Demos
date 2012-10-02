package headfirst.decorator.starbuzz
{
	public class Decaf extends Beverage
	{
		public function Decaf()
		{
			this.description = "Decaf";
		}
		
		override public function get cost():Number 
		{
			return 1.05;
		}
	}
}