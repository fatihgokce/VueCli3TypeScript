var path = require('path')
module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.ts',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      //filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      //chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    detail:{
       // entry for the page
       entry: 'src/detail.ts',
       // the source template
       template: 'public/detail.html',
       // output as dist/index.html
       //filename: 'index.html',
       // when using title option,
       // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
       title: 'Index Page',
       // chunks to include on this page, by default includes
       // extracted common chunks and vendor chunks.
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    // subpage: 'src/subpage/main.js'
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
  
},
    // configureWebpack:config =>{
    //   if (process.env.NODE_ENV === 'production') {
    //     // mutate config for production...
    //   } else {
    //     // mutate for development...
    //   }
//       config
//     .entry('main')
//       .clear()
//   config
//     .entry('main')
//       .add('./src/main.ts')
//       .end()
//     output.path('dist').filename('[name].bundle.js');
// entry: {main:'./src/main.ts'},
// output: {
//     path: path.resolve(__dirname, './dist'),
 
//     libraryExport: 'default',
//     filename: '[name].build.js'
//   }
    // },
    // chainWebpack: config => {
      // clear the existing entry point
      // config
      //   .entry('app')
      //     .clear()
    
      // add your custom entry point
      // config
      //   .entry('main')
      //     .add('./src/js/main.js')
      //     .end()
      //     .outputDir('/dist/')
      //     .filename('[name].bundle.js');
      
      
      
    // }
  }