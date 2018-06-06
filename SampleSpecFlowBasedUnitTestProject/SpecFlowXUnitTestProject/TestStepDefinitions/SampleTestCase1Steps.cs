using System;
using TechTalk.SpecFlow;
using Xunit;

namespace SpecFlowXUnitTestProject.TestStepDefinitions
{
    [Binding]
    public class SampleTestCase1Steps
    {
        private int value1 = 0 , value2 = 0 , sum = 0;

        [Given(@"I have entered (.*) into the calculator")]
        public void GivenIHaveEnteredIntoTheCalculator(int p0)
        {
            if(value1==0)
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
            sum = value1 + value2;
        }

        [Then(@"the result should be (.*) on the screen")]
        public void ThenTheResultShouldBeOnTheScreen(int p0)
        {
            Assert.Equal(p0, sum);
        }
    }
}
