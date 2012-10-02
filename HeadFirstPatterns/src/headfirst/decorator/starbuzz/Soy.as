package headfirst.decorator.starbuzz
{
	public class Soy extends CondimentDecorator
	{
		private var beverage:Beverage;
		
		public function Soy(beverage:Beverage)
		{
			this.beverage = beverage;
		}
		
		override public function get description():String
		{
			return beverage.description + ", Soy";
		}
		
		override public function get cost():Number
		{
			return beverage.cost + .15;
		}
	}
}