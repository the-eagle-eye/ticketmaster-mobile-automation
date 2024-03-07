Feature: TicketMaster Sign In Validations

  Background: Sign Into the TicketMaster application.

  Scenario: User is able to successfully sign into the application.
    Given the user has arrived on the app`s Sign In page
    When the user enters a valid email into the Email field
    And the user enters a valid password into the Password field
    And the user taps the Sign In button
    Then the user is successfully signed into the application
    And the Sign Out button appears on My Account

  Scenario: User receives correct error message for invalid password.
    Given the user has arrived on the app`s Sign In page
    When the user enters a valid email into the Email field
    And the user enters an invalid password into the Password field
    And the user taps the Sign In button
    Then the correct error message for invalid password appears
