describe('Cart feature', () => {
    it("TC-001: BE | Add new product to cart", () => {
        cy.request("POST", "https://api.demoblaze.com/addtocart", {
            id: "9c78a750-c4c5-cc12-0154-903394a11e22",
            cookie: "cHJvZHVjdFN0b3JlMTIzNDU2MTcyMTAwNQ==",
            prod_id: 8,
            flag: true
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
    it("TC-002: BE | Delete product added from the card", () => {
        cy.request("POST", "https://api.demoblaze.com/deletecart", {
            cookie: "cHJvZHVjdFN0b3JlMTIzNDU2MTcyMTAwNQ=="
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.eq("Item deleted.")
        });
    });

});