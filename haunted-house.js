<!DOCTYPE html>
<meta charset="utf-8" />
<head>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <meta property="og:title" content="Haunted House Horror" />
  <meta property="og:url" content="https://final-programming-bas.glitch.me/" />
  <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Playfair+Display+SC&family=Road+Rage&display=swap" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet"/>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <title>Haunted House Horror</title>
</head>

<body>
  
  <div id="moon"></div>

  <div id="screen">
    <h1>
      Haunted House Horror!
    </h1>
    <h2>
      Press ghost to start
    </h2>
    <input
      type="image"
      src="https://cdn.glitch.me/b16bb8c6-444f-4635-8929-96cdc2b7264f%2Fghostbutton.png?v=1638378575235"
      width="75"
      name="startGhost"
      class="hoverGlow"
      id="startGame"
      onClick="startGame()"
    />
  </div>

  <div id="game">
    <div id="output"></div>
    <input id="input" autofocus />
    <script src="https://raw.githubusercontent.com/besnik/text-adventure-game-js-engine/master/poc/editor/js/editor.js"></script>
    <!-- Include game data ('disk') -->
    <script src="haunted-house.js"></script>
    <!-- Include game engine -->
    <script src="script.js"></script>
    <!-- Load disk into engine -->
    <script>
      loadDisk(unlimitedAdventure);
    </script>
  </div>

  <!--   this works!!! it just gets annoying when it's constantly playing lol
  <audio autoplay>
    <source src="https://cdn.glitch.me/b16bb8c6-444f-4635-8929-96cdc2b7264f%2FES_The%20Enchanted%20Forest%20-%20Alexandra%20Woodward.mp3?v=1637544699800"
  </audio>
-->
</body>
