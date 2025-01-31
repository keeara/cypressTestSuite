////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function searchAndClick(element) {
  cy.get(".inline-flex").each(($el, index) => {
    const buttonEl = $el.text().trim().toLowerCase();

    if (buttonEl === element) {
      cy.wrap($el).click({ force: true });
      return false; // This breaks the `.each()` loop after the first match
    }
  });
}

Cypress.Commands.add("pressTab", (times) => {
  for (let i = 0; i < times; i++) {
    cy.realPress("Tab");
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const mainClass = ".w-nav-title";

describe("Test Allegramente HomePage #1", () => {
  it("Cheks all the possible buttons", () => {
    cy.visit("https://www.allegramentecorato.it/");
    
    //cy.reload();
    

    cy.get(mainClass)
    .eq(0)
    .click({ force: true }) 

    cy.get(mainClass)
    .eq(1)
    .click({ force: true })
    
    cy.reload();

    cy.get(mainClass)
    .eq(2)
    .click({ force: true })

    cy.reload();

    cy.get(mainClass)
    .eq(3)
    .click({ force: true })

    cy.reload();

    cy.contains("Accetta")
    .click({ force: true });
  });
}); 


describe("Test Allegramente HomePage #2", () => {
  it("Create a booking", () => {
    cy.visit("https://www.allegramentecorato.it/");

    cy.get(mainClass)
    .eq(3)
    .click({ force: true });

    cy.contains("Prenota ora una consulenza gratuita")
    .click({ force: true });

    //Find the time-button and press it to trigget the CTA
    cy.pressTab(12)
    cy.realPress("Space")
    cy.wait(2000)

  });
}); 
