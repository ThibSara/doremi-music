import Colors from "@/constants/Colors";

const courseData = [
    {
      id: "1",
      name: "1 - les bases",
      isCompleted: true,
      courses: [
        {
          id: "1",
          name: "La lecture de Note",
          time: "3 min",
          type: "leçon",
          isCompleted: true,
          image: require("@/assets/images/course-card/unitOne/2.png"),
          color: Colors.purple,
          
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
          type: "mini jeu",
          isCompleted: true,
          image: require("@/assets/images/course-card/unitOne/1.png"),
          color: Colors.lightPink,
          
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
        {
            id: "3",
            name: "Les solos",
            time: "4 min",
            type: "quizz",
            isCompleted: true,
            image: require("@/assets/images/course-card/unitOne/3.png"),
            color: Colors.lightPurple,
            
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
    {
      unit: "2",
      name: "2 - le solfège",
      isCompleted: false,
      courses: [
        {
          id: "4",
          name: "Une portée",
          time: "3 min",
          type: "mini jeu",
          isCompleted: false,
          image: require("@/assets/images/course-card/unitOne/2.png"),
          color: Colors.purple,
          
          data: [
            {
              instruction: "Place les notes au bon endroit",
              questions: [
                {
                  id: "5",
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
                  id: "6",
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
          id: "6",
          name: "Le son",
          time: "2 min",
          type: "quizz",
          isCompleted: false,
          image: require("@/assets/images/course-card/unitOne/1.png"),
          color: Colors.lightPink,
          
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
        {
            id: "7",
            name: "Les solos",
            time: "4 min",
            type: "leçon",
            isCompleted: false,
            image: require("@/assets/images/course-card/unitOne/3.png"),
            color: Colors.lightPurple,
            
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
    {
      unit: "3",
      name: "3 - les accords",
      isCompleted: false,
      courses: [
        {
          id: "8",
          name: "Une portée",
          time: "3 min",
          type: "mini jeu",
          isCompleted: false,
          image: require("@/assets/images/course-card/unitOne/2.png"),
          color: Colors.purple,
          
          data: [
            {
              instruction: "Place les notes au bon endroit",
              questions: [
                {
                  id: "5",
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
                  id: "6",
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
          id: "9",
          name: "Le son",
          time: "2 min",
          type: "quizz",
          isCompleted: false,
          image: require("@/assets/images/course-card/unitOne/1.png"),
          color: Colors.lightPink,
          
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
        {
            id: "10",
            name: "Les solos",
            time: "4 min",
            type: "leçon",
            isCompleted: false,
            image: require("@/assets/images/course-card/unitOne/3.png"),
            color: Colors.lightPurple,
            
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
    }
  ];
  
  export default courseData;
  