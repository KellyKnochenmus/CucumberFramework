package DataDrivenCucumber;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AttitudeTestStepDefinitions {

   @Given("^I work on \"([^\"]*)\"$")
        public void iWork (String strWork) {
            if(strWork.equals("nights")) {
                System.out.println("First I work at this time: "+strWork);
            } else {
                System.out.println("Second I work at this time: "+strWork);
            }
    }

    @When("^I meet ([^\"]*)$")
    public void iMeet (String strMeet) {
        System.out.println("First I meet this person: "+strMeet);
    }

    @Then("^I \"([^\"]*)\" him$")
    public void iGreet (String strGreet) {
       if(strGreet.equals("greet")) {
           System.out.println("First I do what to this person: "+strGreet);
       } else {
           System.out.println("Second I do what to this person: "+strGreet);
       }
    }
}
