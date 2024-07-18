
# 📬 Newsletter Subscription Module

This project is a React component created using the Vite-TypeScript template, designed to facilitate newsletter subscriptions through a floating card interface.

## ✨ Features

- **🌟 Floating Card Module**: Implemented a floating card module for newsletter subscription.
- **📝 Subscription Form**: Includes a heading, description, email input field, and subscribe button.
- **✅ Validation**: Validates email format and provides immediate feedback.
- **📩 Dynamic Messages**: Displays "Subscription Successful" or "Please enter a valid email address" based on input.
- **❌ Close Button**: Allows users to dismiss the newsletter banner.
- **🧪 Testing**: Unit tested various scenarios including initial rendering, invalid email submission, successful subscription, and banner closure.

## 🛠️ Technologies Used

- **⚛️ React**: Frontend library for building user interfaces.
- **🚀 Vite**: Next-generation frontend tooling.
- **🟦 TypeScript**: Typed JavaScript for improved code quality and developer experience.

## 📥 Installation
- Clone the repository:
   ```bash
   git clone https://github.com/yourusername/newsletter-subscription-module.git
   cd newsletter-subscription-module
- Install dependencies:npm install
- Start the development server:npm run dev

## Testing
-initialize: npm run test
- **Test Scenarios**
- Initial State: Ensure the component renders with the initial state.
- Invalid Email Submission: Verify the form submission with an invalid email.
- Valid Email Submission: Ensure successful subscription with a valid email.
- Banner Closure: Test the banner closes when the close button is clicked.


<img width="1423" alt="216,342" src="https://github.com/user-attachments/assets/8000e4bb-eefe-415a-ab00-f8f0aa5eb256">

   
   
    

   



















# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
