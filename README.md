<a name="readme-top"></a>

# Fruit Matching Game
<!-- ![Forks](https://img.shields.io/badge/forks-44-blue)
![Stars](https://img.shields.io/badge/stars-13-yellow)-->

![Untitled design (1)](https://github.com/eunikehp/Matching-game/assets/104567399/626895db-d03a-4a62-aae8-f66ecc9535a0)
[Check and play the game here](https://fruit-matching-game-f82ec.web.app/)

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#takeaways">Takeaways</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## About The Project

This project is a simple matching game, called Fruit Matching Game. The web app is built with Parcel and dependencies HTML, JavaScript, and CSS. The project allows the user to play the game, get a (high)score, select the level of difficulty, and reset the game. 
The game is about finding the difference between two boxes. 
The left(top) and right(bottom) sides are identical, except for one thing: the left(top) side has one extra fruit. 
The project is a responsive website that can be accessed using mobile phones, tablets, and computers.
I hope you enjoy and I look forward to your contributions!

### Instructions
To play and win this game, the user has to find the difference between the two boxes and click on one extra fruit on the left(top) box.
If anything except the correct fruit is clicked, a message is displayed saying that the game is over and the score(if the user reaches a higher score). 
If the correct fruit is clicked, all the current displayed fruits are removed and a new set of fruits is shown at random positions.
The game has 3 levels, easy, medium, and hard. The user can choose the level that they desire. The hard level will add more fruits rather than other levels.

### Built With

   * [HTML5](https://en.wikipedia.org/wiki/HTML5)
   * [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)  
   * [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
   * [Parcel](https://parceljs.org/getting-started/webapp/)
   * [Firebase](https://firebase.google.com/)    
   * [Git](https://git-scm.com)  
   * [GitHub](https://github.com)
   * [Canva](https://www.canva.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features
1. Score Counter: Keep track of the player's score, which could be based on factors like time taken, number of moves, or a combination of both.
2. Restart Button: Provide a way for the player to restart the game if they want to try again.
3. Level Options: Offer different levels that the player can choose from to customize their experience.
4. Winning Condition: Define a winning condition, such as matching all pairs of fruits, and display a congratulatory message when the player wins.
5. Responsive Design: Ensure the game layout adapts to different screen sizes and devices for a seamless experience across desktop and mobile.
6. High Scores: Display the player's high scores to encourage replayability and competition among players.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Takeaways
1. DOM Manipulation: Learn how to manipulate the Document Object Model (DOM) using JavaScript to dynamically update the content and structure of the web page.
2. Event Handling: Gain experience in handling user interactions by responding to events such as clicking the button or image.
3. CSS Styling: Practice styling the game using CSS to make it visually appealing and user-friendly.
4. Game Logic: Develop algorithms to implement the game's logic, such as matching pairs of fruits and tracking the player's progress.
5. Debugging Skills: Building a game involves debugging and troubleshooting to identify and fix issues in the code.
6. User Experience (UX): Gain insights into designing for a positive user experience, including providing feedback, clear instructions, and visual cues.
7. Problem-Solving: Encounter challenges along the way and develop problem-solving skills when finding solutions to overcome them.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Future Features
1. Enhance the gaming experience by adding sound effects for fruit matches, and victory celebrations.
2. Add a timer to track how long it takes the player to complete the game. Display the elapsed time to encourage competition or challenge.
3. Implement an animation effect to make the fruits bigger when clicked.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Deployment

### Push to GitHub
1. The project was developed using Visual Studio Code.
2. Committed to Git as a local repository.
3. Pushed to GitHub, a remote repository.

### Deploy with Firebase 
The project was deployed to the cloud using Firebase and Firebase Hosting. The following steps:   
1. To use Firebase, you will need a regular Google account. If you don't have a Google account, you can [create a free Google account here](https://accounts.google.com/lifecycle/steps/signup/name?ddm=0&dsh=S-838546182:1711363031954401&flowEntry=SignUp&flowName=GlifWebSignIn&theme=mn&TL=AEzbmxxz5L6XGCExY9PGDVJb5wSVpW6FA5y7czSRcGizL_vePYHAst18RAoktji0).
2. Install the Firebase CLI on your computer.
   - The Firebase CLI is installed globally by using npm. To install the Firebase CLI, run the following command:
   ```
   npm install -g firebase-tools@12.9.1
   ```
   - After the installation is complete, you can verify it by checking the version of the Firebase CLI. To do so, run the following command:
   ```
   firebase --version
   ```
   - This command should return the version of the Firebase CLI that you've installed. If it doesn't, the installation might not have been successful.
3. Set up a new project with NPM.
   - In the 'your project' folder, then type the following command to initialize the project with all the defaults:
     ```
     npm init -y
     ```
   - Run the following NPM commands to install this package:
     ```
     npm install --save-dev parcel
     ```
   - Open package.json and update the code.
   - Add a description, such as "description": "This is a test project",
   - Change this line:
     ```
     "main": "index.js",
     ```
     to:
     ```
     "source": "index.html",
     ```
   - In the scripts object, add the following two lines:
     ```
     "start": "parcel --open",
     "build": "parcel build"
     ```

5. Login and Initialize Firebase in your Project Folder.
   - In your terminal, type the following command to login to Firebase using your regular Google account:
   ```
   firebase login
   ```
   - Follow the prompts to log in successfully.
   - The next step will connect and configure a Firebase instance for your project so that you will be able to deploy it. You will only initialize it the first time you deploy your project. Enter this command in your terminal to initialize Firebase in the 'your project' folder:
   ```
   firebase init
   ```
   - Use your arrow keys to move to the option Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys, then hit your space bar to select this option. When you hit the space bar, a green dot should appear inside the radio button for this option.
   Then press your Enter key.
   - Again, use your arrow keys to move down to the option to Create a new project, then press enter to continue.
   - Next, you will be prompted to give your project an id name/number that is unique on the internet.
   - Next, you will be prompted for a "friendly" name for your project that is just for your account and press enter to continue.
   - At this point, the Firebase CLI is connecting to the cloud to set up your new Firebase project, which will take a bit of time.  Your project was successfully created in the Firebase console.
   - You will next be asked a series of questions for Hosting Setup. When it asks you about a public directory, type *dist*.
   - Accept the rest of the defaults.  Since you don't already have an index.html page or a dist folder, Firebase will create a temporary one for you.
   - When you see the message that firebase initialization is complete, type the following command in your terminal:
   ```
   firebase deploy
   ```
   - When the deployment is complete and you view your project in the browser, you will see the temporary page that Firebase created for you in your project folder.  This is expected. 
6. Add some HTML, CSS, Javascript code.
7. Serve and test your project. In your terminal, type **npm start** to open your new website in your local browser.
8. Build and Re-Deploy
   - Type **npm run build** to create a new *dist* folder with your new index.html file.
   - Type **firebase deploy** to re-deploy your changes


<!--
### **Forking the GitHub Repository**  
1. Log in to GitHub.  
2. Navigate to the main page of GitHub Repository that will be deployed.  
3. At the top of the Repository, locate the "Settings" button on the menu and click it.  
4. Inside the Settings, on the left side of the page, there’s a list of tab menu. Locate the “Pages” tab, and click it.  
5. Under "Source", click the dropdown called "None", select "Master", and then click the “Save” button.  
6. The page will automatically refresh.  
7. There’s a notification message that provides the now published site link: “Your site is ready to be published at https://dissyulina.github.io/trivia-world/”.  
 

### **Making a Local Clone** 
By cloning a GitHub Repository you can create a local copy on your computer of the remote repository. This allows you to make all of your edits locally rather than directly in the source files of the origin repository, by using the following steps:  
1. Log in to GitHub 
2. Navigate to the main page of the GitHub Repository that you want to clone.
3. Above the list of files, click the dropdown called "Code".
4. To clone the repository using HTTPS, under "HTTPS", copy the link.
5. Open Git Bash.
6. Change the current working directory to the location where you want the cloned directory to be made.
7. Type git clone, and then paste the URL you copied in Step 4.  
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```
8. Press Enter. Your local clone will be created.
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```  
Changes made on the local machine (cloned repository) can be pushed to the upstream repository directly if you have a write access for the repository. Otherwise, the changes made in the cloned repository are first pushed to the forked repository, and then a pull request is created.  
Click [Here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) to retrieve pictures for some of the buttons and more detailed explanations of the above process.  

<br />   -->


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

If you encounter any bugs or major changes, please open an issue first to discuss it. 
Any contributions are welcome and **greatly appreciated**.
If you have a suggestion that would make this better, please fork the repo and create a pull request. 
Don't forget to give the project a star! Thanks again!

### Instructions
1. Fork this repository
2. Clone the forked repository
3. Add your contributions (code or documentation)
4. Commit and push
5. Wait for pull request to be merged

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Your Name - [Eunike Pardede](www.linkedin.com/in/eunikepardede) - eunikehedriani@gmail.com

Project Link: [https://github.com/eunikehp/Matching-game](https://github.com/eunikehp/Matching-game)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
<!--
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[JavaScript]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JS-url]: https://jquery.com 

