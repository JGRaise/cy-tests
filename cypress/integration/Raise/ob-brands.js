describe("This suite will check brands for Openbucks Client", function() {

    it("Checking for any change in general", () => {
        cy.fixture("API.json")
            .then(apidata => {
                var CryptoJS = require("crypto-js");
                var timestamp = Math.floor(Date.now() / 1000)
                var secret = apidata.OBSecret
                var signature = newSignature(timestamp, secret);

                function newSignature(timestamp, secret) {
                    var fields = [timestamp, secret]

                    fields.sort()
                    var req = fields.join(";")
                    console.log(req)

                    return CryptoJS.SHA256(req).toString(CryptoJS.enc.Hex)
                }


                cy
                    .request({

                        method: "GET",
                        url: 'https://api.getslidestaging.com/v1/brands',
                        headers: {
                            'X-Client': apidata.OBClient,
                            'X-Timestamp': timestamp,
                            'X-Signature': signature,
                            'BRANDS_VERSION': 'v2'

                        }


                    })
                    .then((response) => {
                        expect(response).to.have.property("status", 200),
                            expect(response.body).to.not.be.null,

                            expect(response.body).to.deep.equal({

                                "data": [{
                                        "type": "brands",
                                        "id": "1bfd8967-f3fb-4efa-939e-f969d1db4b8a",
                                        "attributes": {
                                            "brand_name": "Walmart",
                                            "icon_url": "https://s3.amazonaws.com/raise-content/ibi/Walmart-Logo.png",
                                            "legal_terms": "For balance inquiry, call 1-888-537-5503 or go to Walmart.com/gift cards or samsclub.com. Use this card for purchases of merchandise and services at any retail or online format of Walmart Stores Inc. in the U.S. or Puerto Rico, including Sam's Club. The balance of this card is solely a liability of Walmart Stores Arkansas, LLC. This card cannot be redeemed for cash except where required by law. Lost or stolen cards cannot be replaced without original receipt. Terms and conditions subject to change without notice. See Walmart.com for complete terms. Gift Cards purchased through unauthorized resellers or internet sites are not guaranteed by Walmart and will not be replaced for any reason. In the case of fraud, misrepresentation, abuse, or violation of the terms and conditions, Walmart reserves the right to refuse acceptance of this card and to take all available action, including the forfeiture of any remaining card balance.",
                                            "description": "tessttestsa",
                                            "card_value_config": {
                                                "max_value": 56,
                                                "min_value": 56,
                                                "denominations": [
                                                    56
                                                ],
                                                "variable_load_supported": false
                                            },
                                            "redemption_configs": {
                                                "disclaimer": "Gift cards may not be used toward the purchase of other gift cards. Gift cards cannot be used to pay for Money orders, Portrait Studio products, third party hair salon products and services, Vision Center eye exams, or third party Vision Center purchases. Gift cards can not be used for orders through grocery.walmart.com. Can also be redeemed at Sam's Club and samsclub.com. Manager may be required to key in redemption code.",
                                                "kind": "IN_STORE_OR_ONLINE_ONLY",
                                                "methods": [{
                                                        "kind": "SHOW_BARCODE"
                                                    },
                                                    {
                                                        "kind": "ENTER_ONLINE"
                                                    }
                                                ]
                                            },
                                            "categories": [{
                                                "name": "GROCERY"
                                            }],
                                            "balance_check_url": "http://goto.walmart.com/c/202866/612734/9383?sourceid=imp_000011112222333344&veh=aff&subid1=3",
                                            "faceplate_url": "https://raise-content.s3.amazonaws.com/MP-OPs/01_Slide/Walmart/Walmart_GiftCard.png",
                                            "supported_features": [
                                                "EXCHANGE_ACCEPT"
                                            ],
                                            "exchange_config": {
                                                "accepted": {
                                                    "min_value": 1000,
                                                    "max_value": 10000
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "type": "brands",
                                        "id": "933360b9-d1da-48ff-b46d-a4c1de8cc756",
                                        "attributes": {
                                            "brand_name": "Target",
                                            "icon_url": "https://s3.amazonaws.com/raise-content/ibi/target.jpg",
                                            "legal_terms": "Unknown Target Legal Terms",
                                            "description": "Target gift cards from Slide are sure to be a hit, whether you are shopping for yourself or looking for the perfect gift for someone you love. Target works hard to live up to its slogan, “Expect more. Pay less.” Tracing its roots to a 1902 dry goods store, the first Target branded store opened in 1962. By the 1980s, Target was expanding across the country. Today, there are more than 1,800 Target stores nationwide, including both traditional Target discount stores and Super Target locations that feature full grocery departments. Target has carved out a unique “cheap and chic” niche that differentiates it from other discount retailers. Find even bigger savings at Target when you buy discount Target gift cards from Slide. Don’t shop at Target? Do you have other retailers that you like more? There’s no need to consider your Target gift cards a loss. Sell gift cards from Target on Slide. Just create a listing, set your own price at a discount from face value, and collect your money in your choice of ways. Or turn that cash into savings with the merchants you prefer. We have deals on discount gift cards for a wide range of companies. At Slide, you can save money and spend it at the stores you like best. Ready to get started? Buy your Target gift cards at a discount today.",
                                            "card_value_config": {
                                                "increment": 1,
                                                "max_value": 10000,
                                                "min_value": 500,
                                                "variable_load_supported": true
                                            },
                                            "redemption_configs": {
                                                "disclaimer": "In order to redeem your Target gift card in store, you must download and add your eCard to the Target app. To add an eCard to your Target app please sign in, select “Wallet” from the bottom, touch \"Add Payment\" and \"Gift Card\" and add the serial number below. Gift cards may not be used toward the purchase of other gift cards. Only up to four gift cards can be redeemed per transaction. For subscription payments, Target GiftCards may be used as payment for the initial order, but a valid credit card or Target Debit Card™ will still be required at the time of the order, and will be charged $0.01. The credit card or Target Debit Card will be used for payment on subsequent subscription orders.",
                                                "kind": "ONLINE_ONLY",
                                                "methods": [{
                                                    "kind": "ENTER_ONLINE"
                                                }]
                                            },
                                            "sorted_position": 1,
                                            "categories": [{
                                                "name": "GROCERY"
                                            }],
                                            "balance_check_url": "https://www.target.com/guest/gift-card-balance",
                                            "supported_features": [
                                                "EXCHANGE_ACCEPT"
                                            ],
                                            "exchange_config": {
                                                "accepted": {
                                                    "min_value": 500,
                                                    "max_value": 4000
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "type": "brands",
                                        "id": "70960173-a6cf-466f-b62a-205ffe6acccc",
                                        "attributes": {
                                            "brand_name": "Openbucks",
                                            "icon_url": "https://www.raisestaging.com/a/support/static/media/openbucks_logo_tablet_2x.839ecbca.webp",
                                            "legal_terms": "No terms. ",
                                            "description": "Openbucks brand",
                                            "card_value_config": {
                                                "increment": 1,
                                                "max_value": 10000,
                                                "min_value": 500,
                                                "variable_load_supported": true
                                            },
                                            "redemption_configs": {
                                                "kind": "ONLINE_ONLY",
                                                "methods": [{
                                                    "kind": "ENTER_ONLINE"
                                                }]
                                            },
                                            "sorted_position": 2,
                                            "categories": [{
                                                "name": "ENTERTAINMENT"
                                            }],
                                            "balance_check_url": "https://www.openbucks.com/balance.html",
                                            "faceplate_url": "https://www.openbucks.com/assets/methods/obucks-@3x.png",
                                            "supported_features": [
                                                "EXCHANGE_OFFER"
                                            ]
                                        }
                                    }
                                ]

                            })

                    })


            })
    })


    it("Checking for Openbucks brand exchange OFFER", () => {
        cy.fixture("API.json")
            .then(apidata => {
                var CryptoJS = require("crypto-js");
                var timestamp = Math.floor(Date.now() / 1000)
                var secret = apidata.OBSecret;
                var signature = newSignature(timestamp, secret);

                function newSignature(timestamp, secret) {
                    var fields = [timestamp, secret]

                    fields.sort()
                    var req = fields.join(";")
                    console.log(req)

                    return CryptoJS.SHA256(req).toString(CryptoJS.enc.Hex)
                }


                cy
                    .request({

                        method: "GET",
                        url: 'https://api.getslidestaging.com/v1/brands',
                        headers: {
                            'X-Client': apidata.OBClient,
                            'X-Timestamp': timestamp,
                            'X-Signature': signature,
                            'BRANDS_VERSION': 'v2'

                        }


                    })
                    .then((response) => {
                        expect(response).to.have.property("status", 200),
                            expect(response.body).to.not.be.null,

                            //Walmart check
                            expect(response.body.data[2].id).to.equal("70960173-a6cf-466f-b62a-205ffe6acccc"),
                            expect(response.body.data[2].attributes.brand_name).to.equal("Openbucks"),
                            expect(response.body.data[2].attributes.supported_features[0]).to.equal("EXCHANGE_OFFER")













                    })

            })
    })

    it("Checking for Walmart brand exchange ACCEPT", () => {
        cy.fixture("API.json")
            .then(apidata => {
                var CryptoJS = require("crypto-js");
                var timestamp = Math.floor(Date.now() / 1000)
                var secret = apidata.OBSecret
                var signature = newSignature(timestamp, secret);

                function newSignature(timestamp, secret) {
                    var fields = [timestamp, secret]

                    fields.sort()
                    var req = fields.join(";")
                    console.log(req)

                    return CryptoJS.SHA256(req).toString(CryptoJS.enc.Hex)
                }


                cy
                    .request({

                        method: "GET",
                        url: 'https://api.getslidestaging.com/v1/brands',
                        headers: {
                            'X-Client': apidata.OBClient,
                            'X-Timestamp': timestamp,
                            'X-Signature': signature,
                            'BRANDS_VERSION': 'v2'

                        }


                    })
                    .then((response) => {
                        expect(response).to.have.property("status", 200),
                            expect(response.body).to.not.be.null,

                            //Walmart check
                            expect(response.body.data[0].id).to.equal("1bfd8967-f3fb-4efa-939e-f969d1db4b8a"),
                            expect(response.body.data[0].attributes.brand_name).to.equal("Walmart"),
                            expect(response.body.data[0].attributes.supported_features[0]).to.equal("EXCHANGE_ACCEPT")













                    })

            })
    })



})