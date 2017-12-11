
Set t=%*
If Not Defined t GOTO END

If %1==chrome  GOTO WORK
If %1==firefox GOTO WORK
If %1==edge    GOTO WORK
If %1==opera  GOTO WORK
GOTO END

:WORK
set target=%1
echo build for %target%
rd /S /Q publish\%target%
md publish\%target%
If %1==edge    GOTO EDGE
If %1==chrome  GOTO CHROME
If %1==firefox  GOTO FIREFOX
If %1==opera  GOTO OPERA
GOTO END

:EDGE
copy manifest\edge\AppxManifest.xml publish\%target%
md publish\%target%\Extension
md publish\%target%\Assets
for %%a in (44, 50, 150) do copy images\edge\wallabagger-%%a.png publish\%target%\Assets
xcopy /E /Y build\%target%\*.* publish\%target%\Extension
"C:\Program Files (x86)\Windows Kits\10\App Certification Kit\makeappx.exe" pack /h SHA256 /d publish\%target% /p publish\wallabagger.appx
GOTO END

:CHROME
call bin\pack.cmd chrome
move publish\wallabagger.zip publish\chrome
GOTO END

:FIREFOX
call bin\packcrx.cmd firefox wallabagger.pem
move build\firefox.crx publish/firefox/wallabagger.crx
GOTO :END

:OPERA
call bin\packcrx.cmd chrome wallabagger.pem
move build\chrome.crx publish/opera/wallabagger.nex
GOTO :END


:END
echo end publishing
