:: creates archive for loading to google store
7z a -r -tzip wallabagger.zip build\chrome\*.*
move /Y wallabagger.zip publish
