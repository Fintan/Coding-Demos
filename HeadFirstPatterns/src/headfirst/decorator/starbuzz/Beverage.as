package headfirst.decorator.starbuzz
{
	public class Beverage
	{
		private var _description:String;
		
		public function Beverage()
		{
			_description = "Unknown Beverage";
		}
		
		public function set description(val:String):void {
			_description = val;
		}
		
		public function get description():String{
			return _description;
		}
		
		
		public function get cost():Number {
			return 0;
		}
	}
}