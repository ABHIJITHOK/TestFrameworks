using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using TechTalk.SpecFlow;

namespace SpecFlowMSTestUnitTestProject.TestStepDefinitions
{
    [Binding]
    public partial class TestStepDefinitions
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
