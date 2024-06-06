/// <reference types="cypress" />

const ratings = [1, 2, 3, 4, 5];

describe('interactive rating', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/frontendmentorproject-interactive-rating/');
  });
  it('should  select a rating value and display it ', () => {
    ratings.forEach((rating) => {
      cy.get(`[data-test="rating-btn-${rating}"]`).click();
      cy.get('[data-test="rating-submit"]').click();
      cy.get('[data-test="submittedRating"]').contains(`You selected ${rating} out of 5`);
      cy.visit('http://localhost:5173/frontendmentorproject-interactive-rating/');
    });
  });
});
