import random

def run_quiz():
    """
    An educational Python Quiz Game.
    This version selects 10 random questions from a larger pool.
    """
    print("------------------------------------------")
    print("   WELCOME TO THE PYTHON QUIZ MASTER!    ")
    print("------------------------------------------")
    print("You will be asked 10 random questions.")
    print("Answer by typing A, B, C, or D.\n")

    # A large pool of questions
    all_questions = [
        {
            "prompt": "What is the correct file extension for Python files?",
            "options": ["A. .pt", "B. .py", "C. .python", "D. .txt"],
            "answer": "B"
        },
        {
            "prompt": "Which keyword is used to create a function in Python?",
            "options": ["A. void", "B. function", "C. define", "D. def"],
            "answer": "D"
        },
        {
            "prompt": "Which of these is used to display text on the screen?",
            "options": ["A. print()", "B. output()", "C. echo()", "D. display()"],
            "answer": "A"
        },
        {
            "prompt": "How do you start a comment in Python?",
            "options": ["A. //", "B. /*", "C. #", "D. --"],
            "answer": "C"
        },
        {
            "prompt": "What is the output of print(2 ** 3)?",
            "options": ["A. 6", "B. 8", "C. 9", "D. 5"],
            "answer": "B"
        },
        {
            "prompt": "Which data type is used for a list in Python?",
            "options": ["A. []", "B. {}", "C. ()", "D. <>"],
            "answer": "A"
        },
        {
            "prompt": "How do you start a WHILE loop?",
            "options": ["A. while x > 5:", "B. while (x > 5)", "C. while x > 5 {", "D. x > 5 while:"],
            "answer": "A"
        },
        {
            "prompt": "Which method removes whitespace from a string?",
            "options": ["A. trim()", "B. strip()", "C. cut()", "D. remove()"],
            "answer": "B"
        },
        {
            "prompt": "Which collection is unchangeable?",
            "options": ["A. List", "B. Set", "C. Tuple", "D. Dictionary"],
            "answer": "C"
        },
        {
            "prompt": "Which operator is used for multiplication?",
            "options": ["A. #", "B. x", "C. *", "D. %"],
            "answer": "C"
        },
        {
            "prompt": "What does PEP 8 stand for in Python?",
            "options": ["A. Python Extension Pack", "B. Python Enhancement Proposal", "C. Programming Easy Python", "D. None"],
            "answer": "B"
        },
        {
            "prompt": "How do you create a variable named x with the value 5?",
            "options": ["A. x = 5", "B. int x = 5", "C. x := 5", "D. var x = 5"],
            "answer": "A"
        },
        {
            "prompt": "Which collection allows duplicate members?",
            "options": ["A. Set", "B. List", "C. Dictionary", "D. None"],
            "answer": "B"
        },
        {
            "prompt": "How do you join two strings 'A' and 'B'?",
            "options": ["A. 'A' + 'B'", "B. 'A'.join('B')", "C. 'A' & 'B'", "D. concat('A','B')"],
            "answer": "A"
        },
        {
            "prompt": "What is the correct way to import a module?",
            "options": ["A. import module", "B. using module", "C. include module", "D. #include <module>"],
            "answer": "A"
        }
    ]

    # SELECT 10 RANDOM QUESTIONS
    # random.sample picks unique items from a list
    questions = random.sample(all_questions, 10)
    
    score = 0
    total_questions = len(questions)

    for i, q in enumerate(questions, 1):
        print(f"Question {i}: {q['prompt']}")
        for option in q["options"]:
            print(option)
        
        user_choice = input("\nYour answer: ").strip().upper()

        if user_choice == q["answer"]:
            print("✅ CORRECT!\n")
            score += 1
        else:
            print(f"❌ WRONG. The answer was {q['answer']}.\n")

    print("------------------------------------------")
    print(f"QUIZ FINISHED!")
    print(f"Score: {score} out of {total_questions}")
    print("------------------------------------------")
    
    if score == 10: print("Perfect score! Python Legend! 🐍💎")
    elif score >= 7: print("Great job! Very strong logic.")
    elif score >= 5: print("Nice work! You are getting there.")
    else: print("Practice makes perfect. Keep coding!")

if __name__ == "__main__":
    run_quiz()

"""
NEW LESSON: RANDOMIZATION
-------------------------
1. random.sample(list, k):
   This function picks 'k' UNIQUE items from a list.
   It ensures you don't get the same question twice in the same round!

2. len(all_questions):
   By having a pool of 15-20 questions but only showing 10,
   every time you play, the game feels different.
"""
