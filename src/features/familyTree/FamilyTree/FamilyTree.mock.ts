import {FamilyNode} from "./FamilyTree.model";

export const GordeevaMockData: FamilyNode = {
    "name": "Павел Матора",
    "description": "1850 c. Горбунки",
    "children": [
        {
            "name": "Илья",
            "options": {
                "expandable": true,
                "expanded": false
            }
        },
        {
            "name": "Григорий"
        },
        {
            "name": "Егор"
        },
        {
            "name": "Борис",
            "children": [
                {
                    "name": "Мария"
                },
                {
                    "name": "Фрося"
                },
                {
                    "name": "Василий"
                },
                {
                    "name": "Иван"
                },
                {
                    "name": "Грегорий",
                    "description": "1876-1918",
                    "secondParent": {
                        "name": "Анна Ильинична Салазко",
                        "description": "1880-1918"
                    },
                    "children": [
                        {
                            "name": "Наталья",
                            secondParent: {
                                name: "Александр Чичаевы",
                                description: "1899-1981"
                            },
                            "children": [
                                {
                                    "name": "Зинаида",
                                    description: "1922-2001 Самара",
                                    secondParent: {
                                        name: "Михаил Борисовы"
                                    },
                                    children: [
                                        {
                                            name: "Татьяна",
                                            description: "1955",
                                            secondParent: {
                                                name: "Александр Остроуховы"
                                            },
                                            children: [
                                                {
                                                    name: "Александра",
                                                    description: "1980"
                                                },
                                                {
                                                    name: "Наталья",
                                                    description: "1983"
                                                }, {
                                                    name: "Мария",
                                                    description: "1997"
                                                }
                                            ]
                                        }
                                    ]

                                },
                                {
                                    "name": "Александра",
                                    description: "1923-2001 Самара",
                                    secondParent: {
                                        name: "Николай Федоровы"
                                    },
                                    children: [
                                        {
                                            name: "Андрей",
                                            description: "1961 Самара"
                                        }
                                    ]
                                },
                                {
                                    name: "Галина"
                                },
                                {
                                    name: "Геннадий"
                                },
                                {
                                    name: "Вячеслав"
                                },
                                {
                                    name: "Александр"
                                },
                                {
                                    name: "Октябрина",
                                    description: "1938 Самара",
                                    secondParent: {
                                        name: "Александр Гордеевы"
                                    },
                                    children: [
                                        {
                                            name: "Евгения",
                                            description: "1948",
                                            secondParent: {
                                                name: "Владимир Клементьевы"
                                            },
                                            children: [{
                                                name: "Мари",
                                                description: "1992"
                                            }, {
                                                name: "Анастасия",
                                                description: "1992"
                                            }]
                                        },
                                        {
                                            name: "Галина",
                                            description: "1969",
                                            secondParent: {
                                                name: "Дмитрий Головы"
                                            }, children: [{
                                                name: "Дарья",
                                                description: "1998"
                                            }, {
                                                name: "Василий",
                                                description: "2011"
                                            }]
                                        }
                                    ]
                                },
                                {name: "Лидия"}
                            ]
                        },
                        {
                            "name": "Дмитрий",
                            description: "1901-1943"
                        },
                        {
                            "name": "Ефросинья",
                            secondParent: {
                                name: "Василий Яковлевы",
                                description: "1903-1981"
                            }
                        },
                        {
                            "name": "Александр",
                            secondParent: {
                                name: "Софья Моторовы",
                                description: "1904-1979"
                            }
                        },
                        {
                            "name": "Пелагея",
                            secondParent: {
                                name: "Ануфрий Рогоза"
                            },
                            options: {
                                expandable: true,
                                expanded: false
                            }
                        },
                        {
                            "name": "Екатерина",
                            description: "1909-1945"
                        },
                        {
                            "name": "Елена",
                            secondParent: {
                                name: "Иван Андрасюк",
                                description: "1912-1984"
                            }
                        },
                        {
                            "name": "Евгения",
                            secondParent: {
                                name: "Леонид Матора",
                                description: "1912-1984"
                            }
                        },
                        {
                            "name": "Никифор",
                            description: "1917-1998",
                            secondParent: {
                                name: "Нина Матора",
                                description: "1918-2004"
                            },
                            options: {
                                expandable: true,
                                expanded: false
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "Петр",
            "options": {
                "expandable": true,
                "expanded": false
            }
        }
    ]
}