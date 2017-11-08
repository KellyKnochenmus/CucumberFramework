package DataDrivenCucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(format={"html:output"},features = {"classpath:features/datadriven.feature"})

public class testRunner { }