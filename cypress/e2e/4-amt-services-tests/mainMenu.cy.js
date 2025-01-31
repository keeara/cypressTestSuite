describe("Menu #1", () => {
  it("Check wether the menu buttons and links work", () => {
    cy.visit("https://cloud.amtdev.it/famiglia");

    const getMenu = () => {
        cy.get("p").eq(0).should("be.visible").click({ force: true });
    }

    getMenu();
        cy.contains("div", 'Famiglie').click({force: true});
            cy.url().should("eq", "https://cloud.amtdev.it/famiglia");
                cy.reload() //reload the page to re-do the action

    cy.wait(1000)
    
    getMenu();
        cy.get(".flex.flex-row.items-center.justify-between.text-2xl")
          .eq(1) //partita-iva button (same-div)
          .click({ force: true }); 
            cy.url().should("eq", "https://cloud.amtdev.it/partita-iva");
            cy.reload()

    cy.wait(1000)


    cy.intercept("GET", "https://cloud.amtdev.it/about").as("aboutPageRequest");
    
    getMenu();
        cy.contains("button", 'Chi siamo').click({force: true});

        cy.wait('@aboutPageRequest').then(({ response }) => {
      
            if (response.statusCode === 404) {
                cy.log('La pagina non è stata trovata: 404');
                     } else {
                         cy.log('La pagina è stata trovata');
                    }});
            cy.url().should("eq", "https://cloud.amtdev.it/about");
            
                cy.reload()

    cy.wait(1000)

    getMenu();
        cy.findAllByText('Assistenza').click({force: true});
            cy.reload()

    cy.wait(1000)

    getMenu()
        cy.findAllByText("La mia area").click({force: true});
            cy.url().should("eq", "https://cloud.amtdev.it/login");
                cy.reload();

    
  });
});
