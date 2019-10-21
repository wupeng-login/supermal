// 配置文件夹路径别名
module.expores = {
     configureWebpack: {
          resolve: {
               alias: {
                    'assets': '@/assets',
                    'common': '@/common',
                    'components': '@/components',
                    'network': '@/network',
                    'views': '@/views',
               }
          }
     }
}