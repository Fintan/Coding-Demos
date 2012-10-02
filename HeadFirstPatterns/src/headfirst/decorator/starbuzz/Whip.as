package headfirst.decorator.starbuzz
{
	public class Whip extends CondimentDecorator
	{
		private var beverage:Beverage;
		
		public function Whip(beverage:Beverage)
		{
			this.beverage = beverage;
		}
		
		override public function get description():String
		{
			return beverage.description + ", Whip";
		}
		
		override public function get cost():Number
		{
			return .10 + beverage.cost;
		}
	}
}