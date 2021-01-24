import {FamilyNode} from "../models/FamilyNode.model";


let id = 0;

export const GordeevaMockData: FamilyNode = {
    id: `${id++}`,
    "name": "Павел Матора",
    "description": "1850 c. Горбунки",
    "children": [
        {
            id: `${id++}`,
            "name": "Илья",
            "options": {
                "expandable": true,
                "expanded": false
            },
            children: [{
                id: `${id++}`,

                "name": "Григорий"
            },
                {
                    id: `${id++}`,

                    "name": "Егор"
                }]
        },
        {
            id: `${id++}`,
            "name": "Григорий"
        },
        {
            id: `${id++}`,
            "name": "Егор"
        },
        {
            id: `${id++}`,
            "name": "Борис",
            options: {
                expandable: true
            },
            "children": [
                {
                    id: `${id++}`,

                    "name": "Мария"
                },
                {
                    id: `${id++}`,

                    "name": "Фрося"
                },
                {
                    id: `${id++}`,

                    "name": "Василий"
                },
                {
                    id: `${id++}`,

                    "name": "Иван"
                },
                {
                    id: `${id++}`,

                    "name": "Грегорий",
                    "description": "1876-1918",
                    "secondParent": {
                        "name": "Анна Ильинична Салазко",
                        "description": "1880-1918"
                    },
                    "children": [
                        {
                            id: `${id++}`,

                            "name": "Наталья",
                            secondParent: {
                                name: "Александр Чичаевы",
                                description: "1899-1981"
                            },
                            "children": [
                                {
                                    id: `${id++}`,

                                    "name": "Зинаида",
                                    description: "1922-2001 Самара",
                                    secondParent: {
                                        name: "Михаил Борисовы"
                                    },
                                    children: [
                                        {
                                            id: `${id++}`,

                                            name: "Татьяна",
                                            description: "1955",
                                            secondParent: {
                                                name: "Александр Остроуховы"
                                            },
                                            children: [
                                                {
                                                    id: `${id++}`,

                                                    name: "Александра",
                                                    description: "1980"
                                                },
                                                {
                                                    id: `${id++}`,

                                                    name: "Наталья",
                                                    description: "1983"
                                                }, {
                                                    id: `${id++}`,

                                                    name: "Мария",
                                                    description: "1997"
                                                }
                                            ]
                                        }
                                    ]

                                },
                                {
                                    id: `${id++}`,

                                    "name": "Александра",
                                    description: "1923-2001 Самара",
                                    secondParent: {
                                        name: "Николай Федоровы"
                                    },
                                    children: [
                                        {
                                            id: `${id++}`,

                                            name: "Андрей",
                                            description: "1961 Самара"
                                        }
                                    ]
                                },
                                {
                                    id: `${id++}`,

                                    name: "Галина"
                                },
                                {
                                    id: `${id++}`,

                                    name: "Геннадий"
                                },
                                {
                                    id: `${id++}`,

                                    name: "Вячеслав"
                                },
                                {
                                    id: `${id++}`,

                                    name: "Александр"
                                },
                                {
                                    id: `${id++}`,

                                    name: "Октябрина",
                                    description: "1938 Самара",
                                    secondParent: {
                                        name: "Александр Гордеевы"
                                    },
                                    children: [
                                        {
                                            id: `${id++}`,

                                            name: "Евгения",
                                            description: "1948",
                                            secondParent: {
                                                name: "Владимир Клементьевы"
                                            },
                                            children: [{
                                                id: `${id++}`,

                                                name: "Мари",
                                                description: "1992"
                                            }, {
                                                id: `${id++}`,

                                                name: "Анастасия",
                                                description: "1992"
                                            }]
                                        },
                                        {
                                            id: `${id++}`,

                                            name: "Галина",
                                            description: "1969",
                                            secondParent: {
                                                name: "Дмитрий Головы"
                                            }, children: [{
                                                id: `${id++}`,

                                                name: "Дарья",
                                                description: "1998"
                                            }, {
                                                id: `${id++}`,

                                                name: "Василий",
                                                description: "2011"
                                            }]
                                        }
                                    ]
                                },
                                {
                                    id: `${id++}`,
                                    name: "Лидия"
                                }
                            ]
                        },
                        {
                            id: `${id++}`,

                            "name": "Дмитрий",
                            description: "1901-1943"
                        },
                        {
                            id: `${id++}`,

                            "name": "Ефросинья",
                            secondParent: {
                                name: "Василий Яковлевы",
                                description: "1903-1981"
                            }
                        },
                        {
                            id: `${id++}`,

                            "name": "Александр",
                            secondParent: {
                                name: "Софья Моторовы",
                                description: "1904-1979"
                            }
                        },
                        {
                            id: `${id++}`,

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
                            id: `${id++}`,

                            "name": "Екатерина",
                            description: "1909-1945"
                        },
                        {
                            id: `${id++}`,

                            "name": "Елена",
                            secondParent: {
                                name: "Иван Андрасюк",
                                description: "1912-1984"
                            }
                        },
                        {
                            id: `${id++}`,

                            "name": "Евгения",
                            secondParent: {
                                name: "Леонид Матора",
                                description: "1912-1984"
                            }
                        },
                        {
                            id: `${id++}`,

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
            id: `${id++}`,
            "name": "Петр",
            "options": {
                "expandable": true,
                "expanded": false
            },
            children: [{
                id: `${id++}`,
                name: "Евдокия"
            }]
        }
    ]
}