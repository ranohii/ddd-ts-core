.PHONY: set-main-package set-module-package set-module-releaserc

# パッケージをインポートする際に build/mainのようなサブパスを指定せずに済むようにするために、
# ビルド後の package.json の main と typings フィールドを更新する
set-main-package:
	cp package.json build/main/package.json

set-module-package:
	cp package.json build/module/package.json

# build/moduleをnpm publishするためのsemantic-releaseの設定ファイルを作成する
set-module-releaserc:
	mv module.releaserc .releaserc
