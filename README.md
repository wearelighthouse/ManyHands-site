# ManyHands-site


## Local development

Editing in-browser at [github.dev/wearelighthouse/ManyHands-site](https://github.dev/wearelighthouse/ManyHands-site) is possible, although it's better to make and test changes locally.


### Prerequisites

- [Git](https://git-scm.com/)
- Node.js & NPM (preferably via a [Node version manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm))
- Write access to this repository, or a fork of it within your own GitHub profile, that we can accept PRs from.


### Setup

1. Clone the repository  
  `git clone git@github.com:wearelighthouse/ManyHands-site.git`

2. Change directory  
  `cd ManyHands-site`

3. Install dependencies  
  `npm i`

4. Run hot-reloading dev server (this will open up a web browser at localhost:3000)  
  `npm run dev`


### Making changes

1. Make sure you're on the `main` branch and you've pulled any recent changes  
  `git checkout main`  
  `git pull`

2. Checkout a new `feature/` `content/` or `fix/` branch, e.g.  
  `git checkout -b content/event-april-28-2022`
  
3. Start up the local dev environment (if it's not running already)  
  `npm run dev`
  
4. Make your changes via any text editor ([VS Code](https://code.visualstudio.com/) or [Atom](https://atom.io/) recommended)

5. Commit changes  
  `git commit -am "Replace old event with info & link to 28/04/2022 event`
  
6. Push changes to this repo  
  `git push --set-up orgin content/event-april-28-2022`
  
7. [Create a new Pull Request on GitHub](https://github.com/wearelighthouse/ManyHands-site/pulls) for your branch  


### Deployment

Changes to the branch [`main`](https://github.com/wearelighthouse/ManyHands-site/tree/main) (e.g. accepted Pull Requests) are automatically deployed to [wearelighthouse.github.io/ManyHands-site/](https://wearelighthouse.github.io/ManyHands-site/)
