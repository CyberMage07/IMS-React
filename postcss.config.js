// postcss.config.js
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    postcssPresetEnv({
      stage: 1, // Adjust the stage as needed
      features: {
        'nesting-rules': true, // Enable nesting if needed
      },
    }),
  ],
};
``
