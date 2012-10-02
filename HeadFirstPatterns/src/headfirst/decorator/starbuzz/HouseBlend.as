package headfirst.decorator.starbuzz
{
	public class HouseBlend extends Beverage
	{
		public function HouseBlend()
		{
			this.description = "House Blend Coffee";
		}
		
		override public function get cost():Number
		{
			return .89;
		}
	}
}