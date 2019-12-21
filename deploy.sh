#!/bin/bash

# 会部署到 wx.redrock.team/game/cyxbs-bms/

npm run build
mv build cyxbs-bms
scp -r -P 2022 cyxbs-bms root@wx.redrock.team:~/www/
rm -rf cyxbs-bms
