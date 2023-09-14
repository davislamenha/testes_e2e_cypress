describe('Testes para na Home', () => {
  beforeEach(() => cy.visit('https://agenda-contatos-react.vercel.app/'));

  it('Adicionar contato', () => {
    cy.get('.contato')
      .its('length')
      .then((qtdContatos) => {
        cy.get('input[type="text"]').type('Davis');
        cy.get('input[type="email"]').type('davis@email.com');
        cy.get('input[type="tel"]').type('82988776655');
        cy.get('button.adicionar').click();

        cy.get('.contato').should('have.length', qtdContatos + 1);
      });
  });

  it('Alterar contato', () => {
    cy.get('button.edit').first().click();
    cy.get('input[type="text"]').clear().type('Davis Sampaio');
    cy.get('input[type="email"]').clear().type('davis_sampaio@email.com');
    cy.get('button.alterar').click();

    cy.get('.contato')
      .first()
      .get('ul li')
      .first()
      .should('have.text', 'Davis Sampaio');
  });

  it('Remover contato', () => {
    cy.get('.contato')
      .its('length')
      .then((qtdContatos) => {
        cy.get('button.delete').first().click();

        cy.get('.contato').should('have.length', qtdContatos - 1);
      });
  });
});
