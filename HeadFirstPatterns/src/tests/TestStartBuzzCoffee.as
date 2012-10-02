package tests
{
	import headfirst.decorator.starbuzz.Beverage;
	import headfirst.decorator.starbuzz.DarkRoast;
	import headfirst.decorator.starbuzz.Espresso;
	import headfirst.decorator.starbuzz.HouseBlend;
	import headfirst.decorator.starbuzz.Mocha;
	import headfirst.decorator.starbuzz.Soy;
	import headfirst.decorator.starbuzz.Whip;
	
	import org.flexunit.Assert;

	public class TestStartBuzzCoffee
	{		
		private var beverage:Beverage;
		
		[Before]
		public function setUp():void
		{
		}
		
		[After]
		public function tearDown():void
		{
			beverage = null;
		}
		
		[Test]
		public function testEspresso():void 
		{
			
			beverage = new Espresso();
			
			Assert.assertEquals(1.99, beverage.cost);  
			Assert.assertEquals("Espresso Coffee", beverage.description);
			
		}
		
		[Test]
		public function testDarkRoast2Mocha1Whip():void 
		{
			
			beverage = new DarkRoast();
			beverage = new Mocha(beverage);
			beverage = new Mocha(beverage);
			beverage = new Whip(beverage);
			
			Assert.assertEquals(1.49, beverage.cost);  
			Assert.assertEquals("Dark Roast Coffee, Mocha, Mocha, Whip", beverage.description);
			
		}
		
		[Test]
		public function testHouseBlendSoyMochaWhip():void 
		{
			
			beverage = new HouseBlend();
			beverage = new Soy(beverage);
			beverage = new Mocha(beverage);
			beverage = new Whip(beverage);
			
			Assert.assertEquals(1.34, beverage.cost);  
			Assert.assertEquals("House Blend Coffee, Soy, Mocha, Whip", beverage.description);
			
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