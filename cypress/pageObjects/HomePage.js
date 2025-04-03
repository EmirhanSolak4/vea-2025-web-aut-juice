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
} 

