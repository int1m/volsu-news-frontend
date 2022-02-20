/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// https://github.com/vuejs/vue-cli/issues/1198#issuecomment-818824811
declare module '*.vue' {
    import Vue from 'vue'
    // noinspection JSDuplicatedDeclaration
    export default Vue
}

declare module '@/pages/*' {
    import Vue from 'vue'
    // noinspection JSDuplicatedDeclaration
    export default Vue
}

declare module '@/components/*' {
    import Vue from 'vue'
    // noinspection JSDuplicatedDeclaration
    export default Vue
}

declare module './components/*' {
    import Vue from 'vue'
    // noinspection JSDuplicatedDeclaration
    export default Vue
}
