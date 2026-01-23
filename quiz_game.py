def run_quiz():
    """
    A simple Python Quiz Game designed for beginners.
    Demonstrates lists, dictionaries, and score tracking.
    """
    print("------------------------------------------")
    print("   WELCOME TO THE PYTHON QUIZ MASTER!    ")
    print("------------------------------------------")
    print("Answer the following questions by typing A, B, C, or D.\n")

    # We store questions in a list of dictionaries for clean organization
    questions = [
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
        }
    ]

    score = 0
    total_questions = len(questions)

    # LOOP through each question in our list
    for i, q in enumerate(questions, 1):
        print(f"Question {i}: {q['prompt']}")
        # Display the 4 options
        for option in q["options"]:
            print(option)
        
        # Get user input and convert to Uppercase to handle "a" or "A"
        user_choice = input("\nYour answer: ").strip().upper()

        # Check if the answer is correct
        if user_choice == q["answer"]:
            print("✅ CORRECT! Well done.\n")
            score += 1
        else:
            print(f"❌ WRONG. The correct answer was {q['answer']}.\n")

    # FINAL RESULT
    print("------------------------------------------")
    print(f"QUIZ FINISHED!")
    print(f"Your final score: {score} out of {total_questions}")
    print("------------------------------------------")
    
    if score == total_questions:
        print("Perfect! You are a Python Pro! 🐍✨")
    elif score >= total_questions // 2:
        print("Good job! You have a solid foundation.")
    else:
        print("Keep practicing! Python is fun to learn.")

if __name__ == "__main__":
    run_quiz()

"""
PYTHON LESSON: HOW THIS CODE WORKS (Step by Step)
-----------------------------------------------
1. Lists and Dictionaries:
   We use a list [] to hold multiple questions. Each question is a dictionary {} 
   containing the 'prompt', 'options', and the 'answer'.

2. enumerate(questions, 1):
   This is a cool Python trick. It gives us the question 'q' AND its index 'i' 
   (starting from 1), so we can show "Question 1", "Question 2", etc.

3. item.strip().upper():
   - .strip() removes any accidental spaces the user might type.
   - .upper() makes sure "b" becomes "B" so the comparison always works.

4. f-strings (f"Score: {score}"):
   The 'f' before the quotes allows us to put variables directly into a string 
   using curly braces {}. It's faster and cleaner!
"""
