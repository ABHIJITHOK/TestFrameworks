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
| Value1   | Value2   | Result1  |
| 10       | 20       | 30       |
| 1        | 3        | 4        |
| 1000     | 2000     | 3000     |
| 602      | 96       | 698      |
| 1        | 2        | 3        |
| 1000000  | 1000000  | 2000000  |
| -1       | -1       | -2       |
| -1000000 | -1000000 | -2000000 |
