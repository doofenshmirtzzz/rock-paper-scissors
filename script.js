"use strict";

function getComputerChoice() {
  // 0, 1 or 2
  const choice = Math.floor(Math.random() * 3); 

  switch (choice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function changeWinMessage(element, winner) {
  element.textContent = winner ? 'You lost :(' : "You won";
}

function toggleElement(element) {
  element.classList.toggle('hidden');
}

function checkIfWon() {
  if (computerScore === 5 || humanScore === 5) {
    changeWinMessage(results, computerScore > humanScore)
    toggleElement(results);
    won = true;

    computerScore = 0;
    humanScore = 0;
  }
}

function animateGesture(element, gesture) {
  let i = gesture.length - 1;
  setInterval(() => {
    if (i < 0) return;
    element.textContent = gesture[i];
    i--;
  }, 5);
}

function showGesture(actor, gesture) {
  // rock: 52 char
  // others: 70 char
  if (actor === 'computer') {
    switch (gesture) {
      case 'rock':
        computerGesture.textContent = `                        +*##*=                      
                    *#*=      *##:                  
                 +*#             =##.               
               .*=                  %#%             
         .::---*.                     =#*           
   **#+:      :#           *+-#         -*-         
 #*            ##           **            #+        
*#             =*           ##             *#:      
#+        **#****+          *#              *=.-=   
##     :##      =#          ##              ##      
=#    +*         #*        *#                #:     
 ## :*=           #*      ##=                #*     
  ###              *##*###  #+                      
  *#           *###*=    -#**##                     
  #.        -*#              %###                   
  #=       ##                 ** =##*               
  .*-    =*.              =##*##                    
    ##  ##            **##      #+                  
     *#            *#*           #             :#   
      ##         -*+            -#             #=   
      -#        *#             =#             **    
       #*      ##             *#            :###### 
        *#:   ==            ###            #*       
          =**                 *          #*         
            %#                        ###           
             =#=                  +***              
               -##*.        =*#*#+                  
                    =*####+.                        `
        break;
      case 'paper':
        computerGesture.textContent = `                              #*+                                     
                           .*+   *#=                                  
                           #=      #*                                 
                           *.        ##                               
                           ##         .##                             
                            ##           ##+                          
                              **            *##+                      
                                **              -##*+                 
                                 =*-                 *#+              
                                   ##                  -*#            
                                    #+                   :##+:  .     
                                    #*                     ##         
                                   ##                       *#        
                                 **.                         ##       
        +#*#++***#####*##*######=      .*                     #       
      .*-                                ##                   #*      
      #+                                  .#*                 =*      
      ##                                 *.  **#                      
       #*:        .:=+*######*            *#    :**####*#-            
         .****+==:           ##            .**                        
                          -###               *#                       
                    +###*=                    .#-             ##      
             +*#*#*                             #*            #:      
        #*#+.                                    #*          ######+  
      ##                     ####**               *-        #*        
     -*                  *##-    **               =#      *#.         
     +#              *##*      **:                 =    *#=           
      #-         *##=        #*                       ##:             
       ##+  :**#+         ##%        -**%          ###                
          ..            **:        =#+  #.       *#.                  
                     #*#          ##   =#      =#:                    
                  =*#           ##    :#      -#                      
                 #+           ##      #.     .#                       
                +#          ##       #:      #:                       
                 #:       +*        #:      #=                        
                  *#*:-#*#        :#       ##                         
                                  *       *#                          
                                  +      #*                           
                                  =#*  *#+                            `
        break;
      case 'scissors':
        computerGesture.textContent = `                                         :*#######*#                  
                                      =*#           -##.              
                                     #+                +#*            
         =++*++=-:.                 #*                   .*#..        
    -*#=               ...:::::::::=#                      =#+   ..   
   *#                              -#                        #+       
   #                               -#            +            #=      
   #=                              :#           *#             #      
    ##                             :#           *-                    
       **##*##################**+  +#          *#                     
                              +#*  *#          #*                     
                        *#*##-      #*       -#:#*            .#      
                 =*#*#*.             **#=:-*##**  ###.        #*      
          *##***:                       **=     *#    .      +#       
      +#*                              .:        #+         +*        
     ##                       :**###             #+        #*#**-.    
    .#                   **##+ =*               %#-##    +#-          
     #             -*###.       #*             ##   .# ##+            
      ##      +###+              #*        .#**      #+               
        *###*.                     ####**##.        *+                
                                       -*=       =#*                  
                                         -######*                     `
        break;
    }
  } else if (actor === 'human') {
      switch (gesture) {
      case 'rock':
        /*
        humanGesture.textContent = `                      =*##*+                        
                  :###      =*#*                    
               .##=             #*+                 
             %#%                  =*:               
           *#=                     .*---::.         
         -*=         #==*           #:      :+#**   
        +#            **           ##            *# 
      :#*             ##           *=             #*
   =-.-*.             #*          +****#**        +#
      *#              *#          #=      ##:     ##
     .#                #*        *#         *+    #+
     *#                -##      *#           -*- ## 
                      +#  ##**##*              ###  
                     ##**#-    =*###*           #*  
                   #*#%              #*-        .#  
               *##= *#                 ##       =#  
                    ##*##=              .*=    :*.  
                  +#      ##**            ##  ##    
   #:             #.          *#*            #*     
   =#             #=            =*=         ##      
    **             #=             #*        #-      
 ####*#:            #*             ##      *%       
       *#            ###            ==   :#*        
         ##          *                 **+          
           ##*                        #%            
              ***+                  =#+             
                  +#*#*=        .+##=               
                         +####*=.                   `
        */
        animateGesture(humanGesture, HUMAN_ROCK);
        break;
      case 'paper':
        humanGesture.textContent = `                                     +*#                              
                                  =#*   +*.                           
                                 *#      -#                           
                               ##        .*                           
                             ##.         ##                           
                          +##           ##                            
                      +##*            **.                             
                 +*##-              **.                               
              =#*                 -*=                                 
            #*-                  ##                                   
     .  :+##:                   +#                                    
         ##                     *#                                    
        #*                       ##                                   
       *#                         .**                                 
       #                     *.      -######*##*#####***++#*#+        
      *#                   ##                                -*:      
      *=                 *#.                                  +#      
                      #**   *                                 *#      
            -#*####**:    #*            +######*+=:.        :*#       
                        **.            ##           :==+****.         
                       #*               ###-                          
      ##             -*:                    =*###*                    
      .#            *#                             *#*#*+             
  =######          +#                                    .+#*#        
        *#        -*               **####                     ##      
          #*      #+               **    -##*                  *=     
           =#*    =                 :**      +##*              #*     
             :##                       *#        =##*         -#      
                ###          %**=        %##         +#**:  +##       
                  .##        #  +#=        :**            ..          
                    :#=      #+   ##.         #*#                     
                      #-      #:    ##           #*=                  
                       #.     .#.     ##           =#                 
                       :#      .#       ##          #+                
                        =#      .#        **       :#                 
                         #*       *:        #*#-:*#*                  
                          #*       *                                  
                           *#      +                                  
                            +#*  *#+                                  `
        break;
      case 'scissors':
        humanGesture.textContent = `                  #*#######*-                                         
              .##-           #*+                                      
            *#*                +#                                     
        ..#*:                   *#                 .:-=++*++=         
   ..   =#=                      #+:::::::::...               =#*-    
       +#                        #=                              #*   
      =#            +.           #=                               #   
      #             #*           #:                              =#   
                    -*           #-                             ##    
                     #*          #*  +**##################*###*       
                     *#          ##  +*+                              
      #.            *#:#-       *#      -##*#*                        
      *#        .###  **##*-:=#**             .*#*#*=                 
       #+      .    #*     =**                       :***##*          
        *+         =#        .:                              ##+      
    .-+*###        +#             ###**:                       ##     
          -#*    ##-#%               *= +##**                   #:    
            +## #.   ##.            +#       .###*-             #     
               +#      +##.        *#              +###+      *#      
                +*        .##**####                     .*###*        
                  *#+       =*-                                       
                     *######-                                         `
        break;
    }
  }
}

function updateScore() {
  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
}

function decideWinner(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) {
    return;
  } else if (computerChoice === 'rock') {
    if (humanChoice === 'paper') {
      humanScore++;
      return;
    } else { // scissors
      computerScore++;
      return;
    }
  } else if (computerChoice === 'paper') {
    if (humanChoice === 'scissors') {
      humanScore++;
      return;
    } else { // rock
      computerScore++;
      return;
    }
  } else if (computerChoice === 'scissors') {
    if (humanChoice === 'rock') {
      humanScore++;
      return;
    } else { // paper
      computerScore++;
      return;
    }
  }
}

function playRound(element) {
  const humanChoice = element.target.id,
        computerChoice = getComputerChoice();

  showGesture('human', humanChoice);
  showGesture('computer', computerChoice);
  
  decideWinner(humanChoice, computerChoice);
  
  updateScore();
  
  // disable the win message on the next button press after the actual win
  if (won) {
    toggleElement(results);
    won = false;
  }

  checkIfWon();
}

let humanScore = 0, 
    computerScore = 0,
    won = false;

const buttons = document.getElementById('buttons'),
      humanGesture = document.getElementById('human-gesture'),
      computerGesture = document.getElementById('computer-gesture'),
      humanScoreElement = document.getElementById('human-score'),
      computerScoreElement = document.getElementById('computer-score'),
      results = document.getElementById('results');

buttons.addEventListener('click', (e) => playRound(e))


// TODO: complete toggleWinMessage()
// add the winner message
// add js comments
// make ASCII animation
// somehow highlight the win (effect on the score increment, or overlay animation idk)

/*
new approach for the animation:

make the scramble transition (possibly also scrambling away the last image)
use a non-empty-space character for background for good visual effect
use small charset, probably this: " .:-=+*#%@" (maybe no space char)
manipulate string and change textContent each step
add the placeholder image at the start (or just after the first page load)
*/