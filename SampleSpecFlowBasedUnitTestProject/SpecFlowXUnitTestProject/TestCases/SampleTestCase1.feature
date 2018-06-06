Feature: SampleTestCase1
	In order to avoid silly mistakes
	As a math idiot
	I want to be told the sum of two numbers

@mytag
Scenario Outline: Add two numbers
	Given I have entered <Value1> into the calculator
	And I have entered <Value2> into the calculator
	When I press add
	Then the result should be <Result1> on the screen
	Then say hello

Examples: 
| variant:   | Value1   | Value2   | Result1  |
| Scenario-1 | 10       | 20       | 30       |
| Scenario-2 | 1        | 3        | 4        |
| Scenario-3 | 1000     | 2000     | 3000     |
| Scenario-4 | 602      | 96       | 698      |
| Scenario-5 | 1        | 2        | 3        |
| Scenario-6 | 1000000  | 1000000  | 2000000  |
| Scenario-7 | -1       | -1       | -2       |
| Scenario-8 | -1000000 | -1000000 | -2000000 |
