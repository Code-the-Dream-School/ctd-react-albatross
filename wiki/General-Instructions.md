## Project Setup

1. Fork [this GitHub repository](https://github.com/Code-the-Dream-School/ctd-react-albatross) to create your own working version
2. After completing the steps, you should be directed to your forked GitHub repository
3. Click the "Code" button and copy the URL for your repository
4. Clone this repository so that the code is available on your local machine:

> Hint: Run this command from the directory where you want to store your code

> Note: Replace `<url>` with the URL you copied in the previous step

```
git clone <url>
```

5. Navigate to the directory you just cloned in your terminal:

```
cd ctd-react-albatross
```

## Before each Lesson

Merge your pull request from the previous lesson (if you haven't already):

[View tutorial](https://github.com/Code-the-Dream-School/common-instructions/blob/main/common/how-to-merge.md)

Checkout your main branch and pull changes:

    git checkout main
    git pull

Create a new local branch to work on separate from the `main` branch:

> Note: Replace `<branch>` with your new branch name (ex. `lesson-1-1`)

    git checkout -b <branch>

Now, open the project directory in your code editor and begin the lesson.

## After each Lesson

Check the status of your local repository to double-check the changes you made:

    git status

Stage the file(s) that you edited:

    git add .

Check the status again and notice that the changes from before are now staged:

    git status

Create a commit for the changes you made and add a message describing the changes you made:

> Note: Replace `<message>` with your message

    git commit -m "<message>"

Push your commit to the remote repository (visible in GitHub):

    git push

Check the log to make sure your commit has been published:

    git log --oneline

Create a pull request and submit:

[View instructions](https://github.com/Code-the-Dream-School/common-instructions/blob/main/common/how-to-pull-request-sq2-link.md)