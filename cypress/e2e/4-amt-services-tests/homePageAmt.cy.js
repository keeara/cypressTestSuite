////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function searchAndClick(element) {
  cy.get(".inline-flex").each(($el, index) => {
    const buttonEl = $el.text().trim().toLowerCase();

    if (buttonEl === element) {
      cy.wrap($el).click({ force: true});
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

describe("Test Home Page #1", () => {
  it("Check the homepage by scrolling it and making a screenshot", () => {
    cy.visit("https://cloud.amtdev.it/famiglia");

    cy.window().then((win) => {
      win.scrollTo(0, document.body.scrollHeight);
    });
    cy.screenshot();
  });
});

describe("Test Home Page #2", () => {
  it("Checks the page lokalization and verifies it's in Italian", () => {
    const englishWords = [
      "Welcome",
      "Click here",
      "Read more",
      "Sign up",
      "Do",
      "You",
      "Is",
      "It",
      "it",
      "is",
      "animated",
      "styled",
      "is it",
      "accessible",
    ];

    cy.get("body")
      .invoke("text")
      .then((text) => {
        englishWords.forEach((word) => {
          expect(text).not.to.include(word);
        });
      });
  });
});


describe("Test Home Page #3", () => {
  it("Cheks the offer's subscription flow", () => {
    cy.visit("https://cloud.amtdev.it/famiglia");



      const fibraHome =
        ".inline-flex.items-center.justify-center.whitespace-nowrap.text-base.font-medium.ring-offset-background.transition-colors.focus-visible\\:outline-none.focus-visible\\:ring-2.focus-visible\\:ring-ring.focus-visible\\:ring-offset-2.disabled\\:pointer-events-none.disabled\\:opacity-50.text-black.hover\\:bg-primary\\/90.h-10.px-4.w-\\[100\\%\\].rounded-2xl.py-6.md\\:text-xl.bg-primary";

      cy.get(fibraHome).click({ force: true, multiple: true });
      cy.wait(1000);
      cy.scrollTo("bottom");
      cy.contains("button", "Aggiungi ").click({ force: true });
      searchAndClick("verifica copertura e abbonati");
      
      const provinceSelector =
        ".inline-flex.items-center.whitespace-nowrap.text-base.font-medium.ring-offset-background.transition-colors.focus-visible\\:outline-none.focus-visible\\:ring-2.focus-visible\\:ring-ring.focus-visible\\:ring-offset-2.disabled\\:pointer-events-none.disabled\\:opacity-50.rounded-2xl.border.border-input.bg-background.hover\\:bg-accent.hover\\:text-accent-foreground.h-10.px-4.py-2.w-full.justify-between.overflow-ellipsis";
      cy.get(provinceSelector).eq(0).click({ force: true, multiple: true });
      cy.get("input[type='text']").type("BARI");
      cy.contains("BARI").click({ force: true });

      cy.wait(1000);

      cy.get(provinceSelector).eq(1).click({ force: true, multiple: true });
      cy.get("input[type='text']").type("TERLIZZI");
      cy.contains("TERLIZZI").click({ force: true });

      cy.wait(1000);

      cy.get(provinceSelector).eq(2).click({ force: true, multiple: true });
      cy.get("input[type='text']").type("VIA SPINETO");

      cy.wait(1500);

      cy.contains("VIA SPINETO").click({ force: true });

      cy.wait(1000);

      cy.get(provinceSelector).eq(3).click({ force: true, multiple: true });
      cy.get("input[type='text']").type("13/F");
      cy.wait(1500);
      cy.realPress("Enter");

      cy.contains("Verifica copertura").click({ force: true });
      cy.wait(1500)
      cy.pressTab(4) //=> selects the button 'Scopri di piu'
      cy.realPress("Space") //=> taps the button 'Scopri di piu'

      cy.contains("Scopri di più ").click({ force: true });
      cy.contains("ABBONATI ONLINE").click({ force: true });

      cy.get("input[name='nome']").type("Francesco Test");
      cy.get("input[name='cognome']").type("Test");
      cy.get("input[name='codiceFiscale']").type("GHLENC68P60L109J");
      cy.get("input[name='cellulare']").type(3180000001)
      cy.get("input[name='email']").type("test.barile123@gmail.com")
      cy.get("input[name='confermaEmail']").type("test.barile123@gmail.com")
      cy.realPress("Tab").realPress("Space") //=> moves over the checkbox
      cy.realPress("Tab").realPress("Space") //=> moves over the confirm button

      cy.get("ol").contains("Errore").should("be.visible");
    });
  });



describe("Test Home Page #3", () => {
  it("Cheks the offer's subscription flow", () => {
    cy.visit("https://cloud.amtdev.it/famiglia/fibra-home");

    cy.scrollTo("bottom");
    cy.contains("button", "Aggiungi ").click({ force: true });
    cy.contains("button", "Aggiungi ").click({ force: true });
    cy.contains("button", "Aggiungi ").click({ force: true });

    searchAndClick("ABBONATI ONLINE");
  });
}); 