# 何これ
NestJSの単体テストでSQLiteを使うコード。  
TypeORMのv0.3以降でDataSource使うやつがあまり見当たらなかったのでメモ代わりにpush。  

## そもそも単体テストでSQLite使う必要あるの？
ぶっちゃけない気がするけど、できるようにしておけば選択肢が広がるので。

## コマンド
```
$ npm run test -- src/user/user.service.spect.ts
```
