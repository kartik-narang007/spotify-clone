<h1 align="center" id="title">Spotify Clone</h1>

<p align="center"><img src="https://socialify.git.ci/kartik-narang007/spotify-clone/image?description=1&amp;descriptionEditable=Spotify%20clone%20that%20have%20its%20own%20%5B%20User%2F%20Adding%20Music%2F%20Favorites%20Selection%2F%20Paly%20%5D%20and%20lots%20more%20feature%2C%20using%20no%20spotify%20Api%2C%20but%20using%20its%20own%20backend%20%2C%20s3%20bucket%20and%20database&amp;font=KoHo&amp;language=1&amp;logo=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1662130559%2Fnextjs%2FIcon_light_background.png&amp;name=1&amp;owner=1&amp;pattern=Brick%20Wall&amp;theme=Dark" alt="project-image"></p>

<h2>🚀 Demo</h2>

[https://spotify-clone-drab-alpha.vercel.app/](https://spotify-clone-drab-alpha.vercel.app/)

<h2>Tech Stack:</h2>

<span> &#8226; </span> ` Next js ` <span> &#8226; </span> ` Typescript ` <span> &#8226; </span> ` Stripe payment ` <span> &#8226; </span>` Supabase ` <span> &#8226; </span> ` Tailwind `  <br />
<br />
<b> Additional use full packages installed : </b> <br /> 
 1)  <a href="https://www.radix-ui.com"> radix-ui </a> ( Took <a href="https://www.radix-ui.com/primitives/docs/components/dialog"> Modal </a> & <a href="https://www.radix-ui.com/primitives/docs/components/slider"> Slider </a> for music player and volume slider ).
 2) <a href="https://react-hot-toast.com/"> react-hot-toast </a> ( for making toast popup ).
 3) <a href="https://www.davidhu.io/react-spinners/"> react-spinners </a> ( for loader screens ).
 4) <a href="https://github.com/joshwcomeau/use-sound"> use-sound </a> ( for music related functionality ).
 5) <a href="https://docs.pmnd.rs/zustand/getting-started/introduction" > zustand </a> ( for state managent )
 6) [ ... etc ]
<hr/>

<h2>Project Screenshots:</h2>

<h3>HomePage:</h3>

<img src="https://i.postimg.cc/Wtc2hzXZ/Home-Page-Desk-Top.png" alt="project-screenshot" width="100%" height="50%/">

<h3>Responsiveness:</h3>

<div align="center">
<img src="https://i.postimg.cc/263jtP11/Responsiveness.png" alt="project-screenshot" width="30%">

<img src="https://i.postimg.cc/263jtP11/Responsiveness.png" alt="project-screenshot" width="30%">
</div>
<h3>Search and Like Functionality:</h3>
<img src="https://i.postimg.cc/VNfkqS1B/Can-Play-Music-on-Any-Page.png" alt="project-screenshot" width="1010">
<h3>Login and Upload Modal:</h3>
<div>
<img src="https://i.postimg.cc/mgGDrX5n/Login-Modal.png" alt="project-screenshot" width="49.5%">

<img src="https://i.postimg.cc/0ydNKGgy/Song-Upload-Modal.png" alt="project-screenshot" width="49.5%">
</div>
  
  
<h2>🧐 Features:</h2>

Here're some of the project's best features:

*   User can play song what he likes and can add songs also.
*   To play/like/add any songs user must be logged-in.
*   Addition of song is for premium user only can take subscription to add any music to library.
*   In library section and liked songs section only the songs you have marked will be available.
*   On search section and home page all songs in s3 will be there for all users even logged out user too.
*   On music player section just as original song pause-play volume up-down mute next-previous songs and song duration slider is also available.
<h3>Account Functionalities:</h3>

*   App is responsive.
*   To achive account functionailty Supabase Auth has been use.
*   User can log-in sign-up can use magic link fuctionalitiy to log-in and can reset password.
*   On sign-up and magic link login a mail will be sent to you provided gmail.<hr/>


<h2>Learning and error fased while development : </h2>

1) Instead of directly creating an HTML element custom component, the new and better way i learned :
   ```
    import React, { forwardRef } from "react";
    
    interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
   
    const Button = forwardRef<HTMLButtonElement, ButtonProps>(
      ({ className, children, disabled, type = "button", ...props }, ref) => {
        return (
          <button
            type={type}
            className={className}
            disabled={disabled}
            ref={ref}
            {...props}
          >
            {children}
          </button>
        );
      }
    );
    
    Button.displayName = "Button";
    
    export default Button;

With this you don't have to directly go and do assign all props, it will fetch it from its HTML element extended from.\
      For full code, visit : `component/Button.tsx` and `component/Input.tsx`

2) I wasn't aware of this. This is used in a page level so that, data on the page do not get cached and always get up to dated. \
   `export const revalidate = 0;`

3) Whenever you are fetching a data from bucket, it will return domain of its own, You have to add that in `next.config.js`.

   ```
      const nextConfig = {
        images: {
          domains: ["jqbtmabwrkontiohutdp.supabase.co"],
        },
      };

<hr/>
