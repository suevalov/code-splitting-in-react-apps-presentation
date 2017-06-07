// Import React

import preloader from "spectacle/lib/utils/preloader";
import CodeSlide from 'spectacle-code-slide';
import Terminal from "spectacle-terminal";
import Typist from "react-typist";
import React from "react";
import {
  CodePane,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Slide,
  Layout,
  Fill,
  Image,
  BlockQuote,
  Quote,
  Cite,
} from "spectacle";

import colors from './theme/colors';
import createTheme from "./theme";
import fonts from './theme/fonts';
import Suevalov from './components/Suevalov';

// Import Spectacle Core tags

// Import image preloader util

// Import theme


// Require CSS
require("normalize.css");
require("./theme/index.css");

const images = {
  me: require('../assets/me.png'),
  ironmanThanks: require('../assets/ironman-thanks.gif'),
  compose: require('../assets/compose.gif'),
  mainCover: require('../assets/main-cover.jpg'),
  dataart: require('../assets/dataart.png'),
  development: require('../assets/development.jpg'),
  lowConnection: require('../assets/low-connectivity.jpg'),
  lowConnection2: require('../assets/low-connectivity-2.jpg'),
  websiteOpeningProcess: require('../assets/website_opening_process.png'),
  noWords: require('../assets/no-words.gif'),
  interactive: require('../assets/interactive.png'),
  split: require('../assets/split.gif'),
  codeSplittings: require('../assets/code-splitting.png'),
};

preloader(images);

const theme = createTheme(
  {
    primary: colors.blue,
    secondary: colors.dark,
    tertiary: colors.lightBlue,
    quartenary: colors.lightGray,
    white: colors.white,
    blue: colors.blue,
    green: colors.green,
    lightGray: colors.lightGray,
    bar: colors.green,
    text: colors.dark,
    dark: colors.dark,
    lightBlue: colors.lightBlue,
    red: colors.red,
    violet: colors.violet,
    yellow: colors.yellow,
  },
  {
    primary: fonts.Lato,
    secondary: fonts.Lato,
    tertiary: fonts.Monospace
  }
);

class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} theme={theme} transitionDuration={300} progress="bar">

        <Slide transition={["fade"]} notes="Introduce yourself" bgImage={images.mainCover.replace("/", "")} bgDarken={0.7}>
          <Heading size={1} textSize="2em" textColor="white">
            Code-Splitting in React apps
          </Heading>
          <Heading size={6} style={{ marginTop: 50, marginBottom: 30 }} textColor="white">
            React Poznan
          </Heading>
          <div style={{ marginBottom: 20 }}>
            <Suevalov photo={images.me.replace("/", "")} />
          </div>
          <Link textColor="white" href="http://suevalov.com/presentations/code-splitting" target="__blank">
            http://suevalov.com/presentations/code-splitting
          </Link>
        </Slide>

        <Slide bgColor="white">
          <Link alt="DataArt" href="http://dataart.com/" style={{ display: 'block' }} target="__blank">
            <Image width="70%" src={images.dataart.replace("/", "")} />
          </Link>
        </Slide>

        <Slide transition={["fade"]}
          bgColor="blue"
        >
          <Heading size={1} textColor="white">
            What's code splitting?
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            🤔
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="white"
          textColor="blue"
        >
          <BlockQuote>
            <Quote>It allows you to split your code into various bundles which you can then load on demand.</Quote>
            <Cite>
              <Link href="https://webpack.js.org/" target="__blank" textColor="lightBlue">
                webpack.js.org
              </Link>
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]}
          bgColor="blue"
        >
          <Heading size={1} textColor="white">
            Why split the code?
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            🙄
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.development.replace("/", "")} bgDarken={0.7}>
          <Heading size={1} textColor="white">
            http://localhost:3000/
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            😎
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.lowConnection.replace("/", "")} bgDarken={0.6}>
          <Heading size={1} textColor="white">
            It can be slow...
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            😤
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.lowConnection2.replace("/", "")} bgDarken={0.6}>
          <Heading size={1} textColor="white">
            ... and expensive
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            😨
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.websiteOpeningProcess.replace("/", "")} width="100%" />
        </Slide>

        <Slide transition={[]} bgColor="blue">
          <Terminal showFirstEntry title="1. suevalov@suevalov: ~(zsh)" output={[
            <div>create-react-app just-few-dependencies</div>,
            <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}>yarn build</Typist>,
            <div>
              <div>                                                      </div>
              <div>Creating an optimized production build...</div>
              <div style={{ color: colors.green }}>Compiled successfully.</div>
              <div>                                                      </div>
              <div>File sizes after gzip:</div>
              <div>47.09 KB (151 KB)  build/static/js/<span style={{ color: colors.green }}>main.8b0e51a6.js</span></div>
              <div>289 B     build/static/css/<span style={{ color: colors.green }}>main.9a0fe4f1.css</span></div>
            </div>,
          ]}
          />
        </Slide>

        <Slide transition={[]} bgColor="blue">
          <Terminal showFirstEntry title="1. suevalov@suevalov: ~(zsh)" output={[
            <div>yarn add draft-js moment emojione</div>,
            <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}>yarn build</Typist>,
            <div>
              <div>                                                      </div>
              <div>Creating an optimized production build...</div>
              <div style={{ color: colors.green }}>Compiled successfully.</div>
              <div>                                                      </div>
              <div>File sizes after gzip:</div>
              <div><span style={{ color: colors.red }}>188.63 KB (851 KB)</span>  build/static/js/<span style={{ color: colors.green }}>main.0b364eff.js</span></div>
              <div>289 B     build/static/css/<span style={{ color: colors.green }}>main.9a0fe4f1.css</span></div>
            </div>,
          ]}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.interactive.replace("/", "")} width="100%" />
        </Slide>

        <Slide transition={["fade"]} bgImage={images.noWords.replace("/", "")}>
          <Heading size={1} textColor="white">...</Heading>
        </Slide>


        <Slide transition={["fade"]} bgImage={images.split.replace("/", "")} bgDarken={0.6}>
          <Heading size={1} textColor="white">
            It's time to split it
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            💪
          </Heading>
        </Slide>

        <Slide transition={["fade"]}
          bgColor="green"
        >
          <Heading size={1} textColor="white">Code Splitting Formats</Heading>
          <List textColor="white" style={{ listStyle: 'none', textAlign: 'center' }}>
            <ListItem style={{ marginBottom: '0.5em' }}>
              require.ensure
            </ListItem>
            <ListItem>
              dynamic import
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]}
          bgColor="dark"
        >
          <Heading size={1} textColor="white">require.ensure</Heading>
          <CodePane
            style={{
              backgroundColor: colors.dark,
              fontSize: '0.6em',
              maxWidth: 'initial',
              minWidth: 'initial',
              width: '80%'
            }}
            margin="0.5em auto"
            lang="javascript"
            source={`
/*
  1. Specific to Webpack.
  2. Works in both Webpack 1 & 2  
  3. Will be deprecated and replaced by import
  4. Relies on Promise. Don't forget to shim.
*/

require.ensure(
  dependencies: Array<string>, 
  callback: (require) => void, 
  errorCallback?: (error) => void, 
  chunkName?: string
)
            `}
          />
        </Slide>

        <Slide transition={["fade"]}
          bgColor="dark"
        >
          <CodePane
            style={{
              backgroundColor: colors.dark,
              fontSize: '0.7em',
              maxWidth: 'initial',
              minWidth: 'initial',
              width: '80%'
            }}
            margin="0.5em auto"
            lang="javascript"
            source={`
function determineDate() {
  require.ensure([], function(require) {
    var moment = require('moment');
    console.log(moment().format());
  });
}

determineDate();
            `}
          />
        </Slide>

        <Slide transition={[]} bgColor="blue">
          <Terminal showFirstEntry title="1. suevalov@suevalov: ~(zsh)" output={[
            <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}>yarn build</Typist>,
            <div>
              <div>                                                      </div>
              <div>Creating an optimized production build...</div>
              <div style={{ color: colors.green }}>Compiled successfully.</div>
              <div>                                                      </div>
              <div>File sizes after gzip:</div>
              <div>172.75 KB <span style={{ color: colors.green }}>(-15.88 KB)</span>  build/static/js/<span style={{ color: colors.green }}>main.b9eed592.js</span></div>
              <div>16.64 KB               build/static/js/<span style={{ color: colors.green }}>0.40f5f41a.chunk.js</span></div>
              <div>289 B                  build/static/css/<span style={{ color: colors.green }}>main.9a0fe4f1.css</span></div>
            </div>,
          ]}
          />
        </Slide>


        <Slide transition={["fade"]}
          bgColor="dark"
        >
          <CodePane
            style={{
              backgroundColor: colors.dark,
              fontSize: '0.7em',
              maxWidth: 'initial',
              minWidth: 'initial',
              width: '80%'
            }}
            margin="0.5em auto"
            lang="javascript"
            source={`
function determineDate() {
  require.ensure([], function(require) {
    var moment = require('moment');
    console.log(moment().format());
  }, 'my-first-bundle'); // <-- we've added name
}

determineDate();
            `}
          />
        </Slide>


        <Slide transition={[]} bgColor="blue">
          <Terminal showFirstEntry title="1. suevalov@suevalov: ~(zsh)" output={[
            <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}>yarn build</Typist>,
            <div>
              <div>                                                      </div>
              <div>Creating an optimized production build...</div>
              <div style={{ color: colors.green }}>Compiled successfully.</div>
              <div>                                                      </div>
              <div>File sizes after gzip:</div>
              <div>172.75 KB <span style={{ color: colors.green }}>(-15.88 KB)</span>  build/static/js/<span style={{ color: colors.green }}>main.b9eed592.js</span></div>
              <div>16.64 KB               build/static/js/<span style={{ color: colors.green }}>my-first-bundle.2eebcbb4.chunk.js</span></div>
              <div>289 B                  build/static/css/<span style={{ color: colors.green }}>main.9a0fe4f1.css</span></div>
            </div>,
          ]}
          />
        </Slide>


        <Slide transition={["fade"]}
          bgColor="dark"
        >
          <Heading size={1} textColor="white">Dependencies as Parameter</Heading>
          <CodePane
            style={{
              backgroundColor: colors.dark,
              fontSize: '0.5em',
              maxWidth: 'initial',
              minWidth: 'initial',
              width: '80%'
            }}
            margin="0.5em auto"
            lang="javascript"
            source={`
require.ensure(
  // Modules to load, but not execute yet
  ['./load-earlier'],
  () => {
    const loadEarlier = require('./load-earlier');
    // Load later on demand and include to the same chunk
    const module1 = require('./module1');
    const module2 = require('./module2');
  },
  err => console.error(err),
  'optional-name'
);
            `}
          />
        </Slide>

        <Slide transition={["fade"]}
          bgColor="dark"
        >
          <Heading size={1} textColor="white">
            <Link href="https://github.com/tc39/proposal-dynamic-import" target="__blank" textColor="white">
              import()
            </Link>
          </Heading>
          <CodePane
            style={{
              backgroundColor: colors.dark,
              fontSize: '0.6em',
              maxWidth: 'initial',
              minWidth: 'initial',
              width: '80%'
            }}
            margin="0.5em auto"
            lang="javascript"
            source={`
/*
  1. Official TC39 proposal. Stage 3.
  2. Not specific to Webpack.
  3. Supported in Webpack 2.
  4. Returns a Promise.
  5. Accepts dynamic module names.
  6. Babel plugin: syntax-dynamic-import
*/

import(path: string)
  .then((module) => ...)
  .catch((error) => ...)
            `}
          />
        </Slide>

        <Slide transition={["fade"]}
          bgColor="dark"
        >
          <CodePane
            style={{
              backgroundColor: colors.dark,
              fontSize: '0.7em',
              maxWidth: 'initial',
              minWidth: 'initial',
              width: '80%'
            }}
            margin="0.5em auto"
            lang="javascript"
            source={`
function determineDate() {
  import(/* webpackChunkName: "my-first-plugin" */ 'moment')
    .then((moment) => {
      console.log(moment().format());
    });
}

determineDate();
            `}
          />
        </Slide>


        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={1} textColor="white">
            Setting Up Dynamic Imports
          </Heading>
          <CodePane
            style={{
              backgroundColor: colors.blue,
              fontSize: '0.7em',
              maxWidth: 'initial',
              minWidth: 'initial',
              width: '80%'
            }}
            margin="0 auto"
            lang="bash"
            source={`
yarn add babel-eslint --dev`}
          />
          <CodePane
            style={{
              backgroundColor: colors.blue,
              fontSize: '0.7em',
              maxWidth: 'initial',
              minWidth: 'initial',
              width: '80%'
            }}
            margin="0 auto"
            lang="javascript"
            source={`// .eslintrc.js
module.exports = {
  ...
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  ...
}
            `}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={1} textColor="white">
            Setting Up Dynamic Imports
          </Heading>
          <CodePane
            style={{
              backgroundColor: colors.blue,
              fontSize: '0.7em',
              maxWidth: 'initial',
              minWidth: 'initial',
              width: '80%'
            }}
            margin="0 auto"
            lang="bash"
            source={`
yarn add babel-plugin-syntax-dynamic-import --dev`}
          />
          <CodePane
            style={{
              backgroundColor: colors.blue,
              fontSize: '0.7em',
              maxWidth: 'initial',
              minWidth: 'initial',
              width: '80%'
            }}
            margin="0 auto"
            lang="javascript"
            source={`// .babelrc
{
  "plugins": ["syntax-dynamic-import"],
  ...
}`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.codeSplittings.replace("/", "")} width="100%" />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="dark"
        >
          <CodePane
            lang="js"
            source={require("raw!../assets/code/example-1.example")}
            margin="20px auto"
            style={{ fontSize: '0.6em' }}
          />
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={''}
          ranges={[
            { loc: [0, 1], title: 'react-redux' },
            { loc: [1, 2] },
            { loc: [3, 9] },
            { loc: [10, 13] },
            { loc: [14, 17], note: '(arg1, arg2) => (Component) => EnhancedComponent' }
          ]}
        />

        <Slide transition={["fade"]} bgImage={images.ironmanThanks.replace("/", "")} bgDarken={0.55}>
          <Heading size={1} textColor='white' style={{ fontSize: '2.5em' }}>Thank you!</Heading>
          <List style={{ listStyle: 'none', textAlign: 'center' }} textColor="white">
            <ListItem>
              <Link textColor="primary" href="http://suevalov.com" target="__blank" textColor="white">Alex Suevalov</Link>
            </ListItem>
            <ListItem>
              <Link textColor="primary" href="https://twitter.com/Suevalov" target="__blank" textColor="white">@suevalov</Link>
            </ListItem>
            <ListItem>
              <Link textColor="primary" href="http://suevalov.com/" target="__blank" textColor="white">suevalov.com</Link>
            </ListItem>
            <ListItem>
              <Link textColor="primary" href="https://github.com/suevalov" target="__blank" textColor="white">https://github.com/suevalov</Link>
            </ListItem>
            <ListItem style={{ marginTop: 40 }}>
              <Link textColor="primary" href="http://dataart.com" target="__blank" textColor="white">
                <Image width="40%" src={images.dataart.replace("/", "")} style={{ backgroundColor: 'white' }} />
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck >
    );
  }
}

export default Presentation;
