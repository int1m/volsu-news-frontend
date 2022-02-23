import { defineNuxtConfig } from 'nuxt3';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
  srcDir: 'src/',
  typescript: {
    strict: true,
  },
  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    // @ts-expect-error: Missing ssr key
    ssr: {
      noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue'],
    },
  },
  buildModules: [
    '@pinia/nuxt',
  ],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  dir: {
    public: './../public',
  },
  meta: {
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
      {
        name: 'color-scheme',
        content: '#light',
      },
    ],
    link: [
      {
        rel: 'icon',
        href: '/img/icon32.svg',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],
  },
});
