package tests
{
	import headfirst.strategy.DecoyDuck;
	import headfirst.strategy.FakeQuack;
	import headfirst.strategy.FlyRocketPowered;
	import headfirst.strategy.MallardDuck;
	import headfirst.strategy.ModelDuck;
	import headfirst.strategy.MuteQuack;
	import headfirst.strategy.RubberDuck;
	import headfirst.strategy.Squeak;
	
	import org.flexunit.Assert;

	public class TestDuckSimulator
	{		
		[Before]
		public function setUp():void
		{
		}
		
		[After]
		public function tearDown():void
		{
		}
		
		[Test]
		public function testDefaultDuckBehaviours():void
		{
			var mallard:MallardDuck = new MallardDuck();
			var	rubberDuckie:RubberDuck = new RubberDuck();
			var	decoy:DecoyDuck = new DecoyDuck();
			var	model:ModelDuck = new ModelDuck();
			
			Assert.assertEquals("quack", mallard.performQuack());
			Assert.assertEquals("squeak", rubberDuckie.performQuack());
			Assert.assertEquals("<< Silence >>", decoy.performQuack());
			Assert.assertEquals("I can't fly", model.performFly());	
			
		}
		
		[Test]
		public function testModifiedDuckBehaviours():void
		{
			var mallard:MallardDuck = new MallardDuck();
			var	rubberDuckie:RubberDuck = new RubberDuck();
			var	decoy:DecoyDuck = new DecoyDuck();
			var	model:ModelDuck = new ModelDuck();
			
			mallard.setQuackBehaviour(new MuteQuack());
			rubberDuckie.setQuackBehaviour(new FakeQuack());
			decoy.setQuackBehaviour(new Squeak());
			model.setFlyBehaviour(new FlyRocketPowered());
			
			Assert.assertEquals("<< Silence >>", mallard.performQuack());
			Assert.assertEquals("Qwak", rubberDuckie.performQuack());
			Assert.assertEquals("squeak", decoy.performQuack());
			Assert.assertEquals("I'm flying with a rocket", model.performFly());	
			
		}
		
		[BeforeClass]
		public static function setUpBeforeClass():void
		{
		}
		
		[AfterClass]
		public static function tearDownAfterClass():void
		{
		}
		
		
	}
}