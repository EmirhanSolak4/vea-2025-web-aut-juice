import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("#navbarAccount");
  }

  static get loginButton() {
    return cy.get("#navbarLoginButton");
  }

  static get notYetCustomerButton() {
    return cy.get("[routerlink='/register']");
  }

  static get emailField() {
    return cy.get("#email");
  }

  static get passwordField() {
    return cy.get("#password");
  }

  static get loginSubmitButton() {
    return cy.get("#loginButton");
  }

  static get userProfileButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchIcon() {
    return cy.get("#searchQuery");
  }

  static get searchInput() {
    return cy.get("#searchQuery input");
  }

  static get productBox() {
    return cy.get("[aria-label='Click for more information about the product']");
  }

  static get productInfo() {
    return cy.get("mat-dialog-content.mdc-dialog__content");
  }
  static get closeProductDialogButton() {
    return cy.get("button[aria-label='Close Dialog']");
  }

  static get expandReviewButton() {
    return cy.get("button[aria-label='Expand for Reviews']");
  }
  static get reviewComment() {
    return cy.get("mat-expansion-panel .review-text");
  }
  static get reviewTextArea() {
    return cy.get("textarea[aria-label='Text field to review a product']");
  }

  static get submitReviewButton() {
    return cy.get("button[aria-label='Submit the review']");
  }
  static get itemsPerPageDropdown() {
    return cy.get("mat-select[aria-label='Items per page:']");
  }

  static get itemsPerPageOptions() {
    return cy.get("mat-option");
  }
  static get addToBasketButton() {
    return cy.get("button[aria-label='Add to Basket']");
  }

  static get yourBasketButton() {
    return cy.get("[aria-label='Show the shopping cart']");
  }
  static get checkoutButton() {
    return cy.get("button#checkoutButton");
  }

  static get addressCard() {
    return cy.contains("mat-card", "United Fakedom");
  }

  static get addressContinueButton() {
    return cy.get("button[aria-label='Proceed to payment selection']");
  }

  static get deliveryOption() {
    return cy.contains("mat-row", "Standard Delivery").find("mat-radio-button");
  }

  static get deliveryContinueButton() {
    return cy.get("button[aria-label='Proceed to delivery method selection']");
  }

  static get paymentCard() {
    return cy.contains("mat-radio-button", "5678");
  }

  static get paymentContinueButton() {
    return cy.get("button[aria-label='Proceed to review']");
  }

  static get placeOrderButton() {
    return cy.get("button[aria-label='Place your order and pay']");
  }

  static get confirmationMessage() {
    return cy.get(".confirmation").contains("Thank you for your purchase!");
  }

  // Add Address elements
  static get ordersAndPaymentButton() {
    return cy.get("button[aria-label='Show Orders and Payment Menu']");
  }

  static get mySavedAddressesButton() {
    return cy.get("[routerlink='/address/list']");
  }

  static get addNewAddressButton() {
    return cy.get("[aria-label='Add a new address']");
  }

  static get countryField() {
    return cy.get("input[data-placeholder='Please provide a country.']");
  }

  static get nameField() {
    return cy.get("input[data-placeholder='Please provide a name.']");
  }

  static get mobileNumberField() {
    return cy.get("input[data-placeholder='Please provide a mobile number.']");
  }

  static get zipCodeField() {
    return cy.get("input[data-placeholder='Please provide a ZIP code.']");
  }

  static get addressField() {
    return cy.get("textarea[data-placeholder='Please provide an address.']");
  }

  static get cityField() {
    return cy.get("input[data-placeholder='Please provide a city.']");
  }

  static get stateField() {
    return cy.get("input[data-placeholder='Please provide a state.']");
  }

  static get submitAddressButton() {
    return cy.get("button#submitButton");
  }

  static get savedAddresses() {
    return cy.get("mat-card.mat-card");
  }

  static get myPaymentOptionsButton() {
    return cy.get("[routerlink='/payment/options']");
  }

  static get addNewCardButton() {
    return cy.get("[aria-label='Add a new card']");
  }

  static get cardNameField() {
    return cy.get("input[data-placeholder='Please enter the name on your card']");
  }

  static get cardNumberField() {
    return cy.get("input[data-placeholder='Please enter your card number']");
  }

  static get expiryMonthSelect() {
    return cy.get("mat-select[name='month']");
  }

  static get expiryYearSelect() {
    return cy.get("mat-select[name='year']");
  }

  static get expiryDropdownOptions() {
    return cy.get("mat-option");
  }

  static get submitCardButton() {
    return cy.get("button#submitButton");
  }

  static get savedCards() {
    return cy.get("mat-card.mat-card");
  }
} 







