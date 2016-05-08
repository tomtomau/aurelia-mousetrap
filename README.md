# aurelia-mousetrap

This plugin is integrates [mousetrap.js](https://github.com/ccampbell/mousetrap) and [Aurelia](http://aurelia.io/) by dispatching messages through the [Event Aggregator](https://github.com/aurelia/event-aggregator). The keymap and callback are both configurable.

It also provides three custom attributes:

* mousetrap-focus
* mousetrap-blur
* mousetrap-click

Which allow you to bind the published event names into DOM events, see below.

## Using the plugin

Install the plugin and configure the plugin in `main.js`

`$ jspm install npm:aurelia-mousetrap`

```
.plugin('aurelia-mousetrap', config => {
	// Example keymap
	config.set('keymap', {
		"/": "KS_SEARCH",
		"n": "KS_NEW"
	});
})
```

The example keymap above will bind the `/` key to publish an event named `KS_SEARCH` on press, and `n` to send `KS_NEW`. You can name the events however you please but the key combination should be the same spec as [Mousetrap](https://craig.is/killing/mice) library.

## Custom Attributes

Custom attributes allow you to simply make the connection between the event which is published via the EventAggregator and UI/DOM events.

### mousetrap-focus

When the event is published, it focuses on the element

```
<input type="text" mousetrap-focus="KS_SEARCH">
```

### mousetrap-blur

When the event is published, it blurs the element

```
<input type="text" mousetrap-blur="KS_BLUR">
```

### mousetrap-click

When the event is published, it clicks on the element

```
<a class="btn btn-primary" mousetrap-click="KS_NEW">
```

## Custom callback

You can specify a custom callback with the configuration as well:

```
config.set('callback', eventName => {
	// Do something with the eventName! 
});
```


## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```

4. You can now run the tests with this command:

  ```shell
  karma start
  ```

## Contributing

Source code is located in `src/index.js`. To build the source, run `gulp build`. Please follow [Aurelia/Durandal Contribution Guidelines](https://github.com/DurandalProject/about/blob/master/CONTRIBUTING.md#type) where possible through the use of GitHub pull requests.
