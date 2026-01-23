import random

def run_hangman():
    """
    A beginner-friendly Hangman game in Python.
    Demonstrates lists, loops, string manipulation, and game state.
    """
    print("==========================================")
    print("   WELCOME TO PYTHON HANGMAN MASTER!    ")
    print("==========================================")
    print("Try to guess the secret word, one letter at a time.\n")

    # 1. Predefined list of words
    words = ["python", "programming", "developer", "computer", "keyboard", "javascript", "internet", "software"]
    
    # 2. Randomly select one word
    secret_word = random.choice(words)
    
    # 3. Track guessed letters and lives
    guessed_letters = []
    lives = 6
    
    # Game Loop
    while lives > 0:
        # 4. Display the word as underscores for unguessed letters
        display_word = ""
        for letter in secret_word:
            if letter in guessed_letters:
                display_word += letter + " "
            else:
                display_word += "_ "
        
        print(f"Word: {display_word}")
        print(f"Lives remaining: {lives}")
        print(f"Guessed letters: {', '.join(guessed_letters)}")
        
        # 5. Get user guess
        guess = input("\nGuess a letter: ").strip().lower()
        
        # 6. Basic Validation
        if len(guess) != 1 or not guess.isalpha():
            print("⚠️ Please enter a single valid letter.")
            continue
            
        if guess in guessed_letters:
            print(f"⚠️ You already guessed '{guess}'. Try another one!")
            continue
            
        guessed_letters.append(guess)
        
        # 7. Check if guess is correct
        if guess in secret_word:
            print(f"✅ Good job! '{guess}' is in the word.")
        else:
            lives -= 1
            print(f"❌ Wrong! '{guess}' is NOT in the word.")
            
        # 8. Check for Win Condition
        if all(letter in guessed_letters for letter in secret_word):
            print(f"\n🎉 CONGRATULATIONS! You guessed the word: {secret_word}")
            break
            
    # 9. Check for Loss Condition
    if lives == 0:
        print("\n💀 GAME OVER! You ran out of lives.")
        print(f"The secret word was: {secret_word}")

if __name__ == "__main__":
    run_hangman()

"""
PYTHON LESSON: HOW THIS CODE WORKS (Step by Step)
-----------------------------------------------
1. random.choice(list):
   Just like a magic hat, this picks one random item from your list.

2. "_ " * len(word):
   We use loops to check every letter. If the player hasn't 
   guessed it yet, we show an underscore.

3. guessed_letters.append(guess):
   We keep a 'memory' of every letter the player tried so they 
   don't waste turns on repeated guesses.

4. all(condition):
   This checks if EVERY single letter of the secret word 
   has been found in our list of guessed letters.
"""
