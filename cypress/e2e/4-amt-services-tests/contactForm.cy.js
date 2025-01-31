describe("Test the conctact form #1", () => {
  it("Should insert a wrong phone number and retrieve an error message", () => {
    cy.visit("https://cloud.amtdev.it/famiglia");

    cy.wait(1000)

    const buttonContactUs = ".inline-flex.items-center.justify-center.whitespace-nowrap.text-black.h-11.px-8.rounded-full.bg-white.font-light.uppercase";

    cy.get(buttonContactUs)
    .click();
    
    cy.get('input[type="tel"]')
      .click({ force: true })
      .type("+0012345611164617846716");
  
    cy.get("#privacy")
    .click({ force: true });

    cy.contains("RICHIAMAMI GRATIS")
    .click({ force: true })
    .wait(1000);

    cy.get(".text-sm.font-semibold")
    .should("have.text", "Errore nella richiesta")

    cy.get(".text-sm.opacity-90")
    .should(
      "have.text",
      "Il numero di telefono non è valido"
    )

    cy.wait(1500);

    cy.get(".lucide.lucide-x.h-4.w-4")
    .click({ force: true });

    cy.get('ol')
    .should('not.be.visible', {timeout: 3000})
  });
});

describe("Test the conctact form #2", () => {
  it("Should insert a phone number without prefix", () => {
    cy.visit("https://cloud.amtdev.it/famiglia");

    cy.wait(1000);

    const buttonContactUs =
      ".inline-flex.items-center.justify-center.whitespace-nowrap.text-black.h-11.px-8.rounded-full.bg-white.font-light.uppercase";

    cy.get(buttonContactUs).click();

    cy.get('input[type="tel"]')
      .click({ force: true })
      .type("312000000");

    cy.get("#privacy").click({ force: true });

    cy.contains("RICHIAMAMI GRATIS").click({ force: true }).wait(1000);

    cy.get(".text-sm.font-semibold").should(
      "have.text",
      "Errore nella richiesta"
    );

    cy.get(".text-sm.opacity-90").should(
      "have.text",
      "Il numero di telefono non è valido"
    );

    cy.wait(1500);

    cy.get(".lucide.lucide-x.h-4.w-4").click({ force: true });

    cy.get("ol").should("not.be.visible", { timeout: 3000 });
  });
});

describe("Test the conctact form #3", () => {
  it("Should insert a phone number with right prefix but wrong number", () => {
    cy.visit("https://cloud.amtdev.it/famiglia");

    cy.wait(1000);

    const buttonContactUs =".inline-flex.items-center.justify-center.whitespace-nowrap.text-black.h-11.px-8.rounded-full.bg-white.font-light.uppercase";

    cy.get(buttonContactUs).click();

    cy.get('input[type="tel"]')
    .click({ force: true })
    .type("+351312000000");

    cy.get("#privacy").click({ force: true });

    cy.contains("RICHIAMAMI GRATIS").click({ force: true }).wait(1000);

    cy.get(".text-sm.font-semibold").should(
      "have.text",
      "Errore nella richiesta"
    );

    cy.get(".text-sm.opacity-90").should(
      "have.text",
      "Il numero di telefono non è valido"
    );

    cy.wait(1500);

    cy.get(".lucide.lucide-x.h-4.w-4")
    .click({ force: true });

    cy.get("ol")
    .should("not.be.visible", { timeout: 3000 });
  });
});

describe("Test the conctact form #4", () => {
  it("Should insert a phone number with right prefix but only 0 as numbers", () => {
    cy.visit("https://cloud.amtdev.it/famiglia");

    cy.wait(1000);

    const buttonContactUs =
      ".inline-flex.items-center.justify-center.whitespace-nowrap.text-black.h-11.px-8.rounded-full.bg-white.font-light.uppercase";

    cy.get(buttonContactUs).click();

    cy.get('input[type="tel"]')
    .click({ force: true })
    .type("+39000000000");

    cy.get("#privacy").click({ force: true });

    cy.contains("RICHIAMAMI GRATIS").click({ force: true }).wait(1000);

    cy.get(".text-sm.font-semibold").should(
      "have.text",
      "Errore nella richiesta"
    );

    cy.get(".text-sm.opacity-90").should(
      "have.text",
      "Il numero di telefono non è valido"
    );

    cy.wait(1500);

    cy.get(".lucide.lucide-x.h-4.w-4").click({ force: true });

    cy.get("ol").should("not.be.visible", { timeout: 3000 });
  });
});