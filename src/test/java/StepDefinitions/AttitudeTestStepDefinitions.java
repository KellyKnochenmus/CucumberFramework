package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AttitudeTestStepDefinitions {

   @Given("^I work ([^\"]*)$")
        public void iWork (String strWork) {
            if(strWork.equals("nights")) {
                System.out.println("First I work at this time: "+strWork);
            } else {
                System.out.println("Else I work at this time: "+strWork);
            }
    }

    @When("^I meet ([^\"]*)$")
    public void iMeet (String strMeet) {
        if(strMeet.equals("watchman")) {
            System.out.println("First I meet this person: "+strMeet);
        }
        if(strMeet.equals("newspaperboy")) {
            System.out.println("Second I meet this person: "+strMeet);
        }
    }

    @Then("^I ([^\"]*) him$")
    public void iGreet (String strGreet) {
       if(strGreet.equals("greet")) {
           System.out.println("First I do what to this person: "+strGreet);
       } else {
           System.out.println("Else I do what to this person: "+strGreet);
       }
    }
}
