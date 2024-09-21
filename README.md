# Getting Started with the Project

### [Live Demo](https://databalk-assessment.netlify.app/) 

### `npm start`

- Runs the app in development mode.
- Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
- The page will automatically reload when you make changes to the code.
- Console output will display any linting errors, helping you maintain clean code.

### `npm run build`

- Builds the app for production, outputting to the `build` folder.
- Compiles React in production mode and optimizes the build for maximum performance.
- The build is minified, and filenames include content hashes for cache busting.
- The app is ready for deployment to a live environment.

For more details on deployment, see the [official deployment guide](https://facebook.github.io/create-react-app/docs/deployment).


### Accessibility

- Efforts have been made to ensure the app is accessible to all users, including those with disabilities:
  - **Semantic HTML**: Proper use of HTML elements for accessibility, such as `aria-labels` and roles.
  - **Accessible Buttons**: All buttons have discernible names for screen readers.
  - **Contrast Compliance**: Background and foreground colors provide sufficient contrast.
  - **Sequential Headings**: Headings appear in a sequentially descending order to maintain logical flow.
  - **Alt Texts**: Images include descriptive alt texts for screen readers.

### Responsiveness

- The app is fully responsive and adapts seamlessly to both mobile and desktop screens:
  - **Responsive Layout**: The design adapts to various screen sizes, ensuring usability across devices.
  - **Mobile Menu**: A fully functional mobile menu enhances navigation on smaller screens.

### State Management

- This project did not require any significant state management solutions.


### Design Considerations

- Text transitions hover state etc
- Mobile friendly image.
- A proper Syle Guide would have been helpfull to standardize the design accrose the application. While I was able to copy the designs from Figma, having a proper guide would have allowed me to     easily override the default Tailwind styling, ensuring adherence to the project’s specific design strategy. This guide should include:
    Color palettes
    Margin and padding definitions
    Hover states and transitions
    Button sizes and styles
    Iconography usage
    Typography (font sizes, weights, and spacing etc)
- A mobile version would have also been nice, it would make things much easier instead guessing what it would look like based on the desktop designs.
- Also for SEO purposes Google is biased towards mobile version over desktop, so having a Mobile first design approach would help with SEO and rankings.



