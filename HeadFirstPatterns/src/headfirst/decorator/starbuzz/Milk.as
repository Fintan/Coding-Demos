package headfirst.decorator.starbuzz
{
	public class Milk extends CondimentDecorator
	{
		private var beverage:Beverage;
		
		public function Milk(beverage:Beverage)
		{
			this.beverage = beverage;
		}
		
		override public function get description():String
		{
			return beverage.description + ", milk";	
		}
		
		override public function get cost():Number
		{
			return .10 + beverage.cost;
		}
	}
}