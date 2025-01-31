describe("Test Mydo #1", () => {
  it("Adds a product to the cart", () => {
    cy.visit("https://www.mydo.it");

    //Accedi all'area riservata per testare il sito
    cy.contains("Accedi utilizzando la password")
    .click({ force: true })
    .click({ force: true })
    .type("rohwhi")
    
    cy.contains("button", "Accedi")    
    .click({ force: true });

    cy.contains("Accetta")
    .click({ force: true });


    cy.contains("SHOP")
    .click({ force: true })
    
     cy.scrollTo("0", "600")
    
     cy.get("a.full-unstyled-link")
     .eq(10)
     .click({ force: true })
     
     //add 120 119 products to the cart
     for (let i=0; i<120; i++)
        {
            cy.get("button[name='plus']")
            .click({force: true})
        }
    
        
        cy.get("button[name='add']")
        .click({ force: true });

        for (let i = 0; i <5; i++) {
          cy.get("button[name='plus']")
          .click({ force: true });
        }
        cy.get("button[name='add']").click({ force: true });
    
  });
}); 

describe("Test Mydo #2", () => {
  it("Adds a product to the cart and buys it", () => {
    cy.visit("https://www.mydo.it");

    //Accedi all'area riservata per testare il sito
    cy.contains("Accedi utilizzando la password")
      .click({ force: true })
      .click({ force: true })
      .type("rohwhi");

    cy.contains("button", "Accedi").click({ force: true });

    cy.contains("Accetta").click({ force: true });

    cy.contains("SHOP").click({ force: true });

    cy.scrollTo("0", "600");

    cy.get("a.full-unstyled-link").eq(10).click({ force: true });

    //add 120 119 products to the cart
    for (let i = 0; i < 5; i++) {
      cy.get("button[name='plus']").click({ force: true });
    }

    cy.get("button[name='add']").click({ force: true });

    cy.contains("Check-out").click({ force: true });
  });
}); 