// Import React

import preloader from "spectacle/lib/utils/preloader";
import CodeSlide from 'spectacle-code-slide';
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
};

preloader(images);

const theme = createTheme(
  {
    primary: colors.blue,
    secondary: colors.dark,
    tertiary: colors.lightBlue,
    quartenary: colors.lightGray,
    white: colors.white,
    bar: colors.green,
    text: colors.dark,
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
      <Deck transition={["fade"]} theme={theme} transitionDuration={300} progress="bar">

        {/* Intro slide */}
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
            <Image src={images.dataart.replace("/", "")} />
          </Link>
        </Slide>

        {/* Talk plan slide */}
        <Slide transition={["fade"]}
          bgColor="white"
        >
          <List style={{ lineHeight: '2.4em' }} textColor="dark">
            <ListItem>What are higher-order components?</ListItem>
            <ListItem>What are some use cases?</ListItem>
            <ListItem>Using recompose & building custom HOCs</ListItem>
          </List>
        </Slide>

        {/* What HOC are? */}
        <Slide
          transition={["fade"]}
          notes={`
                <ul>
                  <li>let's do a recap - on the same page</li>
                  <li>really fancy name for a really
simple concept</li>
                  <li>It's a function that accepts the component and returns a new component which behavior is enhanced.</li>
                </ul>
            `}
        >
          <Heading textColor="white" size={5} style={{ fontFamily: fonts.Monospace }}>
            Component => EnhancedComponent
            </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          notes={`
              They might also accept some additional parameters.
            `}
        >
          <Heading textColor="white" size={5} style={{ fontFamily: fonts.Monospace }}>
            (arg1, arg2, Component) =>
            </Heading>
          <Heading textColor="white" size={5} style={{ fontFamily: fonts.Monospace }}>
            EnhancedComponent
            </Heading>
        </Slide>

        <Slide
          transition={["fade"]}

          notes={`
              Or they might use currying. Good reason for that.  
            `}
        >
          <Heading textColor="white" size={5} style={{ fontFamily: fonts.Monospace }}>
            (arg1, arg2) => (Component) =>
            </Heading>
          <Heading textColor="white" size={5} style={{ fontFamily: fonts.Monospace }}>
            EnhancedComponent
            </Heading>
        </Slide>

        {/* `connect` example */}
        <CodeSlide
          notes={`
              Let's take a look on concrete examples.
              Describe how 'react-redux' work.
            `}
          transition={["fade"]}
          lang="js"
          code={require("!raw!../assets/code/redux-connect.example")}
          ranges={[
            { loc: [0, 1], title: 'react-redux' },
            { loc: [1, 2] },
            { loc: [3, 9] },
            { loc: [10, 13] },
            { loc: [14, 17], note: '(arg1, arg2) => (Component) => EnhancedComponent' }
          ]}
        />

        <Slide
          transition={["fade"]}
          bgColor={colors.lightGray}
        >
          <Heading size={3} color="primary">
            What can I do with HOC?
            </Heading>
          <List style={{ textAlign: "center" }}>
            <ListItem>
              Code reuse, logic abstraction
              </ListItem>
            <ListItem>
              Render Highjacking
              </ListItem>
            <ListItem>
              State abstraction and manipulation
              </ListItem>
            <ListItem>
              Props manipulation
              </ListItem>
          </List>
        </Slide>


        {/* Props Proxy */}
        <CodeSlide
          notes={`
              <ul>
                <li>You can read, add, edit and remove the props that are being passed 
to the WrappedComponent.</li>
                <li>You can abstract state by providing props and callbacks, 
similar to how container deal with presentational.
</li>
                <li>Let's review this pattern first.</li>
              </ul>  
            `}
          transition={["fade"]}
          lang="js"
          code={require('!raw!../assets/code/props-proxy-1.example')}
          style={{ fontSize: '0.8em' }}
          ranges={[
            { loc: [0, 1], title: 'Props Proxy' },
            { loc: [2, 3] },
            { loc: [4, 18] },
            { loc: [21, 22] },
            { loc: [25, 26] },
            { loc: [27, 36] },
            { loc: [37, 38] },
            { loc: [41, 42] }
          ]}
        />

        <Slide
          transition={["fade"]}
          bgColor={colors.lightGray}
          notes={`
              <ul>
                <li>There's pattern in React that separating components according to certain
types of responsibilities they have.</li>
              </ul>  
            `}
        >
          <Heading size={3} color="primary">
            Container
            </Heading>
          <Heading size={3} color="primary">
            vs.
            </Heading>
          <Heading size={3} color="primary">
            Presentational
            </Heading>
          <Heading size={3} color="primary">
            Components
            </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor={colors.dark}
          notes={`
            Some components are designed to be purely presentational. They simply
accept props and return React elements.
            `}
        >
          <CodePane
            lang="jsx"
            source={require("raw!../assets/code/presentational-component-post.example")}
            margin="20px auto"
            style={{ fontSize: '1em' }}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor={colors.dark}
          notes={`
              <ul>
                <li>
                Another components perform more complex tasks: manage subs, fetch stuff, biz logic.
                </li>
                <li>These components
are called Containers.</li>
                <li>They do all the heavy job before passing
down props</li>
                <li>Some people call these Smart vs. Dumb components.</li>
              </ul>  
            `}
        >
          <CodePane
            lang="jsx"
            source={require("raw!../assets/code/container-component-post.example")}
            margin="20px auto"
            style={{ fontSize: '0.9em' }}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor={colors.dark}>
          <CodePane
            lang="jsx"
            source={require("raw!../assets/code/fetch-post.example")}
            margin="20px auto"
            style={{ fontSize: '0.65em' }}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor={colors.dark}>
          <CodePane
            lang="jsx"
            source={require("raw!../assets/code/fetch-resource.example")}
            margin="20px auto"
            style={{ fontSize: '0.65em' }}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor={colors.dark}>
          <CodePane
            lang="jsx"
            source={require("raw!../assets/code/fetch-user.example")}
            margin="20px auto"
            style={{ fontSize: '0.8em' }}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor={colors.lightGray}>
          <Heading size={3} color="primary">
            Props Proxy
            </Heading>
          <Heading size={2} color="primary">
            &
            </Heading>
          <Heading size={3} color="primary">
            Inheritance Inversion
            </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor={colors.dark}
          notes={`
              <ul>
                <li>(Enhancer) extends the WrappedComponent</li>
                <li>called II, cause instead of the WrappedComponent 
extending some Enhancer class</li>
                <li>it is passively extended by the Enhancer</li>
                <li>II allows the HOC to have access to the WrappedComponent 
instance via this (state, props, component 
lifecycle hooks)</li>
              </ul>  
            `}
        >
          <CodePane
            lang="jsx"
            source={require("raw!../assets/code/inheritance-inversion.example")}
            margin="20px auto"
            style={{ fontSize: '0.9em' }}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor={colors.lightGray}
        >
          <Heading size={2} fit caps style={{ fontWeight: 300 }}>
            Recompose
            </Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.compose.replace("/", "")} bgDarken={0.55}>
          <Heading size={3} textColor={colors.white}>
            HOCs can be composed
            </Heading>
          <Heading size={3} textColor={colors.white}>
            into more useful HOCs
            </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor={colors.dark}>
          <CodePane
            lang="jsx"
            source={require("raw!../assets/code/recompose-composed-post.example")}
            margin="20px auto"
            style={{ fontSize: '0.7em' }}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor={colors.lightGray}>
          <Heading size={2}>Pros</Heading>
          <List style={{ textAlign: 'center', lineHeight: '2.2em' }}>
            <ListItem>Less code dublication</ListItem>
            <ListItem>Pushes to use composition pattern</ListItem>
            <ListItem>Speed up development and refactoring</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor={colors.lightGray}>
          <Heading size={2}>Cons</Heading>
          <List style={{ textAlign: 'center', lineHeight: '2.2em' }}>
            <ListItem>More complex for newcomers</ListItem>
            <ListItem>Expensive to change when abstraction is wrong</ListItem>
            <ListItem>Performance cavets</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.ironmanThanks.replace("/", "")} bgDarken={0.55}>
          <Heading size={1} textColor='primary'>Thank you!</Heading>
          <List style={{ listStyle: 'none', textAlign: 'center' }}>
            <ListItem>
              <Link textColor="primary" href="http://suevalov.com" target="__blank">Alex Suevalov</Link>
            </ListItem>
            <ListItem>
              <Link textColor="primary" href="https://twitter.com/Suevalov" target="__blank">@suevalov</Link>
            </ListItem>
            <ListItem>
              <Link textColor="primary" href="http://dataart.com" target="__blank">DataArt</Link>
            </ListItem>
            <ListItem>
              <Link textColor="primary" href="mailto:suevalov.me@gmail.com" target="__blank">suevalov.me@gmail.com</Link>
            </ListItem>
            <ListItem>
              <Link textColor="primary" href="https://github.com/suevalov" target="__blank">https://github.com/suevalov</Link>
            </ListItem>
          </List>
        </Slide>
      </Deck >
    );
  }
}

export default Presentation;
