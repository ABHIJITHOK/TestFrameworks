using NUnit.Framework;
using System;
using TechTalk.SpecFlow;

namespace SpecFlowNUnitTestProject.TestStepDefinitions
{
    [Binding]
    public class SampleTestCase1Steps
    {
        [Given(@"I have entered (.*) into the calculator")]
        public void GivenIHaveEnteredIntoTheCalculator(int p0)
        {
            //TODO
        }
        
        [When(@"I press add")]
        public void WhenIPressAdd()
        {
            //TODO
        }
        
        [Then(@"the result should be (.*) on the screen")]
        public void ThenTheResultShouldBeOnTheScreen(int p0)
        {
            Assert.AreEqual(120, p0);
        }
    }
}
