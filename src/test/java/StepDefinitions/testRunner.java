package StepDefinitions;

        import org.junit.runner.RunWith;
        import cucumber.api.junit.Cucumber;
        import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(format={"html:output"},features = {"classpath:features/dailyroutine.feature"})

public class testRunner { }