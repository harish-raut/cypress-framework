export const click = function (subject: string, options?: object) {
  cy.log(`clicking on element --> ${subject}`);
  cy.wrap(options)
    .if("eq", undefined)
    .then(function () {
      cy.get(subject).highLight().click({ force: true });
    })
    .else()
    .then(function () {
      cy.get(subject, options).highLight().click({ force: true });
    });
  cy.log(`clicked on element --> ${subject}`);
};

export const clearAndType = function (subject: string, text: string) {
  cy.log(`clearing text-field --> ${subject}`);
  cy.get(subject)
    .clear({ force: true })
    .log(`cleared text-field -->${subject}`);
  cy.log(`entering text --> ${text}`);
  cy.get(subject)
    .highLight()
    .type(text, { force: true })
    .log(`text entered is -->${subject}`);
};
