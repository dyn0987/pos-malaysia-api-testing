

const weightAmount = 1;
const toPostCode = '35600';
const destinationCountry = 'India';
describe('Calculate shipping from Malaysia to India', () => {
    it('should allow user to calculate shipment quote', () => {
        cy.visit('https://pos.com.my/send/ratecalculator');

        cy.wait(3000);

        cy.get('input[formcontrolname="postcodeFrom"]')
            .scrollIntoView();

        cy.get('.QSIWebResponsiveDialog-Layout1-SI_8pNgjFa89G1A9FQ_close-btn')
            .should('be.visible')
            .click();


        cy.get('input[formcontrolname="postcodeFrom"]')
            .should('be.visible')
            .type(toPostCode, { force: true });

        cy.wait(1000);

        cy.get('.country-container').scrollIntoView()

        cy.get('#mat-input-0').click({ force: true });
        cy.wait(500);

        cy.get('#mat-input-0').clear().type(destinationCountry);
        cy.wait(1000);

        cy.get('mat-option[id^="mat-option-"]:visible').click({ force: true });

        // Enter weight
        cy.get('input[formcontrolname="itemWeight"]')
            .clear({ force: true })
            .type(weightAmount, { force: true });

        cy.get('a')
            .contains('Calculate')
            .scrollIntoView()
            .should('be.visible')
            .click({ force: true });

    });
});

describe('Quote and Shipment Options', () => {
    it('should display multiple quote and shipment options', () => {

        cy.get('h1').contains('Your Quote').should('be.visible');

        cy.wait(2000);

        cy.get('.border-b.ng-star-inserted')
            .should('have.length.greaterThan', 1)
            .each(($quote) => {

                cy.wrap($quote).within(() => {
                    cy.contains('Service Type').should('exist');
                    cy.contains('Estimated Delivery Time').should('exist');
                    cy.contains('RM').should('exist');
                    cy.contains('Book Now').should('exist');
                });
            });
    });
});
