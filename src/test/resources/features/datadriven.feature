Feature: Data Driven

@tester
  Scenario Outline: I Work on a Certain Day of Week

  Given I work on "<weekday>"
  When I meet watchman
  Then I "<greet>" him


  Examples:
    | weekday  | greet |
    | Monday   | ignore|
    | Tuesday  | smile |
    | Wednesday| hello |