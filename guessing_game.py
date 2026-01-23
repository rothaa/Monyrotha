import random

# STEP 1: Setting up the game
# We use the 'random' library to let the computer "pick" a number.
def start_game():
    print("--- SUDDEN DEATH: Number Guessing Game ---")
    print("I'm thinking of a number between 1 and 100.")
    print("You have exactly ONE try. Good luck!\n")
    
    # Generate a random number from 1 to 100
    secret_number = random.randint(1, 100)
    
    try:
        # Ask the user for their ONLY guess
        guess = int(input("Enter your guess: "))
        
        # Checking the Guess immediately
        if guess == secret_number:
            print(f"\n🎉 CONGRATULATIONS! You got it right! The number was {secret_number}.")
            print("You are a master of luck!")
        else:
            difference = "Too low" if guess < secret_number else "Too high"
            print(f"\n❌ YOU LOSE! Your guess was {difference}.")
            print(f"The correct number was {secret_number}.")
            print("Better luck next time!")
                
    except ValueError:
        print("\nOops! That wasn't a valid number. You wasted your only chance!")

# Run the game
if __name__ == "__main__":
    start_game()

"""
EXPLANATION FOR THE "SUDDEN DEATH" MODE:
----------------------------------------
1. One Shot: We removed the 'while' loop so the game doesn't repeat.
2. Direct Check: We check if the guess is EXACTLY equal (==) to the secret number.
3. Win/Loss:
   - If Correct: You win immediately.
   - If Wrong: We tell you if you were too high or too low, and reveal the answer.
"""
