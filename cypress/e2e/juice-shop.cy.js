import { HomePage } from "../pageObjects/HomePage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      HomePage.accountButton.click();
      HomePage.loginButton.click();
      HomePage.emailField.type("demo");
      HomePage.passwordField.type("demo");
      HomePage.loginSubmitButton.click();
      HomePage.accountButton.click();
      HomePage.userProfileButton.should("contain.text", "demo");
    });

    it("Registration", () => {
      HomePage.accountButton.click();
      HomePage.loginButton.click();
      HomePage.notYetCustomerButton.click();

      const randomNumber = Math.floor(Math.random() * 10000 + 1);
      const email = `email_${randomNumber}@ebox.com`;
      const password = "abc123$#";

      RegistrationPage.emailField.type(email);
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);
      RegistrationPage.selectSecurityQuestion("Name of your favorite pet?");
      RegistrationPage.answerField.type("Fluffy");
      RegistrationPage.registerButton.click();

      HomePage.loginButton.click();
      HomePage.emailField.type(email);
      HomePage.passwordField.type(password);
      HomePage.loginSubmitButton.click();
      HomePage.accountButton.click();
      HomePage.userProfileButton.should("contain.text", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      HomePage.searchIcon.click();
      HomePage.searchInput.type("Lemon{enter}");
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
    });

    it("Search 500ml and validate Lemon", () => {
      HomePage.searchIcon.click();
      HomePage.searchInput.type("500ml{enter}");
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
    });

    it("Search 500ml and validate multiple cards", () => {
      HomePage.searchIcon.click();
      HomePage.searchInput.type("500ml{enter}");
    
      HomePage.productBox.contains("Eggfruit Juice (500ml)").click();
      HomePage.productInfo.should("contain.text", "Now with even more exotic flavour.");
      HomePage.closeProductDialogButton.click();
    
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
      HomePage.closeProductDialogButton.click();
    
      HomePage.productBox.contains("Strawberry Juice (500ml)").click();
      HomePage.productInfo.should("contain.text", "Sweet & tasty!");
      HomePage.closeProductDialogButton.click();
    });

    it("Read a review", () => {
      HomePage.searchIcon.click();
      HomePage.searchInput.type("King{enter}");
    
      HomePage.productBox.contains("OWASP Juice Shop \\\"King of the Hill\\\" Facemask").click();
      HomePage.expandReviewButton.click();
    
      HomePage.reviewComment.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    });

    // Create scenario - Add a review
    // Click on search icon
    // Search for Raspberry
    // Select a product card - Raspberry Juice (1000ml)
    // Type in review - "Tastes like metal"
    // Click Submit
    // Click expand reviews button/icon (wait for reviews to appear)
    // Validate review -  "Tastes like metal"

    // Create scenario - Validate product card amount
    // Validate that the default amount of cards is 12
    // Change items per page (at the bottom of page) to 24
    // Validate that the amount of cards is 24
    // Change items per page (at the bottom of page) to 36
    // Validate that the amount of cards is 35

    // Create scenario - Buy Girlie T-shirt
    // Click on search icon
    // Search for Girlie
    // Add to basket "Girlie"
    // Click on "Your Basket" button
    // Create page object - BasketPage
    // Click on "Checkout" button
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    // Click Continue button
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    // Click Continue button
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    // Click Continue button
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"

    // Create scenario - Add address
    // Click on Account
    // Click on Orders & Payment
    // Click on My saved addresses
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    // Click Submit button
    // Validate that previously added address is visible

    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list
  });
});
