const courseData = [
    {
      id: "1",
      name: "Unité 1",
      isCompleted: false,
      courses: [
        {
          id: "1",
          name: "La lecture de Note",
          time: "3 min",
          type: "exercise",
          isCompleted: false,
          image: require("@/assets/images/course-card/1.png"),
          data: [
            {
              instruction: "Place les notes au bon endroit",
              questions: [
                {
                  id: "1",
                  question: "The dress is very small .",
                  words: [
                    { id: "1", word: "Elbise" },
                    { id: "2", word: "çok" },
                    { id: "3", word: "küçük" },
                  ],
                  answers: ["Elbise", "çok", "küçük"],
                },
              ],
            },
            {
              instruction: "Place les notes au deuxieme bon endroit",
              questions: [
                {
                  id: "1",
                  question: "Another question",
                  words: [
                    { id: "1", word: "example" },
                    { id: "2", word: "word" },
                  ],
                  answers: ["example", "word"],
                },
              ],
            },
          ],
        },
        {
          id: "2",
          name: "Le rythme",
          time: "2 min",
          type: "exercise",
          isCompleted: false,
          image: require('@/assets/images/course-card/2.png'),
          data: [
            {
              instruction: "Place le rythme au bon endroit",
              questions: [
                {
                  id: "1",
                  question: "The dress is very small .",
                  words: [
                    { id: "1", word: "Elbise" },
                    { id: "2", word: "çok" },
                    { id: "3", word: "küçük" },
                  ],
                  answers: ["Elbise", "çok", "küçük"],
                },
              ],
            },
            {
              instruction: "Place les notes au deuxieme bon endroit",
              questions: [
                {
                  id: "1",
                  question: "Another question",
                  words: [
                    { id: "1", word: "example" },
                    { id: "2", word: "word" },
                  ],
                  answers: ["example", "word"],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  
  export default courseData;
  