describe("This suite will check brands for i&i Client", function() {

    it("Checking for any change in general", () => {
        cy.fixture("API.json")
            .then(apidata => {
                var CryptoJS = require("crypto-js");
                var timestamp = Math.floor(Date.now() / 1000)
                var secret = apidata.Secret
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
                            'X-Client': apidata.Client,
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
                                                    "min_value": 1500,
                                                    "max_value": 50000
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "type": "brands",
                                        "id": "e0e7a7ac-b569-44c1-b835-02455f5e13f9",
                                        "attributes": {
                                            "brand_name": "Foot Locker",
                                            "icon_url": "https://s3.amazonaws.com/raise-content/bi/footlocker_icon.jpg",
                                            "legal_terms": "PROTECT THIS CARD LIKE CASH.THIS CARD HAS NO FEES AND DOES NOT EXPIRE. This Gift Card may be applied towards any in-store or online purchase at Foot Locker, Kids Foot Locker, Lady Foot Locker, Footaction, Champs Sports and at Eastbay.com in the U.S.Your card may not be exchanged for cash except where legally required.Your card may not be used to purchase another Gift Card.Your card will not be replaced if lost or stolen.For card balance and terms, call 1-877-254-3333(Toll Free).This Gift Card is issued by Foot Locker Card Services LLC. FOR A STORE NEAREST YOU, CALL 1-800-991-6681",
                                            "description": "Basketball Shoes, Casual Shoes, Sneakers, Running Shoes-New Releases & Exclusive Styles from Jordan, Nike, adidas, Under Armour & more.",
                                            "card_value_config": {
                                                "increment": 1,
                                                "max_value": 50000,
                                                "min_value": 500,
                                                "variable_load_supported": true
                                            },
                                            "redemption_configs": {
                                                "kind": "IN_STORE_OR_ONLINE_ONLY",
                                                "methods": [{
                                                        "kind": "SHOW_BARCODE"
                                                    },
                                                    {
                                                        "kind": "ENTER_ONLINE"
                                                    }
                                                ]
                                            },
                                            "sorted_position": 1,
                                            "categories": [{
                                                "name": "SHOES"
                                            }]
                                        }
                                    },
                                    {
                                        "type": "brands",
                                        "id": "c216bacd-f76d-44a9-9f22-36cd2b885ce3",
                                        "attributes": {
                                            "brand_name": "Fleming's",
                                            "icon_url": "https://raise-content.s3.amazonaws.com/ibi/flemings-Logo.png",
                                            "legal_terms": "GIFT CARD IS REDEEMABLE ONLY AT Fleming's Prime Steakhouse & Wine Bar. Valid for food and beverage only; cannot be used forward the purchase of a Gift Card. No returns and redeemable for cash except where required by law. Cannot be used for contracted private dining events. Card has no replacement value if lost or stolen. This card does not expire. For balance inquiry, call 888-731-2610. For locations and reservation information, please visit FlemingsSteakhouse.com.",
                                            "card_value_config": {
                                                "increment": 1,
                                                "max_value": 100000,
                                                "min_value": 500,
                                                "variable_load_supported": true
                                            },
                                            "redemption_configs": {
                                                "kind": "IN_STORE_ONLY",
                                                "methods": [{
                                                    "kind": "SHOW_DETAILS"
                                                }]
                                            },
                                            "sorted_position": 2,
                                            "categories": [{
                                                "name": "DINING_AND_DELIVERY"
                                            }]
                                        }
                                    },
                                    {
                                        "type": "brands",
                                        "id": "2a29144a-9753-4b4c-9b23-a8308c74f119",
                                        "attributes": {
                                            "brand_name": "Chili's",
                                            "icon_url": "https://s3.amazonaws.com/raise-content/ibi/Chili's-Logo.png",
                                            "legal_terms": "You can use your eGift Card at Brinker International restaurants located in the US, Puerto Rico, Guam and internationally at restaurants located on US Military Bases. These restaurants include: Chili's® Grill & Bar, On The Border Mexican Grill & Cantina® and Maggiano's Little Italy®. Card may not be redeemed for cash, except as required by law. No service fees are charged in connection with this card. Issued by Brinker Services Corporation. For location information, visit each brands respective website: [www.chilis.com](www.chilis.com), [www.ontheboarder.com](www.ontheboarder.com) and [www.maggianos.com](www.maggianos.com).",
                                            "description": "At Chili's Grill & Bar, fresh is happening now! Find a local restaurant to enjoy our latest fresh mex creations, world famous Baby Back Ribs, and sirloin steaks.",
                                            "card_value_config": {
                                                "increment": 1,
                                                "max_value": 4,
                                                "min_value": 2,
                                                "denominations": [
                                                    23
                                                ],
                                                "variable_load_supported": true
                                            },
                                            "redemption_configs": {
                                                "kind": "IN_RESTAURANT_ONLY",
                                                "methods": [{
                                                    "kind": "WRITE_ON_CHECK"
                                                }]
                                            },
                                            "sorted_position": 3,
                                            "categories": [{
                                                "name": "DINING_AND_DELIVERY"
                                            }],
                                            "supported_features": [
                                                "EXCHANGE_OFFER"
                                            ]
                                        }
                                    },
                                    {
                                        "type": "brands",
                                        "id": "9673a998-4bab-462d-bb6e-2a4cacef1ebf",
                                        "attributes": {
                                            "brand_name": "Brinker",
                                            "icon_url": "https://s3.amazonaws.com/raise-content/ibi/BrinkerInternational-Logo.png",
                                            "legal_terms": "You can use your eGift Card at Brinker International restaurants located in the US, Puerto Rico, Guam and internatThese restaurants include: Chili's® Grill & Bar, On The Border Mexican Grill & Cantina®, Maggiano's Little Italy® and Romano's Macaroni Grill®. Card may not be redeemed for cash, except as required by law. No service fees are charged in connection with this card. Issued by Brinker Services Corporation. For location information, visit each brands respective website: [www.chilis.com](www.chilis.com), [www.ontheborder.com](www.ontheborder.com), [www.maggianos.com](www.maggianos.com) and [www.macaronigrill.com](www.macaronigrill.com)ionally at restaurants located on US Military Bases. ",
                                            "card_value_config": {
                                                "max_value": 4,
                                                "min_value": 4,
                                                "denominations": [
                                                    4
                                                ],
                                                "variable_load_supported": false
                                            },
                                            "redemption_configs": {
                                                "kind": "IN_STORE_OR_ONLINE_ONLY",
                                                "methods": [{
                                                        "kind": "SHOW_BARCODE",
                                                        "info": "Gift cards can be redeemed at any Brinker restaurant location."
                                                    },
                                                    {
                                                        "kind": "ENTER_ONLINE"
                                                    }
                                                ]
                                            },
                                            "sorted_position": 4,
                                            "categories": [{
                                                "name": "DINING_AND_DELIVERY"
                                            }],
                                            "supported_features": [
                                                "EXCHANGE_OFFER"
                                            ]
                                        }
                                    },
                                    {
                                        "type": "brands",
                                        "id": "bf390e02-d728-406a-b6c8-ea10d1f7dce3",
                                        "attributes": {
                                            "brand_name": "Aeropostale",
                                            "icon_url": "https://s3.amazonaws.com/raise-content/ibi/Aeropostale-Logo.png",
                                            "legal_terms": "Use of card constitutes acceptance of the following terms and conditions: Card may be used up to its remaining balance to redeem for merchandise at any Aéropostale store in the US or Puerto Rico, or online at www.aeropostale.com. This card is not redeemable for cash unless required by law. Any resale or other unauthorized use of this card will render it void and subject to cancellation. Issuer not responsible for lost, stolen, or damaged cards, except as required by law. Other conditions may apply, see www.aeropostale.com for details. For card balance please call 800-832-0656 or visit your local Aéropostale store. This card is issued by Aero GC Mgmt LLC.",
                                            "description": "Shop Aeropostale for Guys & Girls Clothing. Browse the latest styles of tops, t shirts, hoodies, jeans, sweaters & more.",
                                            "card_value_config": {
                                                "max_value": 2500,
                                                "min_value": 2500,
                                                "denominations": [
                                                    2500
                                                ],
                                                "variable_load_supported": false
                                            },
                                            "redemption_configs": {
                                                "kind": "ONLINE_ONLY",
                                                "methods": [{
                                                        "kind": "ENTER_ONLINE"
                                                    },
                                                    {
                                                        "kind": "SHOW_DETAILS"
                                                    }
                                                ]
                                            },
                                            "sorted_position": 5,
                                            "categories": [{
                                                "name": "APPAREL"
                                            }],
                                            "balance_check_url": "https://www.aeropostale.com/gift-certificate-pages/gift-check-balance.html",
                                            "faceplate_url": "https://s3.amazonaws.com/raise-content/ibi/Aeropostale-Logo.png",
                                            "supported_features": [
                                                "EXCHANGE_ACCEPT"
                                            ],
                                            "exchange_config": {
                                                "accepted": {
                                                    "min_value": 500,
                                                    "max_value": 4900
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "type": "brands",
                                        "id": "d5b960d4-0fe3-44b1-9e9d-c48935929d26",
                                        "attributes": {
                                            "brand_name": "10pin Bowlings",
                                            "icon_url": "https://s3.amazonaws.com/raise-content/ibi/10PinBowlingLounge-Logo.png",
                                            "legal_terms": "test This gift card may be used just like cash toward purchases at 10pin locations. Not redeemable for cash or credit except where required by law. 10pin cannot replace or replenish the card if it is lost, stolen, or used without your authorization. To check the balance of this gift card, visit www.10pinchicago.com. This gift card has no expiration date, and no dormancy or activity fees will be charged. Gift card retains unused balance. Balance cannot be transferred or recharged. ",
                                            "description": "test Buy 10pin gift cards online at a discount from Raise.com. Get more of that crispy thin crust you love while you bowl! Craving a burger instead? Not a problem. Play a few rounds, chow down and drink to your heart’s desire at 10pin today.",
                                            "card_value_config": {
                                                "increment": 1,
                                                "max_value": 100000,
                                                "min_value": 500,
                                                "variable_load_supported": true
                                            },
                                            "redemption_configs": {
                                                "disclaimer": "Only one gift card per table or group. Not valid toward events.",
                                                "kind": "APP_ONLY",
                                                "methods": [{
                                                    "kind": "SHOW_DETAILS",
                                                    "info": "1 asd"
                                                }]
                                            },
                                            "sorted_position": 6,
                                            "categories": [{
                                                    "name": "APPAREL"
                                                },
                                                {
                                                    "name": "AUTOMOTIVE"
                                                },
                                                {
                                                    "name": "BABY_AND_KIDS"
                                                }
                                            ],
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



    it("Checking for Aeropostale brand exchange OFFER", () => {
        cy.fixture("API.json")
            .then(apidata => {
                var CryptoJS = require("crypto-js");
                var timestamp = Math.floor(Date.now() / 1000)
                var secret = apidata.Secret;
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
                            'X-Client': apidata.Client,
                            'X-Timestamp': timestamp,
                            'X-Signature': signature,
                            'BRANDS_VERSION': 'v2'

                        }


                    })
                    .then((response) => {
                        expect(response).to.have.property("status", 200),
                            expect(response.body).to.not.be.null,

                            //Walmart check
                            expect(response.body.data[5].id).to.equal("bf390e02-d728-406a-b6c8-ea10d1f7dce3"),
                            expect(response.body.data[5].attributes.brand_name).to.equal("Aeropostale"),
                            expect(response.body.data[5].attributes.supported_features[0]).to.equal("EXCHANGE_ACCEPT")













                    })

            })
    })

    it("Checking for 10pin Bowlings brand exchange ACCEPT", () => {
        cy.fixture("API.json")
            .then(apidata => {
                var CryptoJS = require("crypto-js");
                var timestamp = Math.floor(Date.now() / 1000)
                var secret = apidata.Secret;
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
                            'X-Client': apidata.Client,
                            'X-Timestamp': timestamp,
                            'X-Signature': signature,
                            'BRANDS_VERSION': 'v2'

                        }


                    })
                    .then((response) => {
                        expect(response).to.have.property("status", 200),
                            expect(response.body).to.not.be.null,

                            //Walmart check
                            expect(response.body.data[6].id).to.equal("d5b960d4-0fe3-44b1-9e9d-c48935929d26"),
                            expect(response.body.data[6].attributes.brand_name).to.equal("10pin Bowlings"),
                            expect(response.body.data[6].attributes.supported_features[0]).to.equal("EXCHANGE_OFFER")













                    })

            })
    })

})