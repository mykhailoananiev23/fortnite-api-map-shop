<!-- HTML !-->

# <a href="https://www.bombfn.com"><button class="button-92" role="button" title="www.bombfn.com">BOMBFN</button></a>

<style>
@import url('./public/fonts/SaintNicholasPersonalRegular-lgaww.otf');

* {
  font-family: 'saint-nicholas', sans-serif;
}

.button-92 {
  --c: #fff;
  /* text color */
  background: linear-gradient(90deg, #0000 33%, #fff5, #0000 67%) var(--_p,100%)/300% no-repeat,
    #004dff;
  /* background color */
  color: #0000;
  border: none;
  transform: perspective(500px) rotateY(calc(20deg*var(--_i,-1)));
  text-shadow: calc(var(--_i,-1)* 0.08em) -.01em 0   var(--c),
    calc(var(--_i,-1)*-0.08em)  .01em 2px #0004;
  outline-offset: .1em;
  transition: 0.3s;
}

.button-92:hover,
.button-92:focus-visible {
  --_p: 0%;
  --_i: 1;
}

.button-92:active {
  text-shadow: none;
  color: var(--c);
  box-shadow: inset 0 0 9e9q #0005;
  transition: 0s;
}

.button-92 {
  font-weight: bold;
  font-size: 2rem;
  margin: 0;
  cursor: pointer;
  padding: .1em .3em;
}

/* CSS */
.button-85 {
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-85:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.button-85:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}

.chip{
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    background: #000000;
    color: #FFFFFF;
    border-radius: 8px;
    padding: 5px 24px 5px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    transition: transform 200ms,background 200ms;
}
.chip:hover{
    transform: translateY(-2px);
}
                
</style>

Fortnite is an online video game developed by Epic Games and released in 2017.
This project has been built to assist gamers in purchasing characters or items.

## <button class="button-85" role="button">Description</button>

The "Bombfn" project is an online platform designed to provide gamers with a convenient and reliable way to purchase characters and items for their favorite games. With a user-friendly interface and a wide selection of virtual goods, this platform aims to enhance the gaming experience for players.

Whether you're a casual gamer or a competitive player, the "Bombfn" project aims to provide a reliable and efficient platform for all your virtual gaming needs. Join us today and take your gaming experience to the next level!

## <button class="button-85" role="button">Features</button>

- SKILLS

<button class="chip">HTML</button>
<button class="chip">CSS</button>
<button class="chip">JavaScript</button>
<button class="chip">jQuery</button>
<button class="chip">ExpressJS</button>

- API

<a href="https://fortnite-api.com"><button class="chip">fortnite-api.com</button></a>

## <button class="button-85" role="button">Installation</button>

1. Clone the repository:

```code
git clone https://github.com/mykhailoananiev23/fortnite-api-map-shop.git
```

2. Install dependencies: `npm install`

```code
npm install
```

## <button class="button-85" role="button">Usage</button>

1. Run the application:

```code
npm start
```

2. Open your browser and visit: `http://localhost:8000`

## <button class="button-85" role="button">Contributing</button>

If you want to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request