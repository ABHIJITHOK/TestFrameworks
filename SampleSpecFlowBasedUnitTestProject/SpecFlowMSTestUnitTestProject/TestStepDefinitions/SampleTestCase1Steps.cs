using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using TechTalk.SpecFlow;

namespace SpecFlowMSTestUnitTestProject.TestStepDefinitions
{
    [Binding]
    public partial class TestStepDefinitions
    {
        private int value1 = 0, value2 = 0, sum = 0;

        [Given(@"I have entered (.*) into the calculator")]
        public void GivenIHaveEnteredIntoTheCalculator(int p0)
        {
            //TODO
            if (value1 == 0)
            {
                value1 = p0;
            }
            else
            {
                value2 = p0;
            }
        }
        
        [When(@"I press add")]
        public void WhenIPressAdd()
        {
            //TODO
            sum = value1 + value2;
        }

        [Then(@"the result should be (.*) on the screen")]
        public void ThenTheResultShouldBeOnTheScreen(int p0)
        {
            Assert.AreEqual(p0, sum);
        }
    }
}
