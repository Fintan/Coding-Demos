package headfirst.strategy
{
	public class Duck
	{
		protected var quackBehaviour:IQuackBehavior;
		protected var flyBehaviour:IFlyBehavior;
		
		public function Duck()
		{
		}
		
		public function setFlyBehaviour(behaviour:IFlyBehavior):void
		{
			this.flyBehaviour = behaviour;	
		}
		
		public function setQuackBehaviour(behaviour:IQuackBehavior):void 
		{
			this.quackBehaviour = behaviour;
		}
		
		public function performFly():String
		{
			return this.flyBehaviour.fly();
		}
		
		public function performQuack():String
		{
			return this.quackBehaviour.quack();
		}
		
		public function display():String
		{
			//override
			return null;
		}
	}
}