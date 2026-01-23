import random

def start_game():
    """
    Main function to run the Number Guessing Game.
    This version follows the classic 'higher/lower' rules with score tracking.
    """
    print("==========================================")
    print("Welcome to the Classic Number Guessing Game!")
    print("==========================================")
    print("I'm thinking of a number between 1 and 100.")
    print("Try to find it in the fewest attempts possible!\n")

    # The computer picks a 'secret' number
    secret_number = random.randint(1, 100)
    
    # We start counting attempts from 0
    attempts = 0
    
    # We use a 'while True' loop so the game doesn't end until the user wins
    while True:
        try:
            # Get user input and convert it to a whole number (Integer)
            guess = int(input("Enter your guess: "))
            attempts += 1 # Every time the user guesses, we add 1 to the score

            # Logic check:
            if guess < secret_number:
                print("Too low! 📉 Try a bigger number.")
            elif guess > secret_number:
                print("Too high! 📈 Try a smaller number.")
            else:
                # This part only runs if the guess is EXACTLY the secret number
                print(f"\n🎉 CONGRATULATIONS! You found it!")
                print(f"The number was {secret_number}.")
                print(f"It took you {attempts} attempts to win!")
                break # This 'breaks' the loop and ends the game
                
        except ValueError:
            # This handles the case where the user types letters instead of numbers
            print("Invalid input! Please type a number between 1 and 100.")

if __name__ == "__main__":
    start_game()

"""
PYTHON LESSON: HOW THIS CODE WORKS (Step by Step)
-----------------------------------------------
1. random.randint(1, 100):
   This function from the 'random' library generates a random integer.
   Imagine the computer having a hat with numbers 1 to 100 inside and picking one.

2. while True:
   This creates an 'infinite loop'. The game will keep repeating the code
   inside until we tell it to 'break'.

3. try / except:
   This prevents the program from crashing if the user types something wrong.
   It 'tries' to turn the input into a number; if it fails, it goes to 'except'.

4. If / Elif / Else:
   This is the 'decision making' of the program.
   - IF guess is less than secret: "Too Low"
   - ELSE IF guess is more than secret: "Too High"
   - ELSE: "You Win!" (because it must be equal)
"""
