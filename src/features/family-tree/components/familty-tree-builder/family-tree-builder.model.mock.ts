import { FamilyNode } from "../../../../store/features/family-tree/models/family-node.model";

let id = 0;

export const GordeevaMockData: any = {
  id: `${id++}`,
  name: "Павел Матора",
  description: "1850 c. Горбунки",
  children: [
    {
      id: `${id++}`,
      name: "Илья",
      options: {
        expandable: true,
      },
      children: [
        {
          id: `${id++}`,
          name: "Мария",
        },
        {
          id: `${id++}`,
          name: "Фрося",
        },
        {
          id: `${id++}`,
          name: "Анна",
        },
        {
          id: `${id++}`,
          name: "Василий",
        },
        {
          id: `${id++}`,
          name: "Иван",
        },
        {
          id: `${id++}`,
          name: "Грегорий",
          description: "1876-1918",
          secondParent: {
            name: "Анна Ильинична Салазко",
            description: "1880-1918",
          },
          children: [
            {
              id: `${id++}`,

              name: "Наталья",
              secondParent: {
                name: "Александр Чичаевы",
                description: "1899-1981",
              },
              options: {
                expandable: true,
              },
              children: [
                {
                  id: `${id++}`,

                  name: "Зинаида",
                  description: "1922-2001 Самара",
                  secondParent: {
                    name: "Михаил Борисовы",
                  },
                  children: [
                    {
                      id: `${id++}`,

                      name: "Татьяна",
                      description: "1955",
                      secondParent: {
                        name: "Александр Остроуховы",
                      },
                      children: [
                        {
                          id: `${id++}`,

                          name: "Александра",
                          description: "1980",
                        },
                        {
                          id: `${id++}`,

                          name: "Наталья",
                          description: "1983",
                        },
                        {
                          id: `${id++}`,

                          name: "Мария",
                          description: "1997",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: `${id++}`,

                  name: "Александра",
                  description: "1923-2001 Самара",
                  secondParent: {
                    name: "Николай Федоровы",
                  },
                  children: [
                    {
                      id: `${id++}`,

                      name: "Андрей",
                      description: "1961 Самара",
                    },
                  ],
                },
                {
                  id: `${id++}`,

                  name: "Галина",
                },
                {
                  id: `${id++}`,

                  name: "Геннадий",
                },
                {
                  id: `${id++}`,

                  name: "Вячеслав",
                },
                {
                  id: `${id++}`,

                  name: "Александр",
                },
                {
                  id: `${id++}`,

                  name: "Октябрина",
                  description: "1938 Самара",
                  secondParent: {
                    name: "Александр Гордеевы",
                  },
                  children: [
                    {
                      id: `${id++}`,

                      name: "Евгения",
                      description: "1948",
                      secondParent: {
                        name: "Владимир Клементьевы",
                      },
                      children: [
                        {
                          id: `${id++}`,

                          name: "Мари",
                          description: "1992",
                        },
                        {
                          id: `${id++}`,

                          name: "Анастасия",
                          description: "1992",
                        },
                      ],
                    },
                    {
                      id: `${id++}`,

                      name: "Галина",
                      description: "1969",
                      secondParent: {
                        name: "Дмитрий Головы",
                      },
                      children: [
                        {
                          id: `${id++}`,

                          name: "Дарья",
                          description: "1998",
                        },
                        {
                          id: `${id++}`,

                          name: "Василий",
                          description: "2011",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: `${id++}`,
                  name: "Лидия",
                },
              ],
            },
            {
              id: `${id++}`,

              name: "Дмитрий",
              description: "1901-1943",
            },
            {
              id: `${id++}`,

              name: "Ефросинья",
              secondParent: {
                name: "Василий Яковлевы",
                description: "1903-1981",
              },
            },
            {
              id: `${id++}`,

              name: "Александр",
              secondParent: {
                name: "Софья Моторовы",
                description: "1904-1979",
              },
            },
            {
              id: `${id++}`,
              name: "Пелагея",
              secondParent: {
                name: "Ануфрий Рогоза",
              },
              options: {
                expandable: true,
              },
              children: [
                {
                  id: `${id++}`,
                  name: "Валентина",
                  secondParent: {
                    name: "Сергей Прилягины",
                    description: "1946",
                  },
                  children: [
                    {
                      id: `${id++}`,
                      name: "Екатерина",
                    },
                    {
                      id: `${id++}`,
                      name: "Елена",
                    },
                    {
                      id: `${id++}`,
                      name: "Александр",
                      description: "1944",
                      secondParent: {
                        name: "Светлана Прилягины",
                        description: "1945",
                      },
                      children: [
                        {
                          id: `${id++}`,
                          name: "Павел",
                          description: "1969-1996",
                          children: [
                            {
                              id: `${id++}`,
                              name: "Дария",
                              description: "1992",
                            },
                            {
                              id: `${id++}`,
                              name: "Анна",
                              description: "1995",
                            },
                          ],
                        },
                        {
                          id: `${id++}`,
                          name: "Анастасия",
                          description: "1974-1996",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: `${id++}`,

              name: "Екатерина",
              description: "1909-1945",
            },
            {
              id: `${id++}`,

              name: "Елена",
              secondParent: {
                name: "Иван Андрасюк",
                description: "1912-1984",
              },
            },
            {
              id: `${id++}`,

              name: "Евгения",
              secondParent: {
                name: "Леонид Матора",
                description: "1912-1984",
              },
              options: {
                expandable: true,
              },
              children: [
                {
                  id: `${id++}`,
                  name: "Ирина",
                  secondParent: {
                    name: "Анатолий Рогаза",
                    description: "1946-",
                  },
                  children: [
                    {
                      id: `${id++}`,
                      name: "Елена",
                      secondParent: {
                        name: "Дмитрий",
                        description: "1972",
                      },
                      children: [
                        {
                          id: `${id++}`,
                          name: "Александр",
                          description: "1996-2005",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: `${id++}`,

              name: "Никифор",
              description: "1917-1998",
              secondParent: {
                name: "Нина Матора",
                description: "1918-2004",
              },
              options: {
                expandable: true,
              },
              children: [
                {
                  id: `${id++}`,
                  name: "Владимир",
                  secondParent: {
                    name: "Нина Матора",
                    description: "1939-2000",
                  },
                  children: [
                    {
                      id: `${id++}`,
                      name: "Екатерина",
                      description: "1972",
                      children: [
                        {
                          id: `${id++}`,
                          name: "Алеша",
                          description: "2006",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: `${id++}`,
                  name: "Майя",
                  description: "1941-1944",
                },
                {
                  id: `${id++}`,
                  name: "Анатолий",
                  secondParent: {
                    name: "Галина Мотора",
                    description: "1946",
                  },
                  children: [
                    {
                      id: `${id++}`,
                      name: "Георгий",
                      description: "1969",
                      secondParent: {
                        name: "Елена Мотора",
                        description: "1971",
                      },
                      children: [
                        {
                          id: `${id++}`,
                          name: "Рита",
                          description: "1997",
                        },
                        {
                          id: `${id++}`,
                          name: "Анастасия",
                          description: "2006",
                        },
                      ],
                    },
                    {
                      id: `${id++}`,
                      name: "Татьяна",
                      description: "1972",
                      children: [
                        {
                          id: `${id++}`,
                          name: "Дарья",
                          description: "1999",
                        },
                        {
                          id: `${id++}`,
                          name: "Иван",
                          description: "2006",
                        },
                      ],
                    },
                    {
                      id: `${id++}`,
                      name: "Нина",
                      description: "1979",
                      secondParent: {
                        name: "Максим Богомаз",
                        description: "1976",
                      },
                      children: [
                        {
                          id: `${id++}`,
                          name: "Екатерина",
                          description: "2010",
                        },
                        {
                          id: `${id++}`,
                          name: "Вера",
                          description: "2014",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: `${id++}`,
      name: "Григорий",
    },
    {
      id: `${id++}`,
      name: "Егор",
    },
    {
      id: `${id++}`,
      name: "Борис",
      options: {
        expandable: true,
      },
      children: [
        {
          id: `${id++}`,
          name: "Пелагея",
          children: [
            {
              id: `${id++}`,
              name: "Таисия Сакки",
              children: [
                {
                  id: `${id++}`,
                  name: "Татьяна",
                  description: "Севастополь",
                },
              ],
            },
          ],
        },
        {
          id: `${id++}`,
          name: "Марина",
          children: [
            {
              id: `${id++}`,
              name: "Раиса",
              children: [
                {
                  id: `${id++}`,
                  name: "Сын",
                },
              ],
            },
            {
              id: `${id++}`,
              name: "Зинаида",
              children: [
                {
                  id: `${id++}`,
                  name: "5 детей",
                },
              ],
            },
            {
              id: `${id++}`,
              name: "Виктор",
              children: [
                {
                  id: `${id++}`,
                  name: "2 ребенка",
                },
              ],
            },
          ],
        },
        {
          id: `${id++}`,
          name: "Марфа",
          description: "1952",
          secondParent: {
            name: "Дмитрий Салазко",
            description: "1947",
          },
          children: [
            {
              id: `${id++}`,
              name: "Иван",
            },
            {
              id: `${id++}`,

              name: "Нина",
              secondParent: {
                name: "Нинакор Вязянко",
              },
            },
            {
              id: `${id++}`,
              name: "Виктория",
            },
            {
              id: `${id++}`,
              name: "Петр",
            },
            {
              id: `${id++}`,
              name: "Лидия",
            },
            {
              id: `${id++}`,
              name: "Валентина",
            },
            {
              id: `${id++}`,
              name: "Ольга",
            },
          ],
        },
      ],
    },
    {
      id: `${id++}`,
      name: "Петр",
      options: {
        expandable: true,
      },
      children: [
        {
          id: `${id++}`,
          name: "Евдокия",
          secondParent: {
            name: "Александр Прохоренко",
            description: "Ушково",
          },
          children: [
            {
              id: `${id++}`,
              name: "Вадим",
              secondParent: {
                name: "Людмила",
              },
            },
            {
              id: `${id++}`,
              name: "Нина",
            },
            {
              id: `${id++}`,
              name: "Валентина",
              children: [
                {
                  id: `${id++}`,
                  name: "Юра",
                },
                {
                  id: `${id++}`,
                  name: "Зоя",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
