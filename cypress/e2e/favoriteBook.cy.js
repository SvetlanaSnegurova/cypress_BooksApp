describe.skip("Testing favorite book list", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
  });
  
  it("Add new favorite book", () => {
    cy.contains("Books list").click();
    cy.contains("Add new").click();
    cy.typing("#title", "Идиот");
    cy.typing(
      "#description.form-control",
      "Роман Ф.М.Достоевского.  Впервые был опубликован в номерах журнала «Русский вестник» за 1868 год."
    );
    cy.typing("#authors", "Фёдор Михайлович Достоевский");
    cy.get("#favorite").click();
    cy.get("form > .ml-2").click();
    cy.get("h4").click();
    cy.contains(".card-text", "Фёдор Михайлович Достоевский").should(
      "be.visible"
    );
  });
  
  it("Should delete from favorite", () => {
    cy.get("h4").click();
    cy.get(".card-footer > .btn").click();
    cy.contains(
      ".btn > a",
      "Please add some book to favorit on home page!"
    ).should("be.visible");
  });

  it("Should add book to favorite from BookList", () => {
    cy.contains("Books list").click();
    cy.contains("Add to favorite").click();
    cy.get("h4").click();
    cy.contains(".card-text", "Фёдор Михайлович Достоевский").should(
      "be.visible"
    );
  });
});