jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "SampleTestCase1.feature",
      "Feature": {
        "Name": "SampleTestCase1",
        "Description": "In order to avoid silly mistakes\r\nAs a math idiot\r\nI want to be told the sum of two numbers",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "variant:",
                    "Value1",
                    "Value2",
                    "Result1"
                  ],
                  "DataRows": [
                    [
                      "Scenario-1",
                      "10",
                      "20",
                      "30",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false
                      }
                    ],
                    [
                      "Scenario-2",
                      "1",
                      "3",
                      "4",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false
                      }
                    ],
                    [
                      "Scenario-3",
                      "1000",
                      "2000",
                      "3000",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false
                      }
                    ],
                    [
                      "Scenario-4",
                      "602",
                      "96",
                      "698",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false
                      }
                    ],
                    [
                      "Scenario-5",
                      "1",
                      "2",
                      "3",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false
                      }
                    ],
                    [
                      "Scenario-6",
                      "1000000",
                      "1000000",
                      "2000000",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false
                      }
                    ],
                    [
                      "Scenario-7",
                      "-1",
                      "-1",
                      "-2",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false
                      }
                    ],
                    [
                      "Scenario-8",
                      "-1000000",
                      "-1000000",
                      "-2000000",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Add two numbers",
            "Slug": "add-two-numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered <Value1> into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered <Value2> into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press add",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be <Result1> on the screen",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@mytag",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      }
    ],
    "Folders": [
      {
        "Folder": "SampleTestCase1.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "SampleTestCase1.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 1,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 1
    },
    "Features": {
      "Total": 1,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 1
    }
  },
  "Configuration": {
    "GeneratedOn": "6 June 2018 22:12:52"
  }
});