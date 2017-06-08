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

        <Slide transition={["fade"]} bgColor="white">
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

        <Slide transition={["fade"]} bgColor="green">
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
