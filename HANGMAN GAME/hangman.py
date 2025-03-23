import random
import hangman_stages
choice_lst=['python','java','kotlin','javascript']
word_choice=random.choice(choice_lst)
print(word_choice)
display=[]
lives=6
for i in range(len(word_choice)):
    display +='_'
print(display)
game_over=False
while  not game_over:
    guess=input("Guess the Letter:").lower()
    for pos in range(len(word_choice)):
        if word_choice[pos]==guess:
            display[pos]=guess
    print(display)
    if guess not in word_choice:
        lives -=1
        game_over=True
        if(lives==0):
            print("You Lost!")
    if '_' not in display:
        print("You win!") 
        game_over=True
    print(hangman_stages.stages[lives])  
        
