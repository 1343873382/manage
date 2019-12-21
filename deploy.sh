#!/bin/bash

# 会部署到 wx.redrock.team/game/cyxbs-bms/
# 要把 vue.config.js 的 publicPath 改成 
# publicPath: process.env.NODE_ENV === 'production' ? '/cyxbs-bms/' : '/',

npm run build
mv build cyxbs-bms
scp -r -P 2022 cyxbs-bms root@wx.redrock.team:~/www/
rm -rf cyxbs-bms
