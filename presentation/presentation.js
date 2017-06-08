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
  giantVsRoute: require('../assets/giant-vs-route.png'),
  routesVsComponents: require('../assets/routes-vs-components.png'),
  happy: require('../assets/happy.gif'),
  commonChunks: require('../assets/common-chunks.png'),
  comomnChunksAsync: require('../assets/commonschunk-async-children.png'),
  analyze: require('../assets/analyze.jpg'),
  sourceMap: require('../assets/source-map-analizer.png'),
  realPhone: require('../assets/real-phone.jpg'),
  waterfalls: require('../assets/waterfalls.jpg')
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

        <Slide transition={["fade"]} notes={`
            <ul>
              <li>Introduce yourself</li>
              <li>About splitting bundles and saving traffic</li>
              <li>Disclaimer: this presentation is not code-splitted</li>
            </ul>        
`} bgImage={images.mainCover.replace("/", "")} bgDarken={0.7}>
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

        <Slide bgColor="white" notes={`
          <ul>
            <li>Technology Consultancy & Solution Desing</li>
            <li>Wroclaw & Lublin</li>
          </ul>
        `}>
          <Link alt="DataArt" href="http://dataart.com/" style={{ display: 'block' }} target="__blank">
            <Image width="70%" src={images.dataart.replace("/", "")} />
          </Link>
        </Slide>

        <Slide transition={["fade"]}
          bgColor="blue"
          notes={`
            Hands up who knows about code splitting?
            Who have ever used it in apps?
          `}
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
          notes={`
            <ul>
              <li>like when a user navigates to a matching route</li>
              <li>been doing some research</li>
              <li>a lot of people are confused by code splitting</li>
              <li>"Let's me just ship my app and six month later I'll think about it".</li>
              <li>code-splitting is really easy</li>
              <li>getting to this point - read a billion of blog posts</li>
            </ul>
          `}
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
          notes={`
            <ul>
              <li>let's try to answer this question first</li>
            </ul>
          `}
        >
          <Heading size={1} textColor="white">
            Why split the code?
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            🙄
          </Heading>
        </Slide>

        <Slide transition={["fade"]} 
          bgImage={images.development.replace("/", "")} 
          bgDarken={0.7}
          notes={`
            <ul>
            <li>most of developers work on really powerful computers, with a lot of RAM, CPU, etc.</li>
            <li>local website, fiber speed</li>
            <li>deployed at the same network</li>
            </ul>
          `}
        >
          <Heading size={1} textColor="white">
            http://localhost:3000/
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            😎
          </Heading>
        </Slide>

        <Slide transition={["fade"]} 
          bgImage={images.lowConnection.replace("/", "")} 
          bgDarken={0.6}
          notes={`
            <ul>
              <li>Real life is different</li>
            </ul>
          `}
        >
          <Heading size={1} textColor="white">
            It can be slow...
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            😤
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.lowConnection2.replace("/", "")} bgDarken={0.6}
          notes={`
            <ul>
              <li>Mobile web speeds matter.</li>
              <li>On average, faster experiences lead to 70% longer sessions and 2 x more mobile ad revenue</li>
              <li>Flipkart Lite triple time-on-site</li>
              <li>GQ get an 80% increase in traffic</li>
              <li>Trainline make an additional 11M in yearly revenue</li>
              <li>Instagram increase impressions by 33%</li>
            </ul>
          `}
        >
          <Heading size={1} textColor="white">
            ... and expensive
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            😨
          </Heading>
        </Slide>

        <Slide transition={["fade"]} 
          bgColor="white"
          notes={`
            <ul>
              <li>There are a few key user moments in loading up your web app.</li>
              <li>Performance goals</li>
              <li>be interactive <5s on first visit & <2s on repeat visits</li>
              <li>Optimizing for interactivity means making the app usable for users asap</li>
              <li>critical for modern web experiences trying to provide first-class user experiences on mobile.</li>
            </ul>
          `}
        >
          <Image src={images.websiteOpeningProcess.replace("/", "")} width="100%" />
        </Slide>

        <Slide transition={[]} bgColor="blue"
          notes={`
            <ul>
              <li>It's not that easy to achieve</li>
            </ul>
          `}
        >
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
          notes={`
            <ul>
              <li>Code splitting can be done in two primary ways in webpack.</li>
            </ul>
          `}
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
          notes={`
            <ul>
              <li>Webpack statically parses it while building</li>
              <li>Any module that is referenced as a dependency or require()d within the callback function, will be added to a new chunk.</li>
              <li>The bundle will be async loaded then the code is executed</li>
            </ul>
          `}
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
          notes={`
            <ul>
              <li>The dynamic import syntax isn't in the official language specification yet.</li>
              <li>To use it, minor tweaks are needed especially at ESLint and Babel.</li>
            </ul>
          `}
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

        <Slide transition={["fade"]}
          bgColor="green"
        >
          <List textColor="white" style={{ listStyle: 'none', textAlign: 'center' }}>
            <ListItem style={{ marginBottom: '0.5em' }}>
              Route-based splitting
            </ListItem>
            <ListItem style={{ marginBottom: '0.5em' }}>
              Async components splitting
            </ListItem>
            <ListItem>
              Vendor splitting
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="white"
          notes={`
            <ul>
              <li>imagine the application</li>
              <li>serve the needed and dinamically load the rest</li>
              <li>A common piece of advice you will see is to break your app into separate routes and load each one asynchronously.</li>
            </ul>
          `}
        >
          <Image src={images.codeSplittings.replace("/", "")} width="100%" />
        </Slide>

        <Slide transition={["fade"]}
          bgColor="white"
        >
          <Heading size={1} textColor="blue">Route-based splitting</Heading>
          <Layout>
            <Fill>
              <Image style={{ marginTop: 30 }} width="90%" src={images.giantVsRoute.replace("/", "")} />
            </Fill>
            <Fill>
              <List textColor="blue" style={{ listStyle: 'none' }}>
                <ListItem style={{ marginBottom: '0.5em', fontSize: '0.9em' }}>
                  The best place to start
                </ListItem>
                <ListItem style={{ marginBottom: '0.5em', fontSize: '0.9em' }}>
                  Potentially max size reduction
                </ListItem>
                <ListItem style={{ marginBottom: '0.5em', fontSize: '0.9em' }}>
                  Router needs to be async aware
                </ListItem>
                <ListItem style={{ marginBottom: '0.5em', fontSize: '0.9em' }}>
                  Beware of code duplication in output
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="dark"
        >
          <Heading size={1} textColor="white">React Router v3 with import()</Heading>
          <CodePane
            lang="jsx"
            source={`<Route path="/" component={App}>
    <Route
      path="/login"
      getComponent={(_, cb) => {
          import(/* webpackChunkName: "login-bundle" */ './Login')
            .then(module => module.default)
            .then(Component => cb(null, Component))
            .catch(e => cb(e, null));
      }}
    />
    {/* ... */}
</Route>
`}
            margin="20px auto"
            style={{ fontSize: '0.6em', backgroundColor: colors.dark, }}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="dark"
        >
          <Heading size={1} textColor="white">React Router v3 with require.ensure</Heading>
          <CodePane
            lang="jsx"
            source={`<Route path="/" component={App}>
    <Route
      path="/login"
      getComponent={(_, cb) => {
          require.ensure([], 
            (require) => { cb(null, require('./Login'))}, 
            (e) => { cb(e, null); },
            'login-bundle')
      }}
    />
    {/* ... */}
</Route>
`}
            margin="20px auto"
            style={{ fontSize: '0.6em', backgroundColor: colors.dark, }}
          />
        </Slide>


        <Slide transition={["fade"]}
          bgColor="green"
          notes={`
            <ul>
              <li>we can do better than that</li>
              <li>usually a route is simply a component</li>
              <li>so what if we optimized around components instead of delegating that responsibility to routes? What would that buy us?</li>
            </ul>
          `}
        >
          <List textColor="white" style={{ listStyle: 'none', textAlign: 'center' }}>
            <ListItem style={{ marginBottom: '0.5em' }}>
              ✅ Route-based splitting
            </ListItem>
            <ListItem style={{ marginBottom: '0.5em' }}>
              ❔ Async components splitting
            </ListItem>
            <ListItem>
              Vendor splitting
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]}
          bgColor="white"
          notes={`
            <ul>
              <li>It turns out quite a lot</li>
              <li>There are many more places than just routes where you can pretty easily split apart your app.</li>
              <li>Modals, tabs, and many more UI components hide content until the user has done something to reveal it</li>
              <li>All the places where you can defer loading content until higher priority content is finished loading</li>
            </ul>
          `}
        >
          <Heading size={1} textColor="blue">Async components splitting</Heading>
          <Layout>
            <Fill>
              <Image style={{ marginTop: 30 }} width="90%" src={images.routesVsComponents.replace("/", "")} />
            </Fill>
            <Fill>
              <List textColor="blue" style={{ listStyle: 'none' }}>
                <ListItem style={{ marginBottom: '0.5em', fontSize: '0.9em' }}>
                  Best cases are modals, tabs, popups or components that are not visible in viewport
                </ListItem>
                <ListItem style={{ marginBottom: '0.5em', fontSize: '0.9em' }}>
                  Convenient to use as HOC
                </ListItem>
                <ListItem style={{ marginBottom: '0.5em', fontSize: '0.9em' }}>
                  Enables conditional patterns
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>        

        <CodeSlide
          notes={`
              But we need to make splitting up at the component-level as easy as splitting at the route-level. To split in a new place should be as easy as changing a few lines of app code and everything else is automatic.
          `}
          transition={["fade"]}
          lang="js"
          code={`class AsyncComponent extends React.Component {

  props: {
    loader: () => Promise<any>,
    renderPlaceholder?: () => React.Component,
    placeholderHeight?: number,
  };

  state = {
    Component: null
  };

  componentDidMount() {
    this.props.loader()
      .then(module => {
        return mod.default ? 
          mod.default : mod
      })
      .then((Component) => {
        this.setState({ Component });
      });
  }

  render() {
    const { Component } = this.state;
    const { renderPlaceholder, placeholderHeight } = this.props;
    if (Component) {
      return <Component {...this.props} />;
    }

    return renderPlaceholder ?
      renderPlaceholder() :
      <Placeholder height={placeholderHeight} />;
  }
}

const makeItAsync = (loader) => (props) => (
  <AsyncComponent {...props} loader={loader} />
);
`}
          ranges={[
            { loc: [0, 1] },
            { loc: [2, 7] },
            { loc: [8, 11] },
            { loc: [12, 22] },
            { loc: [26, 29] },
            { loc: [30, 33] },
            { loc: [36, 39] }            
          ]}
        />

        <Slide
          transition={["fade"]}
          bgColor="dark"
        >
          <CodePane
            lang="jsx"
            source={`const loader = () => import('./Login');

const AsyncLogin = (props) => (
  <AsyncComponent {...props} loader={loader} />
);

const AsyncLogin = makeItAsync(loader);
`}
            margin="20px auto"
            style={{ fontSize: '0.8em', backgroundColor: colors.dark, }}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="dark"
          notes={`
            <ul>
              <li>Seems really promising, but few questions are unanswered</li>
              <li>What about when the import() fails?</li>
              <li>or Flash of Loading Component problem?</li>
            </ul>
          `}
        >
          <Heading size={1} textColor="white">React Router v4</Heading>
          <CodePane
            lang="jsx"
            source={`const Foo = makeItAsync(() => import('./Foo'));
const Bar = makeItAsync(() => import('./Bar'));

const App = () =>
  <BrowserRouter>
    <Link to="/foo">Foo</Link>
    <Link to="/bar">Bar</Link>
    <Match pattern="/foo" component={Foo} />
    <Match pattern="/bar" component={Bar} />
  </BrowserRouter>
`}
            margin="20px auto"
            style={{ fontSize: '0.6em', backgroundColor: colors.dark, }}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="green"
          notes={`
            Instead you can use Loadable to abstract away the problem. Using Loadable is simple.
          `}
        >
          <Heading textColor="white" size={1} style={{ fontSize: '2em' }}>
            <Link href="https://github.com/thejameskyle/react-loadable" target="__blank" textColor="white">react-loadable</Link>
          </Heading>
          <Heading textColor="white" size={3} style={{ marginBottom: 20 }}>⏳ A higher order component for loading components with promises.</Heading>
          <Terminal showFirstEntry title="1. suevalov@suevalov: ~(zsh)" output={[
            <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}>yarn add react-loadable</Typist>,
            <div>
              <div>[1/4] 🔍  Resolving packages...</div>
              <div>[2/4] 🚚  Fetching packages...</div>
              <div>[3/4] 🔗  Linking dependencies...</div>
              <div>[4/4] 📃  Building fresh packages...</div>
              <div><span style={{ color: colors.green }}>success</span> Saved lockfile.</div>
              <div><span style={{ color: colors.green }}>success</span> Saved 1 new dependency.</div>
              <div>└─ react-loadable@3.3.1</div>
              <div>✨  Done in 7.88s.</div>
            </div>
          ]}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="dark"
          notes={`
            All you need to do is pass in a function which loads your component and a “Loading” component to show while your component loads.
          `}
        >
          <CodePane
            lang="jsx"
            source={`import Loadable from 'react-loadable';

function MyLoadingComponent() {
  return <div>Loading...</div>;
}

const LoadableAnotherComponent = Loadable({
  loader: () => import('./another-component'),
  LoadingComponent: MyLoadingComponent
});

class MyComponent extends React.Component {
  render() {
    return <LoadableAnotherComponent/>;
  }
}
`}
            margin="20px auto"
            style={{ fontSize: '0.6em', backgroundColor: colors.dark, }}
          />
        </Slide>

       <Slide transition={["fade"]} bgColor="red">
          <Heading size={1} textColor="white">
            What about error-handling?
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            🤓
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="dark"
        >
          <CodePane
            lang="jsx"
            source={`function MyLoadingComponent({ error }) {
  if (error) {
    return <div>Error!</div>;
  } else {
    return <div>Loading...</div>;
  }
}
`}
            margin="20px auto"
            style={{ fontSize: '0.8em', backgroundColor: colors.dark, }}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="dark"
          notes={`
          <ul>
            <li>Sometimes components load really quickly (<200ms) and the loading screen only quickly flashes on the screen.</li>
            <li>studies have proven that this causes users to perceive things taking longer than they really have.</li>
            <li>If you don’t show anything, users perceive it as being faster.</li>
          </ul>
          `}
        >
          <Heading size={1} textColor="white">Avoiding Flash Of Loading Component</Heading>
          <CodePane
            lang="jsx"
            source={`function MyLoadingComponent({ error, pastDelay }) {
  if (error) {
    return <div>Error!</div>;
  } else if (pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

Loadable({
  loader: () => import('./another-component'),
  LoadingComponent: MyLoadingComponent,
  delay: 300, // <- 200 by default
});
`}
            margin="20px auto"
            style={{ fontSize: '0.6em', backgroundColor: colors.dark, }}
          />
        </Slide>

        <CodeSlide
          notes={`
            <ul>
              <li>You can also tie loading to a specific action like scrolling or clicking a button.</li>
            </ul>
          `}
          transition={["fade"]}
          lang="js"
          code={`let LoadableMyComponent = Loadable({
  loader: () => import('./another-component'),
  LoadingComponent: MyLoadingComponent,
});

class MyComponent extends React.Component {
  state = { showComponent: false };

  onClick = () => {
    this.setState({ showComponent: true });
  };

  onMouseOver = () => {
    LoadableMyComponent.preload();
  };

  render() {
    return (
      <div>
        <button 
          onClick={this.onClick} 
          onMouseOver={this.onMouseOver}
        >
          Show loadable component
        </button>
        {this.state.showComponent && 
          <LoadableMyComponent/>}
      </div>
    )
  }
}`}
          ranges={[
            { loc: [0, 4], title: 'Preloading' },
            { loc: [16, 30] },
            { loc: [8, 11] },
            { loc: [12, 15] },
          ]}
        />

        <Slide
          transition={["fade"]}
          bgColor="dark"
          notes={`
            <ul>
              <li>You could also try to predict what the user is trying to do next and load code based on your guess.</li>
              <li>This way the functionality would be already there as the user tries to access it.</li>
            </ul>
          `}
        >
          <Heading size={1} textColor="white">We can go deeper...</Heading>
          <CodePane
            lang="jsx"
            source={`import Perimeter from 'react-perimeter';

<Perimeter
  onBreach={LoadableMyComponent.preload}
  padding={60}>
  <button onClick={this.onClick}>Show loadable component</button>
</Perimeter>
`}
            margin="20px auto"
            style={{ fontSize: '0.7em', backgroundColor: colors.dark, }}
          />
        </Slide>

        <Slide transition={["fade"]} bgImage={images.happy.replace("/", "")} />

        <Slide transition={["fade"]}
          bgColor="green"
          notes={`
            It would be better to download only the changed portion. If the vendor dependencies change, then the client should fetch only the vendor dependencies.
          `}
        >
          <List textColor="white" style={{ listStyle: 'none', textAlign: 'center' }}>
            <ListItem style={{ marginBottom: '0.5em' }}>
              ✅ Route-based splitting
            </ListItem>
            <ListItem style={{ marginBottom: '0.5em' }}>
              ✅ Async components splitting
            </ListItem>
            <ListItem>
              ❔ Vendor splitting
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="white"
          notes={`Bundle splitting can be achieved using CommonsChunkPlugin.`}
        >
          <Heading textColor="blue" size={1}>CommonsChunkPlugin</Heading>
          <Image src={images.commonChunks.replace("/", "")} width="80%" />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="dark"
          notes={`
            <ul>
              <li>The vendor dependencies can be detected by inspecting where the modules are imported.</li>
              <li>If they come from the node_modules directory, they can be split automatically through a minChunks rule.</li>
            </ul>
          `}
        >
          <CodePane
            lang="js"
            source={`{
  ...,
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks(module, count) {
            return isVendor(module);
        },
    }),
  ]
}

function isVendor({ resource }) {
  return resource &&
    resource.indexOf('node_modules') >= 0 &&
    resource.match(/\.js$/);
}
`}
            margin="20px auto"
            style={{ fontSize: '0.6em', backgroundColor: colors.dark, }}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="dark"
        >
          <CodePane
            lang="js"
            source={`{
  ...,
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks(module, count) {
            return isVendor(module) && count > 2;
        },
    }),
  ]
}

function isVendor({ resource }) {
  return resource &&
    resource.indexOf('node_modules') >= 0 &&
    resource.match(/\.js$/);
}
`}
            margin="20px auto"
            style={{ fontSize: '0.6em', backgroundColor: colors.dark, }}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="dark"
          notes={`
            <ul>
              <li>The chunks option of CommonsChunkPlugin allows you to control where the plugin is performing splitting.</li>
              <li>The option gives more granular control, especially in more complex setups.</li>
            </ul>
          `}
        >
          <CodePane
            lang="js"
            source={`new webpack.optimize.CommonsChunkPlugin({
    async: 'react-dnd',
    minChunks(module, count) {
        var context = module.context;
        var targets = [
          'react-dnd', 'react-dnd-html5-backend', 
          'react-dnd-touch-backend', 'dnd-core'
        ];
        return context && context.indexOf('node_modules') >= 0 && 
                targets.find(t => new RegExp('\\\\' + t + '\\\\', 'i').test(context));
    },
}),
`}
            margin="20px auto"
            style={{ fontSize: '0.6em', backgroundColor: colors.dark, }}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="white"
          notes={`You can control the position of shared modules through its async and children flags. async extracts shared modules to an asynchronously loaded bundle while children pushes the shared modules to the parent bundle.`}
        >
          <Heading textColor="blue" size={1} style={{ marginBottom: 40 }}>CommonsChunkPlugin</Heading>
          <Image src={images.comomnChunksAsync.replace("/", "")} width="80%" />
        </Slide>

        <Slide transition={["fade"]} bgImage={images.analyze.replace("/", "")} bgDarken={0.7}
          notes={`
            <ul>
              <li>Analyzing build statistics is a good step towards understanding webpack better.</li>
              <li>Visualizing them helps you to understand the composition of your bundles.</li>
            </ul>
          `}
        >
          <Heading size={1} textColor="white">Analyzing Build Statistics</Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="dark"
        >
          <CodePane
            lang="js"
            source={`// webpack.prod.js
  ...,
  performance: {
    maxAssetSize: 300000,
    maxEntrypointSize: 300000,
    hints: 'warning',
  },
  plugins: [ ... ]
`}
            margin="20px auto"
            style={{ fontSize: '0.6em', backgroundColor: colors.dark, }}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="dark"
        >
          <CodePane
            lang="js"
            source={`// package.json
{
  ...,
  "scripts": {
    "stats": "webpack --env production --profile --json > stats.json",
    ...
  },
  ...
}`}
            margin="20px auto"
            style={{ fontSize: '0.6em', backgroundColor: colors.dark, }}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="green">
          <Heading size={1} textColor="white">
            <Link href="https://survivejs.com/webpack/optimizing/analyzing-build-statistics/" target="__blank" textColor="white">
              Different tools to visualize
            </Link>
          </Heading>
           <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            🛠
          </Heading>
        </Slide>

         <Slide transition={["fade"]} bgColor="green">
          <Heading textColor="white" size={1} style={{ fontSize: '2em' }}>
            <Link href="https://github.com/thejameskyle/react-loadable" target="__blank" textColor="white">source-map-explorer</Link>
          </Heading>
          <Heading textColor="white" size={5} style={{ marginBottom: 20 }}>🔎 Analyze and debug space usage through source maps.</Heading>
          <Terminal showFirstEntry title="1. suevalov@suevalov: ~(zsh)" output={[
            <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}>yarn global add source-map-explorer</Typist>,
            <div>
              <div>[1/4] 🔍  Resolving packages...</div>
              <div>[2/4] 🚚  Fetching packages...</div>
              <div>[3/4] 🔗  Linking dependencies...</div>
              <div>[4/4] 📃  Building fresh packages...</div>
              <div><span style={{ color: colors.green }}>success</span> Installed "source-map-explorer@1.3.3" with binaries:</div>
              <div>- source-map-explorer</div>
              <div>✨  Done in 7.88s.</div>
            </div>,
            <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}>source-map-explorer build/static/js/main.885e7e1b.js</Typist>,
          ]}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.sourceMap.replace("/", "")} width="100%" />
        </Slide>

        <Slide transition={["fade"]} bgImage={images.realPhone.replace("/", "")} bgDarken={0.7}>
          <Heading size={1} textColor="white">
            Profile on real devices
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            📲
          </Heading>
        </Slide>


        <Slide transition={["fade"]} bgImage={images.waterfalls.replace("/", "")} bgDarken={0.7}>
          <Heading size={1} textColor="white">
            Avoid request waterfalls
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            💀
          </Heading>
        </Slide>


        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={1} textColor="white">
            Resources
          </Heading>
          <List ordered textColor="white">
            <ListItem style={{ fontSize: '1em', lineHeight: '2em' }}>
              <Link href="https://addyosmani.com/blog/progressive-web-apps-with-react/" target="__blank" textColor="white">Addy Osmani: PWA with React</Link>
            </ListItem>
            <ListItem style={{ fontSize: '1em', lineHeight: '2em' }}>
              <Link href="https://www.youtube.com/watch?v=QH94CXVv3UE" target="__blank" textColor="white">Totally Tooling Tips S3, E15</Link>
            </ListItem>
            <ListItem style={{ fontSize: '1em', lineHeight: '2em' }}>
              <Link href="https://medium.com/@adamrackis/vendor-and-code-splitting-in-webpack-2-6376358f1923" target="__blank" textColor="white">Vendor code splitting in Webpack 2</Link>
            </ListItem>
            <ListItem style={{ fontSize: '1em', lineHeight: '2em' }}>
              <Link href="https://survivejs.com/webpack/introduction/" target="__blank" textColor="white">https://survivejs.com/webpack</Link>
            </ListItem>
            <ListItem style={{ fontSize: '1em', lineHeight: '2em' }}>
              <Link href="https://webpack.js.org/guides/code-splitting/" target="__blank" textColor="white">https://webpack.js.org/</Link>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.ironmanThanks.replace("/", "")} bgDarken={0.55}>
          <Heading size={1} textColor='white' style={{ fontSize: '2.5em' }}>Thank you!</Heading>
          <List style={{ listStyle: 'none', textAlign: 'center' }} textColor="white">
            <ListItem>
              <Link href="http://suevalov.com" target="__blank" textColor="white">Alex Suevalov</Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/Suevalov" target="__blank" textColor="white">@suevalov</Link>
            </ListItem>
            <ListItem>
              <Link href="http://suevalov.com/" target="__blank" textColor="white">suevalov.com</Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/suevalov" target="__blank" textColor="white">https://github.com/suevalov</Link>
            </ListItem>
            <ListItem style={{ marginTop: 40 }}>
              <Link href="http://dataart.com" target="__blank" textColor="white">
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
