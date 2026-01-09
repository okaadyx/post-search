# Post Search

This is a React Native project created with Expo. It allows users to search for posts.

## Key Features

- Search for posts
- View a list of posts
- Offline support with caching
- Pull to refresh functionality

## Version

- **Project Version:** 1.0.0
- **Expo Version:** ~54.0.31
- **React Version:** 19.1.0
- **React Native Version:** 0.81.5

## Technologies Used

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/query/v5) for data fetching and caching
- [Axios](https://axios-http.com/) for making HTTP requests
- [React Navigation](https://reactnavigation.org/) for navigation
- [Eslint](https://eslint.org/) for linting

## How to Run the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/post-search.git
   ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run the project on different platforms:**

    -   **Android:**
        ```bash
        npm run android
        ```

    -   **iOS:**
        ```bash
        npm run ios
        ```

    -   **Web:**
        ```bash
        npm run web
        ```

4.  **Lint the project:**
    ```bash
    npm run lint
    ```

## Project Structure

```
c:\Users\Aady\Desktop\post-search\
├───.gitignore
├───app.json
├───eslint.config.js
├───package-lock.json
├───package.json
├───README.md
├───tsconfig.json
├───.expo\
│   └───types\
├───.git\
├───.vscode\
│   ├───extensions.json
│   ├───settings.json
│   └───.react\
├───app\
│   ├───_layout.tsx
│   └───index.tsx
├───assets\
│   └───images\
│       ├───android-icon-background.png
│       ├───android-icon-foreground.png
│       ├───android-icon-monochrome.png
│       ├───favicon.png
│       ├───icon.png
│       ├───partial-react-logo.png
│       ├───react-logo.png
│       ├───react-logo@2x.png
│       ├───react-logo@3x.png
│       └───splash-icon.png
├───components\
│   ├───external-link.tsx
│   ├───SearchComponent.tsx
│   ├───useInternetStatus.tsx
│   └───posts\
│       └───PostCard.tsx
├───constants\
│   └───theme.ts
├───lib\
│   └───queryClient.ts
├───node_modules\
└───services\
    ├───index.ts
    └───posts\
        └───index.ts
```

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.
