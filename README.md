# icse-react-assets

[![OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/projects/7561/badge)](https://bestpractices.coreinfrastructure.org/projects/7561)

ICSE React Assets is a collection of forms and inputs using [@carbon/react](https://github.com/carbon-design-system/carbon/tree/main/packages/react). These assets are designed to streamline the creation of some front-end assets for automation tools.

## Documentation

Documentation for all components is available on storybook: http://ibm.github.io/icse-react-assets

## Installation

### Prerequisites

- [@carbon/react](https://github.com/carbon-design-system/carbon/tree/main/packages/react)
- Ensure all Carbon styles are imported into your project

### Installing icse-react-assets

1. From your React client directory use the command `npm i icse-react-assets`
2. Import components using ES6 import statements. 

### Example Import

```js
import { IcseHeading } from "icse-react-assets";
```

## Running the Local Development Environment

1. `git clone https://github.ibm.com/icse/icse-react-assets.git && cd icse-react-assets`
2. `npm run i-all`
3. Test a build with `npm update && npm run build`
4. Run `npm run dev` to run the playground environment to test any components

## Running Unit Tests

### Running Tests

To run local unit tests with mocha, use the command `npm run test`.

### Getting Test Coverage

Use the command `npm run coverage` to determine unit test coverage for this package. Currently only tests in `/src/lib` are covered when using this command.

## Building the Library for Local Development

To use the library within an application to test your changes, navigate to the base directory where your application is cloned:

```shell
cd icse-react-assets
```

Build the repo. Make sure you have bumped the package version before doing this.

```shell
npm run build
```

Package the library, and save it to a location of your choosing. For this example, the location is `~`.

```shell
npm pack --pack-destination ~
```

Finally, go to your application, and change the entry for `icse-react-assets` in your package.json to this:

```json
    "icse-react-assets": "file:<your file destination>/icse-react-assets-<package-version>.tgz",
```

## Contribution Guidelines

1. Create a new branch for your component
2. Add the component within `./src/components`
3. Export the component in `index.js` as

```js
export { default as UnderConstruction } from "./components/UnderConstruction";
```

4. Run `npm update && npm run build` to build the library
5. Test your component in the playground. Navigate to `/playground/src/App.js` and render your component
6. Run `npm run i-all` to npm install in both apps and make sure the library is updated within playground.
7. Run `npm run dev` to ensure your component renders & functions properly in the playground environment
8. Create a PR

## Documenting Components in Storybook

Storybook is a documentation tool for component libraries that allows us to more thoroughly document and test components. A live version of our storybook is available here: http://ibm.github.io/icse-react-assets
After migrating a component, please document your component in `/storybook/src/stories/<component name>.stories.js`. You can follow `IcseTextInput.stories.js` as an example.

To get started with storybook, you will first need to install it and its dependencies:

```bash
cd storybook
npm i
```

You may encounter an error with @mdx-js, if you do, run this command as well:

```bash
npm i @mdx-js/react@^1.6.22 -D --legacy-peer-deps
```

Test that storybook runs correctly:

```bash
cd ..
npm run storybook
```

This stories file can be broken down into a few distinct parts:

1.  Component Information/Documentation

You will first want to export a default object with a few nested objects within it. This object describes what the component you are writing documentation for is, where it should be located on the sidebar, any initial values, and a main description for the doc.

```js
export default {
  component: IcseTextInput, // component name
  title: "Components/Inputs/IcseTextInput", // in tabs under components > inputs > IcseTextInput > Default (bound story is default)
  args: {
    // this is an object of props and their default values in the component
  },
  argTypes: {
    disabled: { // name of the prop
      description: "A boolean value for if the TextInput is disabled", // description of the prop from readme
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: "false" } }, // default value
      control: "boolean", // what type of value we can set
    },
    ...
  },
  parameters: {
    docs: {
      description: {
        component:
          "IcseTextInput is a text input component that allows the user to input text into a field and the developer to easily validate it.", // put the component description from readme here
      },
    },
  },
};
```

2. Stories

Next, create your stories. This should be pretty similar to any examples for the component previously created, the only difference being passing in the args object instead of nothing. You can create any functions you need to pass within this component and then pass them to the component as props, just as done in the previous example files.

```js
const IcseTextInputStory = ({ ...args }) => {
  const [value, setValue] = useState("");
  const invalidCallback = function () {
    return value === "";
  };
  return (
    <IcseTextInput
      {...args}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      invalidCallback={invalidCallback}
    />
  );
};
```

3. Binding your story

Lastly, bind your story and export it. In this example, we are using `Default` as there is only one type of `IcseTextInput`. However, for components that have multiple "types," you may create multiple stories and bind each story.

```js
export const Default = IcseTextInputStory.bind({});
```

After this file is created, you can run the storybook and ensure everything works properly.

```bash
npm run storybook
```

Only after your PR is approved and before it is merged, please run the following commands to deploy to github pages.

```bash
npm run predeploy
npm run deploy-storybook
```


## Contributing

Found a bug or need an additional feature? File an issue in this repository with the following information and they will be responded to in a timely manner.

### Bugs

- A detailed title describing the issue beginning with `[BUG]` and the current release. For sprint one, filing a bug would have the title `[BUG][0.1.0] <issue title>`
- Steps to recreate said bug (including non-sensitive variables)
- (optional) Corresponding output logs **as text or as part of a code block**
- Tag bug issues with the `bug` label
- If you come across a vulnerability that needs to be addressed immediately, use the `vulnerability` label


### Features

- A detailed title describing the desired feature that includes the current release. For sprint one, a feature would have the title `[0.1.0] <feature name>`
- A detailed description including the user story
- A checkbox list of needed features
- Tag the issue with the `enhancement` label

Want to work on an issue? Be sure to assign it to yourself and branch from main. When you're done making the required changes, create a pull request.

### Pull requests

**Do not merge directly to main**. Pull requests should reference the corresponding issue filed in this repository. Please be sure to maintain **code coverage** before merging.

At least **two** reviews are required to merge a pull request. When creating a pull request, please ensure that details about unexpected changes to the codebase are provided in the description.

