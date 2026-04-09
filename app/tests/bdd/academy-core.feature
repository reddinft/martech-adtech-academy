Feature: Academy core flows
  Scenario: Learner opens first module from homepage
    Given I am on the academy homepage
    When I open module 1
    Then I should see the module page with the Harvard-style case section

  Scenario: Learner marks a module complete and state persists
    Given I am on the industry map module page
    When I mark the module as complete
    Then progress should show one completed module even after reload

  Scenario: Learner submits a checkpoint quiz
    Given I am on the industry map module page
    When I submit the checkpoint quiz
    Then I should see a score and answer explanations

  Scenario: Learner saves and restores a case memo
    Given I am on the industry map module page
    When I write and save a case memo
    Then the memo should persist after page reload

  Scenario: Learner can open onboarding from homepage CTA
    Given I am on the academy homepage
    When I open onboarding
    Then I should see module types and a call to start module 1

  Scenario: First-time learner sees onboarding prompt and can dismiss it
    Given I am on the academy homepage for the first time
    When I dismiss the onboarding prompt
    Then it should stay hidden after reload

  Scenario: First-time learner can start guided onboarding
    Given I am on the academy homepage for the first time
    When I start guided onboarding
    Then I should land on onboarding and be able to start module 1

  Scenario: Learner cannot submit quiz without selecting an answer
    Given I am on the industry map module page
    Then the "Submit answers" button should be disabled
    When I select an answer for question 1
    Then the "Submit answers" button should be enabled

  Scenario: Learner sees correct and incorrect indicators after submitting quiz
    Given I am on the industry map module page
    When I select an answer for all questions and submit
    Then I should see at least one correct indicator
    And the quiz options should be non-interactive

  Scenario: Learner sees save confirmation after saving a case memo
    Given I am on the industry map module page
    When I save the case memo
    Then I should see a "Saved" confirmation
