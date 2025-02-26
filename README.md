# greenplanet

A continuing coding exercise and web application built with **React** and **Vite**. 
It incorporates **Bootstrap** for styling, **Sass** for custom styles, and **React Router** for navigation. Axios is used for handling HTTP requests, and ESLint is configured for linting.

## Installation

Install my-project with npm

```bash
  git clone https://github.com/your-username/greenplanet.git  
  npm install 
```
    
## Features | Dependencies | Libraries

- **React 19** for building user interfaces
- **Vite** for fast builds and hot module replacement
- **Bootstrap** for responsive design
- **Sass** for advanced styling
- **React Router DOM** for routing
- **Axios** for making API requests
- **ESLint** for maintaining code quality
- **Strapi** no sql backend to visualize, so many regrets

- React ^19.0.0
- React DOM ^19.0.0
- React Router DOM ^6.29.0
- Bootstrap ^5.3.3
- Axios ^1.7.9
- Sass ^1.85.0

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Lessons | Challenges | Notes

- Didn’t want to use dev branch and I’m committing to main b/c it’s more of a personal project, less to keep track of
- Though about using tailwind css vs SCSS but I prefer SCSS b/c of semantic naming even though it might seem like it takes longer to set up
- Spent quite a bit of time deciding to make the site responsive/styling instead of focusing on the function, oops (I think this is a byproduct of instructors putting higher emphasis *giving higher marks* for styling rather than js programing) - for example in the next few days I might rearrange where I'm putting the axios calls and how they run down
- Right now the Article Page isn't working, I think it's because I have my inital call in a component, I should lift state up to Home Page or App and then pass it down as a prop (though it did work for visualization at least), then I can pass an article ID to the article page, probably 
- The landing page mockup has a lot of unnecessary info that sort of potentially leads to nowhere once you start examining it, as well as a lot of different styles, there's an entire section that could just be cut out
- I didn't think I would finish but I definitely thought I would get more done
- Using dependencies/libraries such as Bootstrap and Google fonts made things go a little bit faster than I thought they would but they still presented their own challenges, like the learning curve, and with google fonts cdn I maybe have access to fonts more quickly but because I'm not setting them up with mixins it gets a little bit more finicky/time consuming on the other end, but I did learn how to work with google fonts CDN and Bootstrap so that's a win
- I considered trying to do this in TSX instead of JSX but it might have taken another week

## Goals for the near future
- I'm going to keep working on this but maybe change the backend entirely, I don't love the GUI for strapi, I would prefer to do all of that by hand, and it was more of a -- I want to see how this works fast/visualize -- rather than go over time
- I'll likely redo this in node/express and use some version of an sql database, add email list capability, add the form I didn't have time to, and set up a class/classes for the api calls in the front end (it feels more organized and neat), or maybe create a hook
- Add links for everything that could be clickable, I was thinking some things like "about us" could work in modals instead of lead to full pages in an SPA
- Add footer, because time
- Could redo everything in TSX once it's all functional



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
