import random

# STEP 1: Setting up the game
# We use the 'random' library to let the computer "pick" a number.
def start_game():
    print("Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 100.")
    
    # Generate a random number from 1 to 100
    secret_number = random.randint(1, 100)
    
    # We create a variable to count how many tries the user takes
    attempts = 0
    
    # STEP 2: The Game Loop
    # We use 'while True' so the game keeps running until the user wins
    while True:
        try:
            # Ask the user for their guess
            # we use int() to convert the text input into a number
            guess = int(input("Enter your guess: "))
            attempts += 1  # Add 1 to our attempt counter
            
            # STEP 3: Checking the Guess
            if guess < secret_number:
                print("Too low! Try again.")
            elif guess > secret_number:
                print("Too high! Try again.")
            else:
                # STEP 4: Winning the Game
                # This part runs only if the guess is NOT lower and NOT higher (meaning it's correct!)
                print(f"CONGRATULATIONS! You found the number in {attempts} attempts!")
                break # This stops the 'while' loop
                
        except ValueError:
            # If the user types something that isn't a number (like "hello"), show an error
            print("Oops! Please enter a valid number.")

# Run the game
if __name__ == "__main__":
    start_game()

"""
EXPLANATION FOR BEGINNERS:
--------------------------
1. 'import random': This brings in tools that help the computer pick random numbers.
2. 'random.randint(1, 100)': This tells the computer: "Pick a whole number between 1 and 100."
3. 'while True': This is a 'loop'. It means "Repeat the code inside me forever" (until we say 'break').
4. 'int(input(...))': This takes the words you type and turns them into a number the math can understand.
5. 'if / elif / else': These are 'conditions'. They check logic:
   - IF guess is too small -> Print too low.
   - ELSE IF (elif) guess is too big -> Print too high.
   - ELSE (otherwise) -> You win!
6. 'attempts += 1': This is a shortcut for 'attempts = attempts + 1'. It keeps score!
"""
