import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Zoe`s Timetable quiz',
        short_name: 'Zoe`s Timetable quiz',
        description: 'An app to help Zoe learn her times tables',
        theme_color: '#ffffff',
        icons: [
          {
            src: "windows11/SmallTile.scale-100.png",
            sizes: "71x71"
          },
          {
            src: "windows11/SmallTile.scale-125.png",
            sizes: "89x89"
          },
          {
            src: "windows11/SmallTile.scale-150.png",
            sizes: "107x107"
          },
          {
            src: "windows11/SmallTile.scale-200.png",
            sizes: "142x142"
          },
          {
            src: "windows11/SmallTile.scale-400.png",
            sizes: "284x284"
          },
          {
            src: "windows11/Square150x150Logo.scale-100.png",
            sizes: "150x150"
          },
          {
            src: "windows11/Square150x150Logo.scale-125.png",
            sizes: "188x188"
          },
          {
            src: "windows11/Square150x150Logo.scale-150.png",
            sizes: "225x225"
          },
          {
            src: "windows11/Square150x150Logo.scale-200.png",
            sizes: "300x300"
          },
          {
            src: "windows11/Square150x150Logo.scale-400.png",
            sizes: "600x600"
          },
          {
            src: "windows11/Wide310x150Logo.scale-100.png",
            sizes: "310x150"
          },
          {
            src: "windows11/Wide310x150Logo.scale-125.png",
            sizes: "388x188"
          },
          {
            src: "windows11/Wide310x150Logo.scale-150.png",
            sizes: "465x225"
          },
          {
            src: "windows11/Wide310x150Logo.scale-200.png",
            sizes: "620x300"
          },
          {
            src: "windows11/Wide310x150Logo.scale-400.png",
            sizes: "1240x600"
          },
          {
            src: "windows11/LargeTile.scale-100.png",
            sizes: "310x310"
          },
          {
            src: "windows11/LargeTile.scale-125.png",
            sizes: "388x388"
          },
          {
            src: "windows11/LargeTile.scale-150.png",
            sizes: "465x465"
          },
          {
            src: "windows11/LargeTile.scale-200.png",
            sizes: "620x620"
          },
          {
            src: "windows11/LargeTile.scale-400.png",
            sizes: "1240x1240"
          },
          {
            src: "windows11/Square44x44Logo.scale-100.png",
            sizes: "44x44"
          },
          {
            src: "windows11/Square44x44Logo.scale-125.png",
            sizes: "55x55"
          },
          {
            src: "windows11/Square44x44Logo.scale-150.png",
            sizes: "66x66"
          },
          {
            src: "windows11/Square44x44Logo.scale-200.png",
            sizes: "88x88"
          },
          {
            src: "windows11/Square44x44Logo.scale-400.png",
            sizes: "176x176"
          },
          {
            src: "windows11/StoreLogo.scale-100.png",
            sizes: "50x50"
          },
          {
            src: "windows11/StoreLogo.scale-125.png",
            sizes: "63x63"
          },
          {
            src: "windows11/StoreLogo.scale-150.png",
            sizes: "75x75"
          },
          {
            src: "windows11/StoreLogo.scale-200.png",
            sizes: "100x100"
          },
          {
            src: "windows11/StoreLogo.scale-400.png",
            sizes: "200x200"
          },
          {
            src: "windows11/SplashScreen.scale-100.png",
            sizes: "620x300"
          },
          {
            src: "windows11/SplashScreen.scale-125.png",
            sizes: "775x375"
          },
          {
            src: "windows11/SplashScreen.scale-150.png",
            sizes: "930x450"
          },
          {
            src: "windows11/SplashScreen.scale-200.png",
            sizes: "1240x600"
          },
          {
            src: "windows11/SplashScreen.scale-400.png",
            sizes: "2480x1200"
          },
          {
            src: "windows11/Square44x44Logo.targetsizes-16.png",
            sizes: "16x16"
          },
          {
            src: "windows11/Square44x44Logo.targetsizes-20.png",
            sizes: "20x20"
          },
          {
            src: "windows11/Square44x44Logo.targetsizes-24.png",
            sizes: "24x24"
          },
          {
            src: "windows11/Square44x44Logo.targetsizes-30.png",
            sizes: "30x30"
          },
          {
            src: "windows11/Square44x44Logo.targetsizes-32.png",
            sizes: "32x32"
          },
          {
            src: "windows11/Square44x44Logo.targetsizes-36.png",
            sizes: "36x36"
          },
          {
            src: "windows11/Square44x44Logo.targetsizes-40.png",
            sizes: "40x40"
          },
          {
            src: "windows11/Square44x44Logo.targetsizes-44.png",
            sizes: "44x44"
          },
          {
            src: "windows11/Square44x44Logo.targetsizes-48.png",
            sizes: "48x48"
          },
          {
            src: "windows11/Square44x44Logo.targetsizes-60.png",
            sizes: "60x60"
          },
          {
            src: "windows11/Square44x44Logo.targetsizes-64.png",
            sizes: "64x64"
          },
          {
            src: "windows11/Square44x44Logo.targetsizes-72.png",
            sizes: "72x72"
          },
          {
            src: "windows11/Square44x44Logo.targetsizes-80.png",
            sizes: "80x80"
          },
          {
            src: "windows11/Square44x44Logo.targetsizes-96.png",
            sizes: "96x96"
          },
          {
            src: "windows11/Square44x44Logo.targetsizes-256.png",
            sizes: "256x256"
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsizes-16.png",
            sizes: "16x16"
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsizes-20.png",
            sizes: "20x20"
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsizes-24.png",
            sizes: "24x24"
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsizes-30.png",
            sizes: "30x30"
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsizes-32.png",
            sizes: "32x32"
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsizes-36.png",
            sizes: "36x36"
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsizes-40.png",
            sizes: "40x40"
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsizes-44.png",
            sizes: "44x44"
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsizes-48.png",
            sizes: "48x48"
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsizes-60.png",
            sizes: "60x60"
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsizes-64.png",
            sizes: "64x64"
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsizes-72.png",
            sizes: "72x72"
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsizes-80.png",
            sizes: "80x80"
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsizes-96.png",
            sizes: "96x96"
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsizes-256.png",
            sizes: "256x256"
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsizes-16.png",
            sizes: "16x16"
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsizes-20.png",
            sizes: "20x20"
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsizes-24.png",
            sizes: "24x24"
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsizes-30.png",
            sizes: "30x30"
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsizes-32.png",
            sizes: "32x32"
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsizes-36.png",
            sizes: "36x36"
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsizes-40.png",
            sizes: "40x40"
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsizes-44.png",
            sizes: "44x44"
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsizes-48.png",
            sizes: "48x48"
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsizes-60.png",
            sizes: "60x60"
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsizes-64.png",
            sizes: "64x64"
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsizes-72.png",
            sizes: "72x72"
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsizes-80.png",
            sizes: "80x80"
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsizes-96.png",
            sizes: "96x96"
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsizes-256.png",
            sizes: "256x256"
          },
          {
            src: "android/android-launchericon-512-512.png",
            sizes: "512x512"
          },
          {
            src: "android/android-launchericon-192-192.png",
            sizes: "192x192"
          },
          {
            src: "android/android-launchericon-144-144.png",
            sizes: "144x144"
          },
          {
            src: "android/android-launchericon-96-96.png",
            sizes: "96x96"
          },
          {
            src: "android/android-launchericon-72-72.png",
            sizes: "72x72"
          },
          {
            src: "android/android-launchericon-48-48.png",
            sizes: "48x48"
          },
          {
            src: "ios/16.png",
            sizes: "16x16"
          },
          {
            src: "ios/20.png",
            sizes: "20x20"
          },
          {
            src: "ios/29.png",
            sizes: "29x29"
          },
          {
            src: "ios/32.png",
            sizes: "32x32"
          },
          {
            src: "ios/40.png",
            sizes: "40x40"
          },
          {
            src: "ios/50.png",
            sizes: "50x50"
          },
          {
            src: "ios/57.png",
            sizes: "57x57"
          },
          {
            src: "ios/58.png",
            sizes: "58x58"
          },
          {
            src: "ios/60.png",
            sizes: "60x60"
          },
          {
            src: "ios/64.png",
            sizes: "64x64"
          },
          {
            src: "ios/72.png",
            sizes: "72x72"
          },
          {
            src: "ios/76.png",
            sizes: "76x76"
          },
          {
            src: "ios/80.png",
            sizes: "80x80"
          },
          {
            src: "ios/87.png",
            sizes: "87x87"
          },
          {
            src: "ios/100.png",
            sizes: "100x100"
          },
          {
            src: "ios/114.png",
            sizes: "114x114"
          },
          {
            src: "ios/120.png",
            sizes: "120x120"
          },
          {
            src: "ios/128.png",
            sizes: "128x128"
          },
          {
            src: "ios/144.png",
            sizes: "144x144"
          },
          {
            src: "ios/152.png",
            sizes: "152x152"
          },
          {
            src: "ios/167.png",
            sizes: "167x167"
          },
          {
            src: "ios/180.png",
            sizes: "180x180"
          },
          {
            src: "ios/192.png",
            sizes: "192x192"
          },
          {
            src: "ios/256.png",
            sizes: "256x256"
          },
          {
            src: "ios/512.png",
            sizes: "512x512"
          },
          {
            src: "ios/1024.png",
            sizes: "1024x1024"
          }
        ]
      },
    }),],
  base: '/timetable-quiz/', // The base path of your GitHub Pages repository

})