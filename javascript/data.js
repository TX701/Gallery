/*
images are shown in the assets folder
the originals folder contains the high quality images that the user will see when clicking on a file to view
the thumbnails folder contains low quality images that will be seen in the viewer
the thumbnails should have the same name with TB in the front of the name
for gifs the thumbnail should be a still jpg
*/

// array for gallery items
export const gallery = [
    {
      description: "Consider putting meanings dates tools or classes here", 
      file: "Game_Pitch.pdf", // this is a special case the thumbnail uses a PNG and opening this opens a series of images rather than just one
    },
    {
      description: "Consider putting meanings dates tools or classes here", // any text youd like displayed with the image
      file: "T1.jpg", // name of the file including its extension 
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "T2.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "D3.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "D4.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "F5.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "F6.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "D7.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "D8.gif", 
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "T9.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "T10.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "F11.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "D12.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "D13.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "F14.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "F15.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "T16.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "D17.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "F18.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "D19.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "F20.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "F21.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "G4.png",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "G3.png",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "G2.png",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "G1.png",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "F24.jpg",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "F23.png",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "F22.png",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "F61.png",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "F60.png",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "D35.png",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "D34.png",
    },
    {
      description: "Consider putting meanings dates tools or classes here",
      file: "D123.png",
    },
];

export const homeHTML = (num) => { // creates HTML for home page- each new instance will have a new id
    return `<div class="home" id="home${num}">
                <div class="topbar" id="home${num}-topbar">
                <div class="left">
                    <img src="./assets/icons/home.png" alt="Broken Image" />
                    <h1>Home</h1>
                </div>
                <div class="right">
                    <img id="home${num}-exit" src="./assets/icons/close-icon.png" alt="" />
                </div>
                </div>

                <div class="home-content">
                <h1>Hi</h1>
                </div>
                <div class="home-footer">
                    <div class="icon"></div>
                    <p>Show this screen each time the website starts</p>
                </div>
            </div>`;
}

export const imageHTML = (name, image, num) => { // full window images that the user opens through gallery folders
    return `<div class="image-window" id="${name}${num}">
                <div class="topbar" id="${name}${num}-topbar">
                <div class="left">
                    <h1>${image.file}</h1>
                </div>
                <div class="right">
                    <img class="tray" draggable="false" id="${name}${num}-tray" src="./assets/icons/tray-icon.png" alt="" />
                    <img class="min" draggable="false" id="${name}${num}-min" src="./assets/icons/restoredown-icon.png" alt="" />

                    <img id="${name}${num}-exit" draggable="false"  src="./assets/icons/close-icon.png" alt="" />
                </div>
                </div>
                <img src="./assets/gallery/originals/${image.file}" alt="Broken Image" draggable="false">
            </div>`;
}

export const galleryHTML = (num, folder) => { // showcases a series of images which the player can click on
    return `<div class="gallery" id="gallery${num}">
                <div class="topbar" id="gallery${num}-topbar">
                <div class="left">
                    <img src="./assets/icons/gallery.png" alt="Broken Image" />
                    <h1>${folder.charAt(0).toUpperCase()}${folder.substring(1)}</h1>
                </div>
                <div class="right">
                    <img class="tray" draggable="false" id="gallery${num}-tray" src="./assets/icons/tray-icon.png" alt="" />
                    <img class="max" draggable="false" id="gallery${num}-max" src="./assets/icons/max-icon.png" alt="" />
                    <img class="min" draggable="false" id="gallery${num}-min" src="./assets/icons/restoredown-icon.png" alt="" />
                    <img id="gallery${num}-exit" src="./assets/icons/close-icon.png" alt="" />
                </div>
                </div>

                <div class="options-bar">
                <div class="options-bar-divider"></div>
                <div class="options-bar-elements">
                    <p><span>F</span>ile</p>
                    <p><span>E</span>dit</p>
                    <p><span>V</span>iew</p>
                    <p><span>G</span>o</p>
                    <p>F<span>a</span>vorites</p>
                    <p><span>T</span>ools</p>
                    <p><span>H</span>elp</p>
                </div>
                <div class="options-bar-divider"></div>
                </div>

                <div class="img-gallery">
                <div class="left">
                    <img src="./assets/icons/gallery.png" alt="" />
                    <h1>${folder.charAt(0).toUpperCase()}${folder.substring(1)} Works</h1>
                    <div class="divider">
                        <div class="red"></div>
                        <div class="yellow"></div>
                        <div class="green"></div>
                        <div class="blue"></div>
                    </div>
                    <div class="img-text">
                    <p>Select an image to view its description</p>
                    <p>Double click to open the picture in its own window</p>
                    </div>
                </div>
                <div class="images"></div>
                </div>

                <div class="gallery-footer">
                    <div class="object-amt"></div>
                    <div class="location">
                        <img src="./assets/icons/home.png" alt="">
                        <p>My Computer</p>
                    </div>
                </div>
            </div>`
}

export const gamePitchHTML = (num) => { // opens a series of images one after another to create the illusion of a PDF
  return `<div class="game" id="game${num}">
              <div class="topbar" id="game${num}-topbar">
              <div class="left">
                  <img src="./assets/icons/gallery.png" alt="Broken Image" />
                  <h1>Game Pitch</h1>
              </div>
              <div class="right">
                  <img class="tray" id="game${num}-tray" src="./assets/icons/tray-icon.png" alt="" />
                  <img class="max" id="game${num}-max" src="./assets/icons/max-icon.png" alt="" />
                  <img class="min" id="game${num}-min" src="./assets/icons/restoredown-icon.png" alt=""/>
                  <img id="game${num}-exit" src="./assets/icons/close-icon.png" alt=""/>
              </div>
              </div>

                <div class="options-bar">
                    <div class="options-bar-divider"></div>
                    <div class="options-bar-elements">
                    <p><span>F</span>ile</p>
                    <p><span>E</span>dit</p>
                    <p><span>V</span>iew</p>
                    <p><span>G</span>o</p>
                    <p>F<span>a</span>vorites</p>
                    <p><span>T</span>ools</p>
                    <p><span>H</span>elp</p>
                    </div>
                    <div class="options-bar-divider"></div>
                    <div class="search-bar">
                    <h1>A<span>d</span>dress</h1>
                    <div class="bar">
                        <div class="bar-wrapper"> 
                        <img src="./assets/icons/game.png" alt="">
                        <p>https://www.game_pitch.com</p>
                        </div>
                        <button><img src="./assets/icons/arrow-down.png" alt=""></button>
                    </div>
                    <h1>Go</h1>
                    <h1>Links</h1>
                    </div>
                </div>

                <div class=game-container>
                    
                </div>
              <div class="game-footer">
              <h2>Game_Pitch.pdf</h2>
              <a href="./assets/game_pitch/PITCH_final.pdf" download><button>Download</button></a>
              </div>
          </div>`;
}

export const aboutHTML = (num) => { // simple about page
    return `<div class="about" id="about${num}">
                <div class="topbar" id="about${num}-topbar">
                <div class="left">
                    <img src="./assets/icons/about.png" alt="Broken Image" />
                    <h1>About</h1>
                </div>
                <div class="right">
                    <img class="tray" id="about${num}-tray" src="./assets/icons/tray-icon.png" alt="" />
                    <img class="min" id="about${num}-min" src="./assets/icons/restoredown-icon.png" alt="" />
                    <img class="max" id="about${num}-max" src="./assets/icons/max-icon.png" alt="" />
                    <img id="about${num}-exit" src="./assets/icons/close-icon.png" alt="" />
                </div>
                </div>

                <div class="options-bar">
                    <div class="options-bar-divider"></div>
                    <div class="options-bar-elements">
                    <p><span>F</span>ile</p>
                    <p><span>E</span>dit</p>
                    <p><span>V</span>iew</p>
                    <p><span>G</span>o</p>
                    <p>F<span>a</span>vorites</p>
                    <p><span>T</span>ools</p>
                    <p><span>H</span>elp</p>
                    </div>
                    <div class="options-bar-divider"></div>
                    <div class="search-bar">
                    <h1>A<span>d</span>dress</h1>
                    <div class="bar">
                        <div class="bar-wrapper"> 
                        <img src="./assets/icons/about.png" alt="">
                        <p>https://www.WebsiteName.com/about</p>
                        </div>
                        <button><img src="./assets/icons/arrow-down.png" alt=""></button>
                    </div>
                    <h1>Go</h1>
                    <h1>Links</h1>
                    </div>
                </div>

                <div class="about-container">
                    <div class="about-wrapper">
                        <h1>Name here</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, magnam! Doloremque harum iure asperiores ea repellat impedit, officiis rem cumque tenetur earum voluptas expedita corporis! Doloremque tenetur ratione ipsa possimus?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nihil fugit ipsam totam, aspernatur cum veritatis quo in culpa quas provident. Sunt, aperiam? Veritatis consectetur corporis dicta, illum expedita ex. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt optio et cupiditate aliquam accusamus tenetur laudantium, totam quaerat mollitia doloremque ipsam aspernatur nisi tempora facilis voluptatem, a qui consectetur sed!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit tempore quis exercitationem, nam beatae fugiat doloribus deleniti consectetur obcaecati culpa, iusto velit quas accusamus magni quam error repellendus ut rerum!</p>
    
                        <div class="contact">
                        <h2>Contact: </h2>
                        <a href="mailto:">username@gmail.com</a>
                        <p>(123) 456-7890</p>
                        </div>
                    </div>
                <img src="./assets/profile.jpg" alt="" draggable="false"/>
                </div>
            </div>`;
}

export const minesweeperHTML = (num) => { // minesweeper game
    return `<div class="minesweeper" id="minesweeper${num}">
                <div class="topbar" id="minesweeper${num}-topbar">
                    <div class="left">
                        <img src="./assets/icons/about.png" alt="Broken Image" />
                        <h1>Minesweeper</h1>
                    </div>
                    <div class="right">
                        <img class="tray" id="minesweeper${num}-tray" src="./assets/icons/tray-icon.png" alt="" />
                        <img class="min" id="minesweeper${num}-min" src="./assets/icons/restoredown-icon.png" alt="" />
                        <img id="minesweeper${num}-exit" src="./assets/icons/close-icon.png" alt="" />
                    </div>
                </div>

                <div class="options-bar">
                <div class="options-bar-divider"></div>
                <div class="options-bar-elements">
                    <p class="game-options-B"><span>B</span>eginner</p>
                    <p class="game-options-I"><span>I</span>ntermediate</p>
                    <p class="game-options-E"><span>E</span>xpert</p>
                </div>
                <div class="options-bar-divider"></div>
                </div>

                <div class="game-elements">
                        <div class="information-panel">
                            <div class="bomb-count-containter"><h1 class="bomb-count"></h1></div>
                            <button class="reset-button"><img class="status" src="./assets/ms/standard.png" alt=""></button>
                            <div class="timer"><h1 class="time">000</h1></div>
                        </div>
                        <div class="grid"></div>
                </div>
            </div>`
}