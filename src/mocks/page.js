export default = {
    "contentTypes": [
        "article",
        "recipe",
        "slideshow",
        "video"
    ],
    "pages": [
        {
            "name": "fullWidth",
            "displayName": "Full Width",
            "icon": "",
            "default": true,
            "styles": ".layout.fullWidth {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n.layout.fullWidth .zone.zone-1 {\n  grid-column: 1 / 2;\n}\n"
        },
        {
            "name": "leftRail",
            "displayName": "Left Rail",
            "icon": "",
            "zones": 2,
            "styles": ".layout.leftRail {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n\n.layout.leftRail .zone.zone-1 {\n  grid-column: 1 / 2;\n}\n\n.layout.leftRail .zone.zone-2 {\n  grid-column: 2 / 3;\n}\n"
        },
        {
            "name": "leftRailWithSplitRow",
            "displayName": "Left Rail / Split Row",
            "icon": "",
            "zones": 5,
            "styles": ".layout.leftRailWithSplitRow {\n  display: grid;\n  grid-template-columns: 2fr 3fr 3fr;\n  grid-template-rows: auto auto auto;\n}\n\n.layout.leftRailWithSplitRow .zone.zone-1 {\n  grid-column: 1 / 2;\n  grid-row: 1 / 4;\n}\n\n.layout.leftRailWithSplitRow .zone.zone-2 {\n  grid-column: 2 / 4;\n}\n\n.layout.leftRailWithSplitRow .zone.zone-3 {\n  grid-column: 2 / 3;\n}\n\n.layout.leftRailWithSplitRow .zone.zone-4 {\n  grid-column: 3 / 4;\n}\n\n.layout.leftRailWithSplitRow .zone.zone-5 {\n  grid-column: 2 / 4;\n}\n"
        },
        {
            "name": "rightRail",
            "displayName": "Right Rail",
            "icon": "",
            "zones": 2,
            "styles": ".layout.rightRail {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n}\n\n.layout.rightRail .zone.zone-1 {\n  grid-column: 1 / 2;\n}\n\n.layout.rightRail .zone.zone-2 {\n  grid-column: 2 / 3;\n}\n"
        },
        {
            "name": "rightRailTabbed",
            "displayName": "Right Rail Tabbed",
            "icon": "",
            "zones": 2,
            "styles": ".layout.rightRailTabbed {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n}\n\n.layout.rightRailTabbed .zone.zone-1 {\n  grid-column: 1 / 2;\n}\n\n.layout.rightRailTabbed .zone.zone-2 {\n  grid-column: 2 / 3;\n}\n"
        },
        {
            "name": "rightRailWithSplitRow",
            "displayName": "Right Rail / Split Row",
            "icon": "",
            "zones": 5,
            "styles": ".layout.rightRailWithSplitRow {\n  display: grid;\n  grid-template-columns: 3fr 3fr 2fr;\n  grid-template-rows: auto auto auto;\n}\n\n.layout.rightRailWithSplitRow .zone.zone-1 {\n  grid-column: 1 / 3;\n}\n\n.layout.rightRailWithSplitRow .zone.zone-2 {\n  grid-column: 1 / 2;\n}\n\n.layout.rightRailWithSplitRow .zone.zone-3 {\n  grid-column: 2 / 3;\n}\n\n.layout.rightRailWithSplitRow .zone.zone-4 {\n  grid-column: 1 / 3;\n}\n\n.layout.rightRailWithSplitRow .zone.zone-5 {\n  grid-column: 3 / 4;\n  grid-row: 1 / 4;\n}\n"
        }
    ],
    "packages": [
        {
            "type": "hero3secondary",
            "displayName": "Hero + 3 Secondary",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 1,
                    "min": 1,
                    "max": 1,
                    "related": {
                        "min": 0,
                        "max": 4,
                        "default": 0
                    }
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                },
                {
                    "type": "checkbox",
                    "field": "showDek",
                    "displayName": "Show Dek"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek",
                    "toggleDisplay": {
                        "allow": true
                    }
                },
                {
                    "field": "_teaseImage",
                    "toggleDisplay": {
                        "allow": true,
                        "defaultValue": true
                    }
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                }
            ]
        },
        {
            "type": "leadRectangle",
            "displayName": "1up Lead (TODAY/THINK)",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 1,
                    "min": 1,
                    "max": 1
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek"
                },
                {
                    "field": "_teaseImage"
                }
            ]
        },
        {
            "type": "twoUp",
            "displayName": "2up",
            "default": true,
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 2,
                    "min": 2,
                    "max": 2,
                    "related": {
                        "min": 0,
                        "max": 2,
                        "default": 0
                    }
                },
                {
                    "type": "text",
                    "field": "title",
                    "displayName": "Package Title",
                    "maxLength": 45
                },
                {
                    "type": "text",
                    "field": "seeAllText",
                    "displayName": "See All Text",
                    "maxLength": 25,
                    "defaultValue": "See All"
                },
                {
                    "type": "text",
                    "field": "seeAllUrl",
                    "displayName": "See All URL"
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                },
                {
                    "type": "checkbox",
                    "field": "showDek",
                    "displayName": "Show Dek"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek",
                    "toggleDisplay": {
                        "allow": true
                    }
                },
                {
                    "field": "_teaseImage",
                    "toggleDisplay": {
                        "allow": true,
                        "defaultValue": true
                    }
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                }
            ]
        },
        {
            "type": "threeFeatured",
            "displayName": "3 Featured Lead",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 3,
                    "min": 3,
                    "max": 3
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                },
                {
                    "type": "checkbox",
                    "field": "showDek",
                    "displayName": "Show Dek"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek",
                    "toggleDisplay": {
                        "allow": true,
                        "indexes": [
                            1,
                            2
                        ]
                    }
                },
                {
                    "field": "_teaseImage"
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author",
                    "indexes": [
                        1,
                        2
                    ]
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author",
                    "indexes": [
                        1,
                        2
                    ]
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp",
                    "indexes": [
                        1,
                        2
                    ]
                }
            ]
        },
        {
            "type": "threeFeaturedPlusList",
            "displayName": "3 Featured Lead + List",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 8,
                    "min": 8,
                    "max": 8
                },
                {
                    "type": "text",
                    "field": "listTitlePrimary",
                    "displayName": "List Title (Primary)",
                    "maxLength": 15
                },
                {
                    "type": "text",
                    "field": "listTitleSecondary",
                    "displayName": "List Title (Secondary)",
                    "maxLength": 15
                },
                {
                    "type": "text",
                    "field": "listSubtitle",
                    "displayName": "List Subtitle",
                    "maxLength": 45
                },
                {
                    "type": "textarea",
                    "field": "listDescription",
                    "displayName": "List Description",
                    "maxLength": 155
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                },
                {
                    "type": "checkbox",
                    "field": "showDek",
                    "displayName": "Show Dek"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek",
                    "toggleDisplay": {
                        "allow": true,
                        "indexes": [
                            0,
                            1,
                            2
                        ]
                    }
                },
                {
                    "field": "_teaseImage",
                    "toggleDisplay": {
                        "allow": true,
                        "defaultValue": true,
                        "indexes": [
                            3,
                            4,
                            5,
                            6,
                            7
                        ]
                    }
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author",
                    "defaultValue": true,
                    "indexes": [
                        0
                    ]
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author",
                    "indexes": [
                        1,
                        2
                    ]
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author",
                    "indexes": [
                        0,
                        1,
                        2
                    ]
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp",
                    "defaultValue": true,
                    "indexes": [
                        0
                    ]
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp",
                    "indexes": [
                        1,
                        2
                    ]
                }
            ]
        },
        {
            "type": "threeUp",
            "displayName": "3up",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 3,
                    "min": 3,
                    "max": 3,
                    "related": {
                        "min": 0,
                        "max": 2,
                        "default": 0
                    }
                },
                {
                    "type": "text",
                    "field": "title",
                    "displayName": "Package Title",
                    "maxLength": 45
                },
                {
                    "type": "text",
                    "field": "seeAllText",
                    "displayName": "See All Text",
                    "maxLength": 25,
                    "defaultValue": "See All"
                },
                {
                    "type": "text",
                    "field": "seeAllUrl",
                    "displayName": "See All URL"
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                },
                {
                    "type": "checkbox",
                    "field": "showDek",
                    "displayName": "Show Dek"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek",
                    "toggleDisplay": {
                        "allow": true
                    }
                },
                {
                    "field": "_teaseImage",
                    "toggleDisplay": {
                        "allow": true,
                        "defaultValue": true
                    }
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                }
            ]
        },
        {
            "type": "fourUp",
            "displayName": "4up",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 4,
                    "min": 4,
                    "max": 4,
                    "related": {
                        "min": 0,
                        "max": 2,
                        "default": 0
                    }
                },
                {
                    "type": "text",
                    "field": "title",
                    "displayName": "Package Title",
                    "maxLength": 45
                },
                {
                    "type": "text",
                    "field": "seeAllText",
                    "displayName": "See All Text",
                    "maxLength": 25,
                    "defaultValue": "See All"
                },
                {
                    "type": "text",
                    "field": "seeAllUrl",
                    "displayName": "See All URL"
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                },
                {
                    "type": "checkbox",
                    "field": "showDek",
                    "displayName": "Show Dek"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek",
                    "toggleDisplay": {
                        "allow": true
                    }
                },
                {
                    "field": "_teaseImage",
                    "toggleDisplay": {
                        "allow": true,
                        "defaultValue": true
                    }
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                }
            ]
        },
        {
            "type": "sevenUp",
            "displayName": "7up",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 7,
                    "min": 7,
                    "max": 7,
                    "related": {
                        "min": 0,
                        "max": 2,
                        "default": 0
                    }
                },
                {
                    "type": "text",
                    "field": "title",
                    "displayName": "Package Title",
                    "maxLength": 45
                },
                {
                    "type": "text",
                    "field": "seeAllText",
                    "displayName": "See All Text",
                    "maxLength": 25,
                    "defaultValue": "See All"
                },
                {
                    "type": "text",
                    "field": "seeAllUrl",
                    "displayName": "See All URL"
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                },
                {
                    "type": "checkbox",
                    "field": "showDek",
                    "displayName": "Show Dek"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek",
                    "toggleDisplay": {
                        "allow": true
                    }
                },
                {
                    "field": "_teaseImage",
                    "toggleDisplay": {
                        "allow": true,
                        "defaultValue": true
                    }
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                }
            ]
        },
        {
            "type": "ad",
            "displayName": "Ad",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                }
            ]
        },
        {
            "type": "bacon",
            "displayName": "Bacon",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 3,
                    "min": 3,
                    "max": 20
                },
                {
                    "type": "text",
                    "field": "title",
                    "displayName": "Package Title",
                    "maxLength": 45
                },
                {
                    "type": "text",
                    "field": "description",
                    "displayName": "Description",
                    "maxLength": 125
                },
                {
                    "type": "text",
                    "field": "seeAllText",
                    "defaultValue": "See All",
                    "displayName": "See All Text",
                    "maxLength": 25
                },
                {
                    "type": "text",
                    "field": "seeAllUrl",
                    "displayName": "See All URL"
                },
                {
                    "type": "checkbox",
                    "field": "showEyebrow",
                    "displayName": "Show Eyebrow",
                    "defaultValue": true
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek"
                },
                {
                    "field": "_teaseImage"
                }
            ],
            "subTypes": [
                {
                    "type": "twoOneSmall",
                    "displayName": "2:1 Small",
                    "default": true
                },
                {
                    "type": "twoOneLarge",
                    "displayName": "2:1 Large"
                },
                {
                    "type": "twoThreePortrait",
                    "displayName": "2:3 Portrait",
                    "packageFields": [
                        {
                            "field": "_name"
                        },
                        {
                            "field": "_type"
                        },
                        {
                            "field": "_autofill"
                        },
                        {
                            "field": "_items",
                            "default": 3,
                            "min": 3,
                            "max": 20
                        },
                        {
                            "type": "text",
                            "field": "title",
                            "displayName": "Package Title",
                            "maxLength": 45
                        },
                        {
                            "type": "text",
                            "field": "description",
                            "displayName": "Description",
                            "maxLength": 220
                        },
                        {
                            "type": "text",
                            "field": "seeAllText",
                            "defaultValue": "See All",
                            "displayName": "See All Text",
                            "maxLength": 25
                        },
                        {
                            "type": "text",
                            "field": "seeAllUrl",
                            "displayName": "See All URL"
                        }
                    ]
                }
            ]
        },
        {
            "type": "bigHeadline",
            "displayName": "Big Headline",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 1,
                    "min": 1,
                    "max": 1
                },
                {
                    "type": "checkbox",
                    "field": "showTeaseImage",
                    "displayName": "Show Art"
                },
                {
                    "type": "checkbox",
                    "field": "showDek",
                    "displayName": "Show Dek"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp",
                    "defaultValue": true
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek"
                },
                {
                    "field": "_teaseImage"
                }
            ]
        },
        {
            "type": "bigStoryTakeover",
            "displayName": "Big Story Takeover",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 1,
                    "min": 1,
                    "max": 1,
                    "related": {
                        "min": 0,
                        "max": 4,
                        "default": 0
                    }
                },
                {
                    "type": "text",
                    "field": "sectionTitle",
                    "displayName": "Section Title",
                    "maxLength": 45
                },
                {
                    "type": "textarea",
                    "field": "listItems",
                    "displayName": "List Items (separate with newline)",
                    "maxLength": 1000
                },
                {
                    "type": "text",
                    "field": "buttonText",
                    "displayName": "See All Text",
                    "maxLength": 25,
                    "defaultValue": "See All"
                },
                {
                    "type": "text",
                    "field": "updatesUrl",
                    "displayName": "See All URL"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek"
                },
                {
                    "field": "_teaseImage"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp",
                    "defaultValue": true
                }
            ]
        },
        {
            "type": "collectionBillboard",
            "displayName": "Collection Billboard",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 5,
                    "min": 5,
                    "max": 5
                },
                {
                    "type": "text",
                    "field": "collectionName",
                    "displayName": "Collection Name",
                    "maxLength": 15
                },
                {
                    "type": "textarea",
                    "field": "collectionDescription",
                    "displayName": "Collection Description",
                    "maxLength": 45
                },
                {
                    "type": "text",
                    "field": "collectionImage",
                    "displayName": "Collection Image"
                },
                {
                    "type": "text",
                    "field": "collectionUrl",
                    "displayName": "Collection URL"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek"
                },
                {
                    "field": "_teaseImage"
                }
            ]
        },
        {
            "type": "collectionsLead",
            "displayName": "Collection Lead",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "type": "text",
                    "field": "title",
                    "displayName": "Package Title",
                    "maxLength": 45
                },
                {
                    "type": "textarea",
                    "field": "description",
                    "displayName": "Description",
                    "maxLength": 200
                },
                {
                    "type": "text",
                    "field": "imageUrl",
                    "displayName": "Background Image URL"
                },
                {
                    "type": "text",
                    "field": "logoUrl",
                    "displayName": "Logo URL"
                },
                {
                    "type": "text",
                    "field": "updatesButtonUrl",
                    "displayName": "Updates Button URL"
                },
                {
                    "type": "text",
                    "field": "updatesButtonText",
                    "displayName": "Updates Button Text",
                    "defaultValue": "Sign Up For Updates"
                },
                {
                    "type": "list",
                    "field": "navigation",
                    "displayName": "Navigation",
                    "items": {
                        "min": 0,
                        "max": 6,
                        "metadata": [
                            {
                                "type": "text",
                                "field": "linkTitle",
                                "displayName": "Link Title",
                                "maxLength": 45
                            },
                            {
                                "type": "text",
                                "field": "linkUrl",
                                "displayName": "Link URL"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "type": "collectionPoster",
            "displayName": "Collection Poster (NBC News)",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 3,
                    "min": 3,
                    "max": 3
                },
                {
                    "type": "text",
                    "field": "collectionName",
                    "displayName": "Collection Name",
                    "maxLength": 15
                },
                {
                    "type": "textarea",
                    "field": "collectionDescription",
                    "displayName": "Collection Description",
                    "maxLength": 45
                },
                {
                    "type": "text",
                    "field": "collectionImage",
                    "displayName": "Collection Image"
                },
                {
                    "type": "text",
                    "field": "collectionUrl",
                    "displayName": "Collection URL"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek"
                },
                {
                    "field": "_teaseImage"
                }
            ]
        },
        {
            "type": "collectionTitle",
            "displayName": "Collection Title",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "type": "text",
                    "field": "title",
                    "displayName": "Package Title",
                    "maxLength": 20,
                    "required": true
                },
                {
                    "type": "textarea",
                    "field": "description",
                    "displayName": "Description",
                    "maxLength": 120
                },
                {
                    "type": "text",
                    "field": "seeAllUrl",
                    "displayName": "See All URL"
                },
                {
                    "type": "text",
                    "field": "seeAllText",
                    "displayName": "See All Text"
                }
            ]
        },
        {
            "type": "embed",
            "displayName": "Embed",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "type": "text",
                    "field": "url",
                    "displayName": "URL"
                }
            ]
        },
        {
            "type": "localNews",
            "displayName": "Local News (NBC News)",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                }
            ]
        },
        {
            "type": "magazineLead",
            "displayName": "Magazine Lead (TODAY)",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 4,
                    "min": 4,
                    "max": 4
                },
                {
                    "type": "text",
                    "field": "title",
                    "displayName": "Package Title",
                    "maxLength": 20
                },
                {
                    "type": "text",
                    "field": "imageUrl",
                    "displayName": "Background Image URL"
                },
                {
                    "type": "text",
                    "field": "seeAllText",
                    "displayName": "See All Text",
                    "maxLength": 25,
                    "defaultValue": "See All From The Show"
                },
                {
                    "type": "text",
                    "field": "seeAllUrl",
                    "displayName": "See All URL"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek"
                },
                {
                    "field": "_teaseImage",
                    "toggleDisplay": {
                        "allow": true,
                        "defaultValue": true
                    }
                }
            ]
        },
        {
            "type": "mosaic",
            "displayName": "Mosaic",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 5,
                    "min": 5,
                    "max": 5,
                    "related": {
                        "min": 0,
                        "max": 2,
                        "default": 0
                    }
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                },
                {
                    "type": "checkbox",
                    "field": "showDek",
                    "displayName": "Show Dek"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek",
                    "toggleDisplay": {
                        "allow": true
                    }
                },
                {
                    "field": "_teaseImage",
                    "toggleDisplay": {
                        "allow": true,
                        "defaultValue": true
                    }
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                }
            ]
        },
        {
            "type": "pancake",
            "displayName": "Pancake",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 5,
                    "min": 5,
                    "max": 8
                },
                {
                    "type": "text",
                    "field": "title",
                    "displayName": "Package Title",
                    "maxLength": 45
                },
                {
                    "type": "text",
                    "field": "titleUrl",
                    "displayName": "Package Title URL"
                },
                {
                    "type": "checkbox",
                    "field": "showTeaseImage",
                    "displayName": "Show Art",
                    "defaultValue": true
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek"
                },
                {
                    "field": "_teaseImage",
                    "toggleDisplay": {
                        "allow": true,
                        "defaultValue": true
                    }
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                }
            ],
            "subTypes": [
                {
                    "type": "keyUpdates",
                    "displayName": "Key Updates",
                    "packageFields": [
                        {
                            "field": "_name"
                        },
                        {
                            "field": "_type"
                        },
                        {
                            "field": "_autofill"
                        },
                        {
                            "field": "_items",
                            "default": 2,
                            "min": 2,
                            "max": 4
                        },
                        {
                            "type": "text",
                            "field": "title",
                            "displayName": "Package Title",
                            "maxLength": 45
                        },
                        {
                            "type": "text",
                            "field": "titleUrl",
                            "displayName": "Package Title URL"
                        },
                        {
                            "type": "text",
                            "field": "sectionTitle",
                            "displayName": "Section Title",
                            "maxLength": 45
                        },
                        {
                            "type": "textarea",
                            "field": "listItems",
                            "displayName": "List Items (separate with newline)",
                            "maxLength": 300
                        },
                        {
                            "type": "text",
                            "field": "updatesText",
                            "displayName": "See All Text",
                            "maxLength": 25,
                            "defaultValue": "See All"
                        },
                        {
                            "type": "text",
                            "field": "updatesUrl",
                            "displayName": "See All URL"
                        },
                        {
                            "type": "checkbox",
                            "field": "showTeaseImage",
                            "displayName": "Show Art",
                            "defaultValue": true
                        },
                        {
                            "type": "checkbox",
                            "field": "showTimestamp",
                            "displayName": "Show Timestamp"
                        }
                    ]
                }
            ]
        },
        {
            "type": "partnerRecirc",
            "displayName": "Partner Recirc",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                }
            ]
        },
        {
            "type": "playmaker",
            "displayName": "Playmaker",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "type": "text",
                    "field": "feedSource",
                    "displayName": "Feed Source URL"
                },
                {
                    "type": "text",
                    "field": "title",
                    "displayName": "Title",
                    "maxLength": 45
                },
                {
                    "type": "textarea",
                    "field": "description",
                    "displayName": "Description",
                    "maxLength": 200
                }
            ]
        },
        {
            "type": "leadSectionFront",
            "displayName": "Section Lead",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 4,
                    "min": 4,
                    "max": 4,
                    "related": {
                        "min": 0,
                        "max": 2,
                        "default": 0
                    }
                },
                {
                    "type": "text",
                    "field": "title",
                    "displayName": "Package Title",
                    "maxLength": 45,
                    "required": true
                },
                {
                    "type": "text",
                    "field": "description",
                    "displayName": "Description",
                    "maxLength": 200
                },
                {
                    "type": "text",
                    "field": "imageUrl",
                    "displayName": "Background Image URL"
                },
                {
                    "type": "list",
                    "field": "navigation",
                    "displayName": "Navigation",
                    "items": {
                        "min": 0,
                        "max": 5,
                        "metadata": [
                            {
                                "type": "text",
                                "field": "linkTitle",
                                "displayName": "Link Title",
                                "maxLength": 45
                            },
                            {
                                "type": "text",
                                "field": "linkUrl",
                                "displayName": "Link URL"
                            }
                        ]
                    }
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek"
                },
                {
                    "field": "_teaseImage",
                    "toggleDisplay": {
                        "allow": true,
                        "defaultValue": true
                    }
                },
                {
                    "type": "checkbox",
                    "field": "showFeaturedAuthor",
                    "displayName": "Show Featured Author"
                }
            ]
        },
        {
            "type": "showLead",
            "displayName": "Show Lead",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "type": "text",
                    "field": "title",
                    "displayName": "Show Title",
                    "maxLength": 45
                },
                {
                    "type": "text",
                    "field": "logoUrl",
                    "displayName": "Show Logo URL"
                },
                {
                    "type": "textarea",
                    "field": "description",
                    "displayName": "Show Description",
                    "maxLength": 200
                },
                {
                    "type": "text",
                    "field": "imageUrl",
                    "displayName": "Background Image URL"
                },
                {
                    "type": "list",
                    "field": "navigation",
                    "displayName": "Navigation",
                    "items": {
                        "min": 0,
                        "max": 5,
                        "metadata": [
                            {
                                "type": "text",
                                "field": "linkTitle",
                                "displayName": "Link Title",
                                "maxLength": 45
                            },
                            {
                                "type": "text",
                                "field": "linkUrl",
                                "displayName": "Link URL"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "type": "promo3Panel",
            "displayName": "Show Promo",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 3,
                    "min": 3,
                    "max": 3
                },
                {
                    "type": "checkbox",
                    "field": "showTeaseImage",
                    "displayName": "Show Art",
                    "defaultValue": true
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek"
                },
                {
                    "field": "_teaseImage",
                    "toggleDisplay": {
                        "allow": true,
                        "defaultValue": true
                    }
                },
                {
                    "type": "text",
                    "field": "ctaUrl",
                    "displayName": "CTA Button URL"
                },
                {
                    "type": "text",
                    "field": "ctaText",
                    "displayName": "CTA Button Text"
                },
                {
                    "type": "checkbox",
                    "field": "isNewsletter",
                    "displayName": "Is Newsletter Panel"
                }
            ]
        },
        {
            "type": "standardLead",
            "displayName": "Standard Lead",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 1,
                    "min": 1,
                    "max": 1,
                    "related": {
                        "min": 0,
                        "max": 4,
                        "default": 0
                    }
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek"
                },
                {
                    "field": "_teaseImage",
                    "toggleDisplay": {
                        "allow": true,
                        "defaultValue": true
                    }
                }
            ]
        },
        {
            "type": "straightUp",
            "displayName": "Straight Up",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 1,
                    "min": 1,
                    "max": 1,
                    "related": {
                        "min": 0,
                        "max": 4,
                        "default": 0
                    }
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek"
                },
                {
                    "field": "_teaseImage",
                    "toggleDisplay": {
                        "allow": true,
                        "defaultValue": true
                    }
                },
                {
                    "type": "checkbox",
                    "field": "showAuthor",
                    "displayName": "Show Author"
                },
                {
                    "type": "checkbox",
                    "field": "showTimestamp",
                    "displayName": "Show Timestamp"
                }
            ]
        },
        {
            "type": "teaseList",
            "displayName": "Tease List",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 20,
                    "min": 20,
                    "max": 20
                },
                {
                    "type": "text",
                    "field": "title",
                    "displayName": "Package Title",
                    "maxLength": 45
                },
                {
                    "type": "text",
                    "field": "seeAllUrl",
                    "displayName": "See All URL"
                },
                {
                    "type": "checkbox",
                    "field": "showTeaseImage",
                    "displayName": "Show Art"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_teaseImage",
                    "toggleDisplay": {
                        "allow": true
                    }
                }
            ],
            "subTypes": []
        },
        {
            "type": "videoPkg",
            "displayName": "Video",
            "contentTypes": [
                "video"
            ],
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 5,
                    "min": 5,
                    "max": 5
                },
                {
                    "type": "text",
                    "field": "title",
                    "displayName": "Package Title",
                    "maxLength": 45
                },
                {
                    "type": "text",
                    "field": "seeAllText",
                    "displayName": "See All Text",
                    "maxLength": 25
                },
                {
                    "type": "text",
                    "field": "seeAllUrl",
                    "displayName": "See All URL"
                }
            ],
            "contentFields": [
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek"
                },
                {
                    "field": "_teaseImage"
                }
            ]
        },
        {
            "type": "waffle",
            "displayName": "Waffle",
            "packageFields": [
                {
                    "field": "_name"
                },
                {
                    "field": "_type"
                },
                {
                    "type": "select",
                    "field": "badge",
                    "displayName": "Badge",
                    "options": [
                        {
                            "value": "dates",
                            "label": "Dates"
                        },
                        {
                            "value": "letters",
                            "label": "Letters"
                        },
                        {
                            "value": "numbersAsc",
                            "label": "Numbers - Ascending"
                        },
                        {
                            "value": "numbersDesc",
                            "label": "Numbers - Descending"
                        }
                    ]
                },
                {
                    "type": "date",
                    "field": "badgeStartDate",
                    "displayName": "Badge Start Date (if using Dates)"
                },
                {
                    "field": "_autofill"
                },
                {
                    "field": "_items",
                    "default": 50,
                    "min": 3,
                    "max": 150
                },
                {
                    "type": "text",
                    "field": "title",
                    "displayName": "Package Title",
                    "maxLength": 45,
                    "required": true
                },
                {
                    "type": "text",
                    "field": "description",
                    "displayName": "Description",
                    "maxLength": 200
                },
                {
                    "type": "text",
                    "field": "shortDescription",
                    "displayName": "Short Description (used for mobile)",
                    "maxLength": 60
                },
                {
                    "type": "text",
                    "field": "attribution",
                    "displayName": "Attribution",
                    "maxLength": 60
                },
                {
                    "type": "text",
                    "field": "backgroundImageUrl",
                    "displayName": "Background Image URL"
                },
                {
                    "type": "checkbox",
                    "field": "showEyebrow",
                    "displayName": "Show Eyebrow",
                    "defaultValue": true
                },
                {
                    "type": "checkbox",
                    "field": "showDek",
                    "displayName": "Show Dek"
                }
            ],
            "contentFields": [
                {
                    "type": "date",
                    "field": "badgeDate",
                    "displayName": "Badge Date (if using Dates)"
                },
                {
                    "field": "_eyebrow"
                },
                {
                    "field": "_headline"
                },
                {
                    "field": "_dek",
                    "toggleDisplay": {
                        "allow": true
                    }
                },
                {
                    "type": "textarea",
                    "field": "moreInfoText",
                    "displayName": "More Info",
                    "maxLength": 300
                },
                {
                    "field": "_teaseImage",
                    "toggleDisplay": {
                        "allow": true,
                        "defaultValue": true
                    }
                }
            ],
            "subTypes": [
                {
                    "type": "giftGuideWaffle",
                    "displayName": "Gift Guide"
                },
                {
                    "type": "autofilledProductWaffle",
                    "displayName": "Product",
                    "contentTypes": [
                        "product"
                    ],
                    "packageFields": [
                        {
                            "field": "_name"
                        },
                        {
                            "field": "_type"
                        },
                        {
                            "field": "_autofill"
                        },
                        {
                            "field": "_items",
                            "default": 50,
                            "min": 3,
                            "max": 150
                        },
                        {
                            "type": "text",
                            "field": "title",
                            "displayName": "Package Title",
                            "maxLength": 45
                        },
                        {
                            "type": "text",
                            "field": "description",
                            "displayName": "Description",
                            "maxLength": 200
                        },
                        {
                            "type": "text",
                            "field": "shortDescription",
                            "displayName": "Short Description (used for mobile)",
                            "maxLength": 60
                        },
                        {
                            "type": "text",
                            "field": "attribution",
                            "displayName": "Attribution",
                            "maxLength": 60
                        },
                        {
                            "type": "text",
                            "field": "backgroundImageUrl",
                            "displayName": "Background Image URL"
                        }
                    ],
                    "contentFields": [
                        {
                            "field": "_headline"
                        },
                        {
                            "field": "_dek"
                        },
                        {
                            "field": "_teaseImage"
                        }
                    ]
                },
                {
                    "type": "productWaffle",
                    "displayName": "Gift Finder",
                    "contentTypes": [
                        "product"
                    ],
                    "packageFields": [
                        {
                            "field": "_name"
                        },
                        {
                            "field": "_type"
                        },
                        {
                            "field": "_queryData"
                        },
                        {
                            "type": "text",
                            "field": "title",
                            "displayName": "Package Title",
                            "maxLength": 45
                        },
                        {
                            "type": "text",
                            "field": "description",
                            "displayName": "Description",
                            "maxLength": 200
                        },
                        {
                            "type": "text",
                            "field": "shortDescription",
                            "displayName": "Short Description (used for mobile)",
                            "maxLength": 60
                        },
                        {
                            "type": "text",
                            "field": "attribution",
                            "displayName": "Attribution",
                            "maxLength": 60
                        },
                        {
                            "type": "text",
                            "field": "backgroundImageUrl",
                            "displayName": "Background Image URL"
                        },
                        {
                            "type": "list",
                            "field": "recipientFilter",
                            "displayName": "Who Filter",
                            "items": {
                                "min": 0,
                                "max": 100,
                                "metadata": [
                                    {
                                        "type": "text",
                                        "field": "label",
                                        "displayName": "Filter Label",
                                        "maxLength": 20
                                    },
                                    {
                                        "type": "taxonomy",
                                        "field": "taxonomy",
                                        "displayName": "Filter Taxonomy"
                                    }
                                ]
                            }
                        },
                        {
                            "type": "list",
                            "field": "interestsFilter",
                            "displayName": "Interests Filter",
                            "items": {
                                "min": 0,
                                "max": 100,
                                "metadata": [
                                    {
                                        "type": "text",
                                        "field": "label",
                                        "displayName": "Filter Label",
                                        "maxLength": 20
                                    },
                                    {
                                        "type": "taxonomy",
                                        "field": "taxonomy",
                                        "displayName": "Filter Taxonomy"
                                    }
                                ]
                            }
                        },
                        {
                            "type": "list",
                            "field": "priceFilter",
                            "displayName": "Price Filter",
                            "items": {
                                "min": 0,
                                "max": 100,
                                "metadata": [
                                    {
                                        "type": "text",
                                        "field": "label",
                                        "displayName": "Filter Label",
                                        "maxLength": 20
                                    },
                                    {
                                        "type": "currency",
                                        "field": "min",
                                        "displayName": "Minimum Price"
                                    },
                                    {
                                        "type": "currency",
                                        "field": "max",
                                        "displayName": "Maximum Price"
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "pageTypes": [
        {
            "name": "cover",
            "displayName": "Cover",
            "templates": []
        },
        {
            "name": "sectionFront",
            "displayName": "Section Front",
            "templates": []
        },
        {
            "name": "collectionPage",
            "displayName": "Collection Page",
            "templates": []
        },
        {
            "name": "showPage",
            "displayName": "Show Page",
            "templates": []
        },
        {
            "name": "legacyPage",
            "displayName": "Legacy Page",
            "templates": []
        },
        {
            "name": "wafflePage",
            "displayName": "Waffle Page",
            "templates": []
        },
        {
            "name": "entityPage",
            "displayName": "Entity Page",
            "templates": []
        },
        {
            "name": "sponsoredContent",
            "displayName": "Sponsored Content",
            "templates": []
        }
    ],
    "preview": {
        "controls": [
            {
                "name": "width",
                "displayName": "Screen width",
                "defaultValue": "100%",
                "options": [
                    {
                        "label": "Mobile",
                        "value": "320px"
                    },
                    {
                        "label": "Tablet",
                        "value": "758px"
                    },
                    {
                        "label": "Laptop",
                        "value": "1000px"
                    },
                    {
                        "label": "Desktop",
                        "value": "1240px"
                    },
                    {
                        "label": "Flexible",
                        "value": "100%"
                    }
                ]
            }
        ]
    },
    "templates": [
        {
            "name": "rails",
            "displayName": "Rails",
            "default": true,
            "layouts": [
                "fullWidth",
                "leftRail",
                "rightRail",
                "fullWidth",
                "leftRail",
                "rightRail",
                "fullWidth",
                "leftRail",
                "rightRail",
                "fullWidth"
            ]
        },
        {
            "name": "single",
            "displayName": "Single",
            "layouts": [
                "fullWidth"
            ]
        }
    ]
}






