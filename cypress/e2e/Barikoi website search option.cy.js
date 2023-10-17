describe("BariKoi website search option", () => {
  it('navigates', () => {
    cy.visit("https://barikoi.com/search") 
    cy.contains("Search").type('BariKoi')
    cy.wait(5000)
  })
})