# Project name: _The ssspace_

## This is a web application where you can find and view news, events and astronauts of different space agencies.

Uses [The Space Devs API](https://thespacedevs.com/llapi)

---

### In the project directory, you can run:

#### yarn start

_Runs the app in the development mode. Open http://localhost:3000 to view it in
the browser. The page will reload if you make edits._

#### yarn test

_Launches the test runner in the interactive watch mode._

#### yarn build

_Builds the app for production to the build folder._

---

## Code convention

### Syntax

- Keep code lines under 80 columns wide.
- Use soft tabs set to 2 spaces.
- Indent lines with tabs instead of spaces.
- Use single quotes.
- Use trailing commas wherever possible, including function parameters and
  calls.
- Print spaces between brackets in object literals.
- Put the > of a multi-line JSX element on the next line.
- Exclude parentheses around a sole arrow function parameter.
- Wrap prose if it exceeds the print width.
- Use semicolons.
- Set off operators with spaces.
- Use braces with all multi-line blocks.
- Place 1 space before the opening parenthesis in control statements (if, while
  etc.). Place no space before the argument list in function calls and
  declarations.

### Style

- Use Sass to keep large stylesheets well-organized.
- Favor rems for relative values, preferably typography.
- Don’t be afraid of using px when you want to exactly define a measure.
- Don't use important.
- Always prefer SVG over raster assets.

### Import/Export

- Use fot import eslint-plugin-import, groups order:
  - react;
  - external;
  - index;
  - sibling;
  - parent;
  - internal;
  - builtin;
  - object;
  - type;
  - styles.
- Always prefer named Export.
