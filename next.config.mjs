/** @type {import('next').NextConfig} */
const nextConfig = {};

// Adding the new compiler configuration for styled-components
nextConfig.compiler = {
  ...nextConfig.compiler, // Spread operator to ensure we don't overwrite existing config
   styledComponents: true,
 };

//  // Include next-google-fonts configuration
// nextConfig.googleFonts = {
//   families: {
//     'Inter': ['Inter', 'sans-serif'],
//     // Add other Google Fonts here
//   },
// };

export default nextConfig;
