package headfirst.decorator.starbuzz
{
	public class Mocha extends CondimentDecorator
	{
		private var beverage:Beverage;
		
		public function Mocha(beverage:Beverage)
		{
			this.beverage = beverage;
		}
		
		override public function get description():String
		{
			return beverage.description + ", Mocha";
		}
		
		override public function get cost():Number
		{
			return beverage.cost + .20;
		}
	}
}