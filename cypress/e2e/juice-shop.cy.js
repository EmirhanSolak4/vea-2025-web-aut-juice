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

    it("Add a review", () => {
      HomePage.searchIcon.click();
      HomePage.searchInput.type("Raspberry{enter}");
    
      HomePage.productBox.contains("Raspberry Juice (1000ml)").click();
    
      HomePage.reviewTextArea.type("Tastes like metal");
      HomePage.submitReviewButton.click();
    
      HomePage.expandReviewButton.click();
      HomePage.reviewComment.should("contain.text", "Tastes like metal");
    });

    it("Validate product card amount", () => {
      HomePage.productBox.should("have.length", 12);
    
      HomePage.itemsPerPageDropdown.click();
      HomePage.itemsPerPageOptions.contains("24").click();
      HomePage.productBox.should("have.length", 24);
    
      HomePage.itemsPerPageDropdown.click();
      HomePage.itemsPerPageOptions.contains("36").click();
      HomePage.productBox.should("have.length", 35);
    });

    it("Buy Girlie T-shirt", () => {
  HomePage.searchIcon.click();
  HomePage.searchInput.type("Girlie{enter}");

  
  HomePage.productBox.contains("Girlie").parent().parent().within(() => {
    HomePage.addToBasketButton.click();
  });

  
  HomePage.yourBasketButton.click();

  
  HomePage.checkoutButton.click();
  HomePage.addressCard.click();
  HomePage.addressContinueButton.click();

  HomePage.deliveryOption.click();
  HomePage.deliveryContinueButton.click();

  HomePage.paymentCard.click();
  HomePage.paymentContinueButton.click();

  HomePage.placeOrderButton.click();

  
  HomePage.confirmationMessage.should("be.visible");
});

it("Add address", () => {
  HomePage.accountButton.click();
  HomePage.ordersAndPaymentButton.click();
  HomePage.mySavedAddressesButton.click();

  HomePage.addNewAddressButton.click();

  HomePage.countryField.type("Turkey");
  HomePage.nameField.type("Ahmet Yılmaz");
  HomePage.mobileNumberField.type("05551234567");
  HomePage.zipCodeField.type("34000");
  HomePage.addressField.type("Test Mah. Cypress Sok. No:1");
  HomePage.cityField.type("Istanbul");
  HomePage.stateField.type("Marmara");

  HomePage.submitAddressButton.click();

  HomePage.savedAddresses.should("contain.text", "Ahmet Yılmaz");
});


it("Add payment option", () => {
  HomePage.accountButton.click();
  HomePage.ordersAndPaymentButton.click();
  HomePage.myPaymentOptionsButton.click();

  HomePage.addNewCardButton.click();

  HomePage.cardNameField.type("Ahmet Yılmaz");
  HomePage.cardNumberField.type("1234123412345678");

  HomePage.expiryMonthSelect.click();
  HomePage.expiryDropdownOptions.contains("7").click();

  HomePage.expiryYearSelect.click();
  HomePage.expiryDropdownOptions.contains("2090").click();

  HomePage.submitCardButton.click();

  HomePage.savedCards.should("contain.text", "Ahmet Yılmaz");
});

  });
});
