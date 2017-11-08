$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/datadriven.feature");
formatter.feature({
  "line": 1,
  "name": "Data Driven",
  "description": "",
  "id": "data-driven",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "I Work on a Certain Day of Week",
  "description": "",
  "id": "data-driven;i-work-on-a-certain-day-of-week",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I work on \"\u003cweekday\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I meet watchman",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I \"\u003cgreet\u003e\" him",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "data-driven;i-work-on-a-certain-day-of-week;",
  "rows": [
    {
      "cells": [
        "weekday",
        "greet"
      ],
      "line": 12,
      "id": "data-driven;i-work-on-a-certain-day-of-week;;1"
    },
    {
      "cells": [
        "Monday",
        "ignore"
      ],
      "line": 13,
      "id": "data-driven;i-work-on-a-certain-day-of-week;;2"
    },
    {
      "cells": [
        "Tuesday",
        "smile"
      ],
      "line": 14,
      "id": "data-driven;i-work-on-a-certain-day-of-week;;3"
    },
    {
      "cells": [
        "Wednesday",
        "hello"
      ],
      "line": 15,
      "id": "data-driven;i-work-on-a-certain-day-of-week;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "I Work on a Certain Day of Week",
  "description": "",
  "id": "data-driven;i-work-on-a-certain-day-of-week;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I work on \"Monday\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I meet watchman",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I \"ignore\" him",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Monday",
      "offset": 11
    }
  ],
  "location": "AttitudeTestStepDefinitions.iWork(String)"
});
formatter.result({
  "duration": 90219152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "watchman",
      "offset": 7
    }
  ],
  "location": "AttitudeTestStepDefinitions.iMeet(String)"
});
formatter.result({
  "duration": 93275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ignore",
      "offset": 3
    }
  ],
  "location": "AttitudeTestStepDefinitions.iGreet(String)"
});
formatter.result({
  "duration": 96574,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I Work on a Certain Day of Week",
  "description": "",
  "id": "data-driven;i-work-on-a-certain-day-of-week;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I work on \"Tuesday\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I meet watchman",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I \"smile\" him",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tuesday",
      "offset": 11
    }
  ],
  "location": "AttitudeTestStepDefinitions.iWork(String)"
});
formatter.result({
  "duration": 110245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "watchman",
      "offset": 7
    }
  ],
  "location": "AttitudeTestStepDefinitions.iMeet(String)"
});
formatter.result({
  "duration": 142672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smile",
      "offset": 3
    }
  ],
  "location": "AttitudeTestStepDefinitions.iGreet(String)"
});
formatter.result({
  "duration": 95044,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "I Work on a Certain Day of Week",
  "description": "",
  "id": "data-driven;i-work-on-a-certain-day-of-week;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I work on \"Wednesday\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I meet watchman",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I \"hello\" him",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Wednesday",
      "offset": 11
    }
  ],
  "location": "AttitudeTestStepDefinitions.iWork(String)"
});
formatter.result({
  "duration": 100871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "watchman",
      "offset": 7
    }
  ],
  "location": "AttitudeTestStepDefinitions.iMeet(String)"
});
formatter.result({
  "duration": 99011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hello",
      "offset": 3
    }
  ],
  "location": "AttitudeTestStepDefinitions.iGreet(String)"
});
formatter.result({
  "duration": 123210,
  "status": "passed"
});
});