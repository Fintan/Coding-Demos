package headfirst.decorator.starbuzz
{
	public class DarkRoast extends Beverage
	{
		public function DarkRoast()
		{
			this.description = "Dark Roast Coffee";
		}
		
		override public function get cost():Number 
		{
			return .99;
		}
	}
}